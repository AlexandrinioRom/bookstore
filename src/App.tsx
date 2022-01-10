import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Basket, { RequireAuth } from './pages/basket'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Registration from './pages/registration'
import SignUp from './pages/signup'
import Home from './pages/home'
import * as React from 'react'
import theme from './theme'
import { authCheck } from "./store/actionCreators/auth"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useTypeSelector } from "./hooks/useTypeSelector"

export default function App() {
  const { acces } = useTypeSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authCheck())
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Тут условие */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/basket"
            element={
              <RequireAuth>
                <Basket />
              </RequireAuth>
            } />
          <Route path="/auth/login" element={<SignUp />} />
          <Route path="/auth/registration" element={<Registration />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
