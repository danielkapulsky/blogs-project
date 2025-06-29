import { Stack } from '@mui/material'
import { useEffect } from 'react'
import BlogItem from '../home/components/BlogItem'
import { useGetAllBlogsQuery } from '../../services/blog';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Favorites = () => {
    const {data: blogData, refetch} = useGetAllBlogsQuery()

     useEffect(() => {
      refetch();
     },[])
  
     const blogsRefetch = () => {refetch()};
    const activeUser = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      <Stack spacing={3} 
           display="flex"
           flexDirection="row"
           flexWrap="wrap"
           gap="10px"
           justifyContent="center"
           alignItems="flex-end">
          {blogData?.data?.filter((item) => item.likes.some((likeId) => likeId === activeUser?._id)).map((item:any) => (
          <BlogItem blog={item} key={item._id} blogsRefetch={blogsRefetch}/>
        ))}
      </Stack>
    </div>
  )
}

export default Favorites


