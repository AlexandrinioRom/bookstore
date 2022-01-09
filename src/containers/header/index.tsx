import { Link as LinkRouter } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import * as React from 'react'

import { useTypeSelector } from '../../hooks/useTypeSelector'

export default function Header() {
  const { acces } = useTypeSelector(state => state.auth)
  return (
    <AppBar position='static'>
      <Toolbar>
        <Box>
          <Link
            component={LinkRouter}
            to='/basket'
            color="inherit"
            underline='none'
          >
            Basket
          </Link>
        </Box>

        {!acces &&
          <Box>
            <Link
              component={LinkRouter}
              ml={2}
              to='/auth/login'
              color="inherit"
              underline="none"
            >
              Login
            </Link>
            <Link
              component={LinkRouter}
              to='/auth/registration'
              color="inherit"
              underline="none"
              sx={{ ml: 1 }}
            >
              Registration
            </Link>
          </Box>
        }

      </Toolbar>
    </AppBar>
  );
}
