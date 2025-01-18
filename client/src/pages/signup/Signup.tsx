import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator';
import { IError, IUserForm } from '../../interfaces/userInterface';
import { useCreateUserMutation } from '../../services/user';

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = useState<IError | null>(null);
  const [createUser] = useCreateUserMutation();
  const [formData, setFormData] = useState<IUserForm>({
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors = {} as IError;

    if (validator.isEmpty(formData.username)) {
      newErrors.username = 'Username is required';
    } else if (!validator.isLength(formData.username, { min: 2, max: 100 })) {
      newErrors.username = 'Username must be between 2 and 100 characters';
      console.log(newErrors.username)
    }

    if (!validator.isEmail(formData.email)) {
      newErrors.email = 'Must be a valid email address';
      console.log(newErrors.email)
    }

    if (!validator.isStrongPassword(formData.password)) {
      newErrors.password =
        'Password must include at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 symbol';
      console.log(newErrors.password)
    }

    if (!validator.isURL(formData.image)) {
      newErrors.image = 'Please enter a valid image URL';
      console.log(newErrors.image)
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
    }else return;

    try {
      console.log(formData)
      const res = await createUser(formData);
    } catch (error) {
      console.error(error);
    }
  };

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
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            value={formData.username}
            onChange={handleChange}
            error={errors?.username !== undefined}
            helperText={errors?.username}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            error={errors?.email !== undefined}
            helperText={errors?.username}
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors?.password !== undefined}
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
            <Typography variant="caption" color="error">
              {errors?.password}
            </Typography>
          </FormControl>
          <TextField
            label="Image"
            name="image"
            variant="outlined"
            fullWidth
            value={formData.image}
            onChange={handleChange}
            error={errors?.image !== undefined}
            helperText={errors?.image}
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