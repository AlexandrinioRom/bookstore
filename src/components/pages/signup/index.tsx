import { MyInput as Input } from '../../small/input'
import { useTypeSelector } from '../../../hooks/useTypeSelector'
import { SubmitHandler, useForm } from 'react-hook-form'
import { logIn } from '../../../store/actionCreators/user'
import { MyButton } from '../../small/button'
import { MyBox } from '../../small/box'
import Typography from '@mui/material/Typography'
import { Path, useLocation, useNavigate } from 'react-router-dom'
import { IFormInput } from '../../../types/user'
import { useDispatch } from 'react-redux'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import * as React from 'react'


export default function SignIn() {

  const { acces, error, loading } = useTypeSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const myState = location.state as Partial<Path>
  const fromPage = myState?.pathname || '/'

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {

    const reqBody = {
      email: data.email,
      password: data.password
    }
    dispatch(logIn(reqBody))
  }

  useEffect(() => {

    if (acces) {
      navigate(fromPage, { replace: true })
    }

  }, [acces])

  if (loading) {
    return (<p>Провека токена</p>)
  }

  return (

    <MyBox>
      {!acces &&
        <>
          <Typography
            mb={2}
            variant="h5"
            component="h1"
            color='primary.main'
          >
            Login
          </Typography>

          <Box component='form' onSubmit={handleSubmit(onSubmit)}>

            <Input
              type="email"
              label="email"
              variant="standard"
              {...register('email', {
                required: 'Empty',
                minLength: {
                  value: 6,
                  message: 'This input length should be more than 5'
                }
              })}
              error={Boolean(errors.email)}
              helperText={errors.email && errors.email.message}
            />

            <Input
              type="password"
              label="password"
              variant="standard"
              {...register('password', {
                required: 'Empty',
                minLength: {
                  value: 4,
                  message: 'This field length should be more than 3'
                }
              })}
              error={Boolean(errors.password)}
              helperText={errors.password && errors.password.message}
            />

            {error &&
              <Typography
                mb={2}
                sx={{
                  textAlign: 'center'
                }}
                variant="h6"
                component="p"
                color='error.main'
              >
                {error}
              </Typography>
            }

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
        </>
      }
    </MyBox>
  )
}