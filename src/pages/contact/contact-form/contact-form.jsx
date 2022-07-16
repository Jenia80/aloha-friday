import React from 'react';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './contact-form.scss';

export default function ContactForm() {
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
        Send a message to us
      </Typography>

      <Typography 
        variant="subtitle1" 
        component="div" 
        gutterBottom={true} 
        className="auth-form__sutitle"
      >
        we wait for it
      </Typography>

      <form className='auth-form__form' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={{required:'required'}}
          render={({field}) => (
            <TextField
              label="your email"
              type="email"
              size='small'
              margin='normal'
              className='auth-form__input'
              fullWidth={true}
              onChange={(event) => field.onChange(event)}
              value={field.value}
              errors={!!errors.email?.message}
              helperText={ errors.email?.message }
              
            />
          )}
        />

        <Controller
          control={control}
          name="message"
          render={({field}) => (
            <TextField
              label="your message"
              type="text"
              size='small'
              margin='normal'
              className='auth-form__input'
              fullWidth={true}
              onChange={(event) => field.onChange(event)}
              value={field.value}
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

