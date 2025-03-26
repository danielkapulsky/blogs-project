import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { ChangeEvent, useState } from 'react';
import { IBlogError, IBlogForm } from '../../interfaces/blogInterface';
import { useCreateBlogMutation } from '../../services/blog';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const dropdownOptions = [
  { label: "Nature", value: "nature" },
  { label: "Entertainment", value: "entertainment" },
  { label: "LifeStyle", value: "lifeStyle" },
  { label: "Tech", value: "tech" },
  { label: "News", value: "news" },
]

const CreateBlog = () => {
  const [blogFormData, setBlogFormData] = useState<IBlogForm>({ title: "", subtitle: "", text: "", img: "", catagory: "" });
  const [createBlog] = useCreateBlogMutation();
  const [_errors, setErrors] = useState<IBlogError | null>(null);
  const navigate = useNavigate()

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedForm = { ...blogFormData, [name]: value };
    setBlogFormData(updatedForm)
  }

  const validateForm = () => {
    const newErrors = {} as IBlogError;

    if (validator.isEmpty(blogFormData.title)) {
      newErrors.title = 'Title is required';
    } else if (!validator.isLength(blogFormData.title, { min: 2, max: 100 })) {
      newErrors.title = 'Title must be between 2 and 100 characters';
      console.log(newErrors.title)
    }

    if (validator.isEmpty(blogFormData.subtitle)) {
      newErrors.subtitle = 'Subtitle is required';
    } else if (!validator.isLength(blogFormData.subtitle, { min: 2, max: 100 })) {
      newErrors.subtitle = 'Subtitle must be between 2 and 100 characters';
      console.log(newErrors.subtitle)
    }

    if (validator.isEmpty(blogFormData.text)) {
      newErrors.text = 'Text is required';
    } else if (!validator.isLength(blogFormData.text, { min: 2, max: 500 })) {
      newErrors.text = 'Text must be between 2 and 500 characters';
      console.log(newErrors.text)
    }

    if (validator.isEmpty(blogFormData.img)) {
      newErrors.img = 'Image Url is required';
    } else if (!validator.isURL(blogFormData.img)) {
      newErrors.img = 'Image must be a valid Url';
      console.log(newErrors.img)
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onHandleSubmit = async () => {
    if (validateForm()) {
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
                onChange={(e) => { setBlogFormData({ ...blogFormData, catagory: e.target.value }) }}
              >
                {dropdownOptions.map((option, i) => (
                  <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
                ))}
              </Select>
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