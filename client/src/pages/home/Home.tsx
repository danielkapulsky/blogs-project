import { useGetAllBlogsQuery } from '../../services/blog';
import BlogItem from './components/BlogItem';
import { Stack } from '@mui/material';

const Home = () => {
  const {data, refetch} = useGetAllBlogsQuery();
  const blogData = data?.data;
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
        {blogData?.map((blog: any) => (
          <BlogItem blog={blog} key={blog._id} blogsRefetch={blogsRefetch}/>
        ))}
      </Stack>
    </div>
  )
}

export default Home