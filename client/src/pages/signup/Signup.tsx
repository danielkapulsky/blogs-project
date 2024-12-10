import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator';

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    image: '',
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (validator.isEmpty(formData.username)) {
  //     newErrors.username = 'Username is required';
  //   }
  //   if (!validator.isEmail(formData.email)) {
  //     newErrors.email = 'Invalid email address';
  //   }
  //   if (!validator.isLength(formData.password, { min: 6 })) {
  //     newErrors.password = 'Password must be at least 6 characters long';
  //   }
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 500,
        mx: 'auto',
        mt: 5,
        p: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Signup
      </Typography>
      <form /* onSubmit={handleSubmit} */>
        <Stack spacing={3}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
          // value={formData.name}
          // onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
          // value={formData.email}
          // onChange={handleChange}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <TextField
            label="Image"
            name="image"
            variant="outlined"
            fullWidth
          // value={formData.email}
          // onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}

export default Signup;