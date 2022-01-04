import { useTypeSelector } from '../../hooks/useTypeSelector'
import { logIn } from '../../store/actionCreators/auth'
import { MyButton } from '../../components/auth/button'
import { MyInput } from '../../components/auth/input'
import { MyBox } from '../../components/auth/box'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import * as React from 'react'

export default function SignIn() {
  const { acces, error } = useTypeSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const reqBody = {
      email: data.get('email'),
      password: data.get('password'),
    }

    dispatch(logIn(reqBody))
  };

  if (acces) { navigate(-1) }

  if (error) {
    return (
      <MyBox component='div'>
        <Typography variant='h4' color='error'>{error}</Typography>
        <div>
          <Link href="/auth/login">
            Back
          </Link>
          <Link href="/" ml={2}>
            Home
          </Link>
        </div>
      </MyBox>
    )
  }

  return (

    <MyBox>
      <Typography
        mb={2}
        variant="h5"
        component="h1"
        color='primary.main'
      >
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <MyInput
          required
          name="email"
          type="email"
          label="Email"
          variant="standard"
          autoComplete="email"
          id="standard-email-input"
        />
        <MyInput
          required
          name="password"
          type="password"
          label="Password"
          variant="standard"
          id="standard-password-input"
        />
        <Grid container mt={2}>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/auth/registration" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <MyButton type="submit" variant="contained" sx={{ mt: 0 }}>
          Login
        </MyButton>
      </Box>
    </MyBox>
  );
}

