import { useTypeSelector } from '../../hooks/useTypeSelector'
import { Navigate, useLocation } from 'react-router-dom'
import { Typography } from '@mui/material'
import React from 'react'

export function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation()
  const { acces } = useTypeSelector(state => state.user)

  if (!acces) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}

const Basket: React.FC = () => {
  return (
    <Typography
      color="black"
      variant="h4"
    >
      This basket page
    </Typography>
  )
}

export default Basket