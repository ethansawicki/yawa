import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CurrentLocation } from '../currentLocation/CurrentLocation'

export const VisitorView = () => {
  return (
    <Routes>
        <Route path='/' element={
            <>
                <CurrentLocation />
                <Outlet />
            </>
        }></Route>
    </Routes>
  )
}
