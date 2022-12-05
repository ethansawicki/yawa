import React, { useEffect, useState } from 'react'
import { SavedLocation } from './SavedLocation'


export const SavedLocations = () => {
  const [savedLocation, setSavedLocation] = useState([])
  const userStorage = localStorage.getItem('capstone_user')
  const userObj = JSON.parse(userStorage)

  const fetchUserLocations = async () => {
    const req = await fetch(`http://localhost:8088/usersSavedLocations?_expand=tags`)
    const resp = await req.json()
    setSavedLocation(resp)
  }

  useEffect(
    () => {
      fetchUserLocations()
    },
    []
  )  
  return (
    <div>
      { 
        savedLocation.map((location) => {
          return (
            <SavedLocation key={location.id} userObj={userObj} location={location} />
          )
        })
      } 
    </div>
  )
}
