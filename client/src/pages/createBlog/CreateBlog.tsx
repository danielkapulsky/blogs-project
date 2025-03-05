import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { ChangeEvent, useState } from 'react';
import { IBlogForm } from '../../interfaces/blogInterface';

const CreateBlog = () => {
  const [blogFormData, setBlogFormData] = useState<IBlogForm>({ title: "", subtitle: "", text: "", img: "", catagory: "" })

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedForm = { ...blogFormData, [name]: value };
    setBlogFormData(updatedForm)
  }

  console.log(blogFormData)

  return (
    <div>
      <Paper
        elevation={3}
        sx={{
          maxWidth: 500,
          mx: 'auto',
          mt: 5,
          p: 3,
          borderRadius: 2,
          border: "2px solid #fff"
        }}>
        <Typography variant="h4" gutterBottom align="center">
          Create Blog
        </Typography>

        <FormControl sx={{ width: "100%" }}>
          <Stack spacing={4}>

            <TextField
              id="outlined-multiline-flexible"
              label="title"
              name='title'
              value={blogFormData.title}
              multiline
              maxRows={4}
              onChange={onHandleChange}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="subtitle"
              name='subtitle'
              value={blogFormData.subtitle}
              multiline
              maxRows={4}
              onChange={onHandleChange}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="text"
              name='text'
              value={blogFormData.text}
              multiline
              maxRows={4}
              onChange={onHandleChange}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="image"
              name='img'
              value={blogFormData.img}
              multiline
              maxRows={4}
              onChange={onHandleChange}
            />

            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={blogFormData.catagory}
                label="Category"
              // onChange={onHandleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Stack>
        </FormControl>
      </Paper>
    </div>
  )
}

export default CreateBlog