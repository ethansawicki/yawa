import React, {useState, useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CurrentLocation } from '../currentLocation/CurrentLocation'
import { LocationHistory } from '../currentLocation/LocationHistory'
import { EditSavedLocation } from '../SavedLocations/EditSavedLocation'
import { SavedLocations } from '../SavedLocations/SavedLocations'
import { SearchLocations } from '../SearchLocations/SearchLocations'

export const LoggedInView = () => {
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  const recordPosition = (position) => {
    setLat(position.coords.latitude)
    setLong(position.coords.longitude)
  }

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(recordPosition) 
  }

  useEffect(
      () => {
          getLocation()
      },
      []
  )

  return (
    <Routes>
        <Route path='/' element={
            <>
                <CurrentLocation lat={lat} long={long} />
                <Outlet />
            </>
        }></Route>
        <Route path='/SavedLocations' element={<SavedLocations />} />
        <Route path='/History' element={<LocationHistory lat={lat} long={long} />} />
        <Route path='/SearchLocations' element={<SearchLocations />}/>
        <Route path='SavedLocations/:locationId' element={<EditSavedLocation />} />
    </Routes>
  )
}
