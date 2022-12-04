import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CurrentLocation } from '../currentLocation/CurrentLocation'
import { CurrentLocationHistory } from '../currentLocation/CurrentLocationHistory'
import { SavedLocations } from '../SavedLocations/SavedLocations'

export const LoggedInView = () => {
  return (
    <Routes>
        <Route path='/' element={
            <>
                <CurrentLocation />
                <Outlet />
            </>
        }></Route>
        <Route path='SavedLocations' element={<SavedLocations />} />
        <Route path='History' element={<CurrentLocationHistory />} />
    </Routes>
  )
}
