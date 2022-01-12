import { MyInput as Input } from '../../small/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Container, Typography } from '@mui/material'
import { IFormInput } from '../../../types/user'
import { useDispatch } from 'react-redux'
import Box from '@mui/material/Box'
import { useState } from 'react'
import React from 'react'
import { update } from '../../../store/actionCreators/user'
import { useTypeSelector } from '../../../hooks/useTypeSelector'


const Profile: React.FC = () => {

  const user = useTypeSelector(state => state.user.user)

  const [display, setDisplay] = useState<Boolean>(false)
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
      dob: data.dob,
    }

    dispatch(update(reqBody))

  }

  const showInfo = () => {
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
        onClick={showInfo}
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
            type="date"
            label="Date of Birth"
            variant="standard"
            autoComplete='date'
            defaultValue={user?.dob}
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
            defaultValue={user?.fullName}
            {...register('fullName', {
              minLength: 2, required: true,
            })}
            error={Boolean(errors.fullName)}
            helperText={
              errors.fullName &&
              "This field length should be more than 1"
            }
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 0 }}
          >
            Change
          </Button>

        </Container>

      }

    </Box>
  )
}

export default Profile


