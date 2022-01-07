import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { MyButton as Button } from '../../components/auth/button'
import { MyInput as Input } from '../../components/auth/input'
import { registration } from '../../store/actionCreators/auth'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { MyBox } from '../../components/auth/box'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import * as React from 'react'


interface IFormInput {
  dob: string;
  email: string;
  password: string;
  fullName: string;
}

export default function Registration() {
  const { acces } = useTypeSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    mode: "onBlur"
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {

    const reqBody = {
      dob: data.dob,
      email: data.email,
      password: data.password,
      fullName: data.fullName,
    }
    dispatch(registration(reqBody))
  }

  useEffect(() => {
    if (acces) { navigate(-1) }
  }, [acces])

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
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>

        <Input
          type="email"
          label="email"
          variant="standard"
          autoComplete='email'
          {...register('email', {
            required: 'Empty',
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "This field must be email"
            }
          })}
          error={Boolean(errors.email)}
          helperText={errors.email && errors.email.message}
        />

        <Input
          type="date"
          label="Date of Birth"
          variant="standard"
          autoComplete='date'
          InputLabelProps={{
            shrink: true
          }}
          {...register('dob', {
            required: "Empty"
          })}
          error={Boolean(errors.dob)}
          helperText={errors.dob && errors.dob.message}
        />

        <Input
          type="name"
          label="name"
          variant="standard"
          autoComplete='name'
          {...register('fullName', {
            minLength: 2, required: true,
          })}
          error={Boolean(errors.fullName)}
          helperText={
            errors.fullName &&
            "This field length should be more than 1"
          }
        />

        <Input
          type="password"
          label="password"
          variant="standard"
          {...register('password', {
            minLength: 4, maxLength: 10, required: true
          })}
          error={Boolean(errors.password)}
          helperText={
            errors.password &&
            "This field length must be between 4 and 10 characters"
          }
        />

        <Button
          type="submit"
          variant="contained"
        >
          Registrate
        </Button>
      </Box>
    </MyBox>
  )
}