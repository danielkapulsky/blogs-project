import { useGetMyBlogsQuery } from '../../services/blog';
import { Stack } from '@mui/material';
import BlogItem from '../home/components/BlogItem';
import { useEffect } from 'react';

const MyBlogs = () => {
   const {data:blogData, refetch} = useGetMyBlogsQuery();
   useEffect(() => {
    refetch();
   },[])

   const blogsRefetch = () => {refetch()};
  
  return (
    <div>
      <Stack spacing={3} 
           display="flex"
           flexDirection="row"
           flexWrap="wrap"
           gap="10px"
           justifyContent="center"
           alignItems="flex-end">
          {blogData?.data?.map((item:any) => (
          <BlogItem blog={item} key={item._id} blogsRefetch={blogsRefetch}/>
        ))}
      </Stack>
      
    </div>
  )
}

export default MyBlogs