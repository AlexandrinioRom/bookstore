import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Basket, { RequireAuth } from './pages/basket'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Registration from './pages/registration'
import SignUp from './pages/signup'
import Home from './pages/home'
import * as React from 'react'
import theme from './theme'


export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*здесь логика (условие)*/}
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
