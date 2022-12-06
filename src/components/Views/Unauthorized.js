import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UnauthorizedUserNav } from '../nav/UnauthorizedUserNav'
import { VisitorView } from './VisitorView'

export const Unauthorized = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <UnauthorizedUserNav />
            <VisitorView />
          </>
        }
      />
    </Routes>
  )
}
