import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom"
import firebase from "firebase/compat/app"
import  CssBaseline  from '@mui/material/CssBaseline';
import { firebaseConfig } from "./apiKeys"
import { YawaUserCheck } from './YawaUserCheck';
import { ThemeProvider, createTheme } from '@mui/material/styles';

firebase.initializeApp(firebaseConfig)

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <React.StrictMode>
        <YawaUserCheck />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);