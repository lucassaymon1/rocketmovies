import React from 'react'
import ReactDOM from 'react-dom/client'
import { Preview } from './Pages/Preview'
import { NewMovie } from "./Pages/NewMovie"
import { MyMovies } from "./Pages/MyMovies"
import { Profile } from "./Pages/Profile"
import { SignIn } from "./Pages/SignIn"
import { SignUp } from "./Pages/SignUp"
import GlobalStyle from "./global"
import { ThemeProvider } from "styled-components"

import { Routes } from "./Routes/"

import theme from "./styles/theme"

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />

    </ThemeProvider>
  </React.StrictMode>
)
