import React, {useState, useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CurrentLocation } from '../currentLocation/CurrentLocation'
import { LocationHistory } from '../currentLocation/LocationHistory'
import { EditSavedLocation } from '../SavedLocations/EditSavedLocation'
import { SavedLocations } from '../SavedLocations/SavedLocations'
import { SearchLocations } from '../SearchLocations/SearchLocations'

export const LoggedInView = () => {
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
    })
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
