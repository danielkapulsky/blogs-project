import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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