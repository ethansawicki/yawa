import React, { useEffect, useState } from 'react'
import { fetchUserLocations } from '../API/FetchCalls'
import { SavedLocation } from './SavedLocation'


export const SavedLocations = () => {
  const [savedLocation, setSavedLocation] = useState([])
  const [filteredLocations, setFilteredLocations] = useState([])
  const userStorage = localStorage.getItem('capstone_user')
  const userObj = JSON.parse(userStorage)

  useEffect(
    () => {
      const getLocations = async () => {
        const locations = await fetchUserLocations()
        setSavedLocation(locations)
      }
      getLocations()
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
