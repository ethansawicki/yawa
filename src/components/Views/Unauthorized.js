import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CurrentLocation } from '../currentLocation/CurrentLocation'
import { UnauthorizedUserNav } from '../nav/UnauthorizedUserNav'

export const Unauthorized = () => {
  return (
        <Routes>
      <Route
        path="*"
        element={
          <>
            <UnauthorizedUserNav />
            <CurrentLocation />
          </>
        }
      />
    </Routes>
  )
}
