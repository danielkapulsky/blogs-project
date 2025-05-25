import { useGetMyBlogsQuery } from '../../services/blog';
import { Stack } from '@mui/material';
import BlogItem from '../home/components/BlogItem';
import { useEffect } from 'react';

const MyBlogs = () => {
   const {data:blogData, refetch} = useGetMyBlogsQuery();
  //  useEffect(() => {
  //   refetch();
  //  },[])
  
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