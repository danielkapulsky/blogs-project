import { Paper, Typography, FormControl, Stack, TextField, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { IBlogError, IBlogForm } from '../../interfaces/blogInterface';
import { dropdownOptions } from '../../consts/consts';
import SendIcon from '@mui/icons-material/Send';
import Loader from '../../components/loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditBlogByIdMutation, useGetBlogByIdQuery } from '../../services/blog';
import { useBlogFormValidation } from '../../hooks/useBlogFormValidation';
import { toast } from 'react-toastify';

const EditBlog = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBlogByIdQuery(id ?? "");
  const [editBlog] = useEditBlogByIdMutation()
  const { isValidate, errors } = useBlogFormValidation()
  const navigate = useNavigate()

  const [blogFormData, setBlogFormData] = useState<IBlogForm>({
    title: "",
    subtitle: "",
    text: "",
    img: "",
    catagory: ""
  });

  useEffect(() => {
    if (data) {
      setBlogFormData({
        title: data.data.title || "",
        subtitle: data.data.subtitle || "",
        text: data.data.text || "",
        img: data.data.img || "",
        catagory: data.data.catagory || ""
      });
    }
  }, [data]);


  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBlogFormData(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = async () => {
    if (isValidate(blogFormData)) {
      if(!id) return;
      try {
        const data = await editBlog({id, payload: blogFormData});
        navigate("/myBlogs");
        toast.success("edit blog Successfully")
        console.log(data);
      } catch (err) {
        console.log(err)
      }
    } else {
      return
    }
  };

  if (isLoading || !id || !data) return <Loader />;


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
          Edit Blog
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