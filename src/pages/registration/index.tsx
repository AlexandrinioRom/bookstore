import { MyButton as Button } from '../../components/auth/button'
import { MyInput as Input } from '../../components/auth/input'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { registration } from '../../store/actionCreators/auth'
import { MyBox } from '../../components/auth/box'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Link } from '@mui/material'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import * as React from 'react'


export default function Registration() {
  const { acces, error } = useTypeSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const reqBody = {
      email: data.get('email'),
      password: data.get('password'),
      dob: data.get('dob'),
      fullName: data.get('fullName')
    }
    dispatch(registration(reqBody))
  }

  useEffect(() => {
    if (acces) { navigate(-1) }
  }, [acces])


  if (error) {

    const errorArr = [error].join()

    return (
      <MyBox component='div'>
        <Typography variant='h4' color='error'>
          {errorArr}
        </Typography>
        <div>
          <Link href="/auth/registration">
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
        Registration
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Input
          required
          name="email"
          type="email"
          label="Email"
          variant="standard"
          autoComplete="email"
          id="standard-email-input"
        />
        <Input
          required
          name="dob"
          type="date"
          label="Date of Birthday"
          variant="standard"
          autoComplete="bday"
          id="standard-date-input"
          InputLabelProps={{
            shrink: true,
          }}

        />
        <Input
          required
          name="fullName"
          type="name"
          label="Name"
          variant="standard"
          autoComplete="name"
          id="standart-name-input"
        />
        <Input
          required
          name="password"
          type="password"
          label="Password"
          variant="standard"
          id="standard-password-input"
        />
        <Button type="submit" variant="contained">
          Registrate
        </Button>
      </Box>
    </MyBox>
  );
}