import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UnauthorizedUserNav } from './components/nav/UnauthorizedUserNav'
import { VisitorView } from './components/Views/VisitorView'


export const YawaVisitorView = ({successfulLogIn}) => {
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
