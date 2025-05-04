import { useGetMyBlogsQuery } from '../../services/blog';
import { Stack } from '@mui/material';
import BlogItem from '../home/components/BlogItem';

const MyBlogs = () => {
   const {data:blogData} = useGetMyBlogsQuery();
   console.log(blogData)
  return (
    <div>
      <Stack spacing={3} 
           display="flex"
           flexDirection="row"
           flexWrap="wrap"
           gap="10px"
           alignItems="flex-end">
          {blogData?.data?.map((item) => (
          <BlogItem blog={item} key={item._id}/>
        ))}
      </Stack>
      
    </div>
  )
}

export default MyBlogs