import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthorizedUserNav } from './nav/AuthorizedUserNav';
import { Authorized } from './Views/Authorized';
import { LoggedInView } from './Views/LoggedInView';

export const YawaLoggedIn = () => {

    return (
      <Routes>
        <Route
          path="*"
          element={
            <Authorized>
              <>
                <AuthorizedUserNav />
                <LoggedInView />
              </>
            </Authorized>
          }
        />
      </Routes>
    )
}