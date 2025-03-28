import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator';
import { IError, IUserAuth } from '../../interfaces/userInterface';
import { useLogInUserMutation } from '../../services/user';
import Cookies from "js-cookie";
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../services/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [errors, setErrors] = useState<IError | null>(null);
  const [formData, setFormData] = useState<IUserAuth>({ username: '', password: '' });
  const [logInUser] = useLogInUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

  }

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validateForm = () => {
    const newErrors = {} as IError;

    if (validator.isEmpty(formData.username)) {
      newErrors.username = 'Username is required';
    } else if (!validator.isLength(formData.username, { min: 2, max: 100 })) {
      newErrors.username = 'Username must be between 2 and 100 characters';
      console.log(newErrors.username)
    }

    if (!validator.isStrongPassword(formData.password)) {
      newErrors.password =
        'Password must include at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 symbol';
      console.log(newErrors.password)
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
    } else return;

    try {
      const res = await logInUser(formData);
      if (!res.error) {
        const authToken = Cookies.get("authToken");
        authToken && dispatch(setAuthToken(authToken));
        navigate("/");
        toast.success("User Logged in Successfully")
      }
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
        Login
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
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
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
          </FormControl>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}

export default Login