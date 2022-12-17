import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UnauthorizedUserNav } from '../nav/UnauthorizedUserNav'
import { VisitorView } from './VisitorView'

export const Unauthorized = ({successfulLogIn}) => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <UnauthorizedUserNav successfulLogIn={successfulLogIn} />
            <VisitorView />
          </>
        }
      />
    </Routes>
  )
}
