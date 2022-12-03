import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthorizedUserNav } from './nav/AuthorizedUserNav';
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Authorized } from './Views/Authorized';
import { CurrentLocation } from './currentLocation/CurrentLocation';

export const YawaDefaultView = () => {

    return (
        <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}

      <Route
        path="*"
        element={
          <Authorized>
            <>
              <AuthorizedUserNav />
              <CurrentLocation />
            </>
          </Authorized>
        }
      />
    </Routes>
    )
}