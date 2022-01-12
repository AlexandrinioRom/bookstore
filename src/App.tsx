import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useTypeSelector } from "./hooks/useTypeSelector"
import { authCheck } from "./store/actionCreators/user"
import Basket from './components/pages/basket'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Registration from './components/pages/registration'
import { useDispatch } from "react-redux"
import Profile from "./components/pages/profile"
import SignUp from './components/pages/signup'
import { useEffect } from "react"
import Home from './components/pages/home'
import * as React from 'react'
import theme from './theme'
import { Layout } from "./components/containers/Layout"
import { RequireAuth } from "./hoc/RequireAuth"

export default function App() {

  const { loading } = useTypeSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authCheck())
    }
  }, [])

  if (loading) {
    return (<p>Провека токена{alert('')}</p>)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route
              path="basket"
              element={
                <RequireAuth>
                  <Basket />
                </RequireAuth>
              } />
            <Route
              path="user"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              } />

            <Route path="auth/login" element={<SignUp />} />
            <Route path="auth/registration" element={<Registration />} />

          </Route>
        </Routes>
      </Router>

    </ThemeProvider >
  );
}
