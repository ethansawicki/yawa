import React, { useEffect, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CurrentLocation } from '../currentLocation/CurrentLocation'

export const VisitorView = () => {
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
    </Routes>
  )
}
