import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { ChangeEvent, useState } from 'react';
import { IBlogForm } from '../../interfaces/blogInterface';
import { useCreateBlogMutation } from '../../services/blog';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { dropdownOptions } from '../../consts/consts';
import { useBlogFormValidation } from '../../hooks/useBlogFormValidation';


const CreateBlog = () => {
  const [blogFormData, setBlogFormData] = useState<IBlogForm>({ title: "", subtitle: "", text: "", img: "", catagory: "" });
  const [createBlog] = useCreateBlogMutation();
  const navigate = useNavigate();
  const { errors, isValidate } = useBlogFormValidation();


  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedForm = { ...blogFormData, [name]: value };
    setBlogFormData(updatedForm)
  }

  const onHandleSubmit = async () => {
    if (isValidate(blogFormData)) {
      try {
        const data = await createBlog(blogFormData);
        navigate("/");
        toast.success("create blog Successfully")
        console.log(data);
      } catch (err) {
        console.log(err)
      }

    } else return;

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

export default CreateBlog