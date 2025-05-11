import { Paper, Typography, FormControl, Stack, TextField, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { IBlogError, IBlogForm } from '../../interfaces/blogInterface';
import { dropdownOptions } from '../../consts/consts';
import SendIcon from '@mui/icons-material/Send';
import Loader from '../../components/loader/Loader';

const EditBlog = () => {
    // const { id } = useParams();
    // if (!id) return <Loader/>
    // const { data, isLoading, error } = useGetBlogByIdQuery(id)
    // if(!data) return <Loader/>
  const [blogFormData, setBlogFormData] = useState<IBlogForm>({ title: "", subtitle: "", text: "", img: "", catagory: "" });
  const [errors, setErrors] = useState<IBlogError | null>(null);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedForm = { ...blogFormData, [name]: value };
    setBlogFormData(updatedForm)
  }

  console.log(blogFormData)

  const onHandleSubmit = () => {
    

  }



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
              error={errors?.title !== undefined}
              helperText={errors?.title}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="subtitle"
              name='subtitle'
              value={blogFormData.subtitle}
              multiline
              maxRows={4}
              onChange={onHandleChange}
              error={errors?.subtitle !== undefined}
              helperText={errors?.subtitle}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="text"
              name='text'
              value={blogFormData.text}
              multiline
              maxRows={4}
              onChange={onHandleChange}
              error={errors?.text !== undefined}
              helperText={errors?.text}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="image"
              name='img'
              value={blogFormData.img}
              multiline
              maxRows={4}
              onChange={onHandleChange}
              error={errors?.img !== undefined}
              helperText={errors?.img}
            />

            <FormControl fullWidth error={errors?.catagory !== undefined}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={blogFormData.catagory}
                label="Category"
                onChange={(e) => { setBlogFormData({ ...blogFormData, catagory: e.target.value }) }}
              >
                {dropdownOptions.map((option, i) => (
                  <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
                ))}
              </Select>
              {errors?.catagory && <FormHelperText>{errors.catagory}</FormHelperText>}
            </FormControl>
            <Button type='submit' variant="contained" endIcon={<SendIcon />} onClick={onHandleSubmit}>
              Send
            </Button>
          </Stack>
        </FormControl>
      </Paper>
    </div>
  )
}

export default EditBlog

function useParams(): { id: any; } {
  throw new Error('Function not implemented.');
}


function useGetBlogByIdQuery(id: any): { data: any; isLoading: any; error: any; } {
  throw new Error('Function not implemented.');
}
