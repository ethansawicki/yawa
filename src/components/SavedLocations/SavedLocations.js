import React, { useEffect, useState } from 'react'

import { SavedLocation } from './SavedLocation'


export const SavedLocations = () => {
  const [savedLocation, setSavedLocation] = useState([])
  const [filteredLocations, setFilteredLocations] = useState([])
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
  
  useEffect(
    () => {
      const filtered = savedLocation.filter(location => userObj.uid === location.usersId )
      setFilteredLocations(filtered)
    },
    [savedLocation]
  )

  return (
    <div className='weather-widget'>
      <h1>Saved Locations</h1>
      { filteredLocations.length > 0 ?
        filteredLocations.map((location) => {
          return (
            <SavedLocation key={`location--${location.id}`} locationId={location.id} userObj={userObj} location={location} fetchUserLocations={fetchUserLocations} />
          )
        })
        : <h2>You dont have any saved locations... :(</h2>
      } 
    </div>
  )
}
