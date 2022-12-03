import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CurrentLocation } from '../currentLocation/CurrentLocation'
import { Radar } from '../Radar/Radar'
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
        <Route path='MyLocations' element={<SavedLocations />} />
        <Route path='History' element={<Radar />} />
    </Routes>
  )
}
