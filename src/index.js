import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom"
import firebase from "firebase/compat/app"
import  CssBaseline  from '@mui/material/CssBaseline';
import { firebaseConfig } from "./apiKeys"
import { YawaDefaultView } from './components/YawaDefaultView';
firebase.initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CssBaseline />
    <React.StrictMode>
      <YawaDefaultView />
    </React.StrictMode>
  </BrowserRouter>
);