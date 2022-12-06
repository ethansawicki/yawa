import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UnauthorizedUserNav } from './components/nav/UnauthorizedUserNav'
import { VisitorView } from './components/Views/VisitorView'


export const YawaVisitorView = () => {
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
