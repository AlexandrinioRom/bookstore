import { MyInput as Input } from '../../small/input'
import { useTypeSelector } from '../../../hooks/useTypeSelector'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Container, Typography } from '@mui/material'
import { IFormInput } from '../../../types/user'
import { useDispatch } from 'react-redux'
import Box from '@mui/material/Box'
import { useState } from 'react'
import React from 'react'
import { update } from '../../../store/actionCreators/user'


const Profile: React.FC = () => {
  const [display, setDisplay] = useState(false)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    mode: 'onSubmit'
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {

    const reqBody = {
      fullName: data.fullName,
      email: data.email,
    }

    dispatch(update(reqBody))

  }

  const showForm = () => {
    setDisplay(!display)

  }

  return (
    <Box>
      <Typography
        color="black"
        variant="h4"
      >
        User page
      </Typography>
      <Button
        onClick={showForm}
      >
        Update Info
      </Button>
      {display &&
        <Container
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: '20%' }}
        >

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

          <Button type="submit" variant="contained" sx={{ mt: 0 }}>
            Change
          </Button>

        </Container>

      }

    </Box>
  )
}

export default Profile

