import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CurrentLocation } from '../currentLocation/CurrentLocation'
import { LocationHistory } from '../currentLocation/LocationHistory'
import { SavedLocations } from '../SavedLocations/SavedLocations'
import { AddNewLocation } from '../SearchLocations/AddNewLocation'
import { SearchLocations } from '../SearchLocations/SearchLocations'

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
        <Route path='History' element={<LocationHistory />} />
        <Route path='/SearchLocations' element={<SearchLocations />}/>
        <Route path='SearchLocations:index' element={<AddNewLocation />} />
    </Routes>
  )
}
