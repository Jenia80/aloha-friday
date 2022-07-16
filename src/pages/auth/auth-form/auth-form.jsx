import React from 'react';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './auth-form.scss';
import {loginValidation, passwordValidation} from './validation.js';

export default function AuthForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      mode: 'onChange',
      shouldFocusError: true,
    }
  });
  const { errors } =useFormState({
    control
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className='auth-form'>
      <Typography variant="h4" component="div">
        You need to Login
      </Typography>

      <Typography 
        variant="subtitle1" 
        component="div" 
        gutterBottom={true} 
        className="auth-form__sutitle"
      >
        for navigate
      </Typography>

      <form className='auth-form__form' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({field}) => (
            <TextField
              label="login"
              size='small'
              margin='normal'
              className='auth-form__input'
              fullWidth={true}
              onChange={(event) => field.onChange(event)}
              value={field.value}
              errors={!!errors.login?.message}
              helperText={ errors.login?.message }
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({field}) => (
            <TextField
              label="password"
              type="password"
              size='small'
              margin='normal'
              className='auth-form__input'
              fullWidth={true}
              onChange={(event) => field.onChange(event)}
              value={field.value}
              errors={!!errors.password?.message}
              helperText={ errors.password?.message }
            />
          )}
        />

        <Button
          type='submit'
          variant='contained'
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
            background: 'cadetblue',
            color: 'white',
          }}
        >
          Enter
        </Button>
      </form>
    </div>
  )
}
