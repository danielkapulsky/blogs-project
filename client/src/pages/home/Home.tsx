import { useGetAllBlogsQuery } from '../../services/blog';
import BlogItem from './components/BlogItem';
import { Stack } from '@mui/material';

const Home = () => {
  const {data, isLoading, error} = useGetAllBlogsQuery();
  const blogData = data?.data;

  return (
    <div>
      <Stack spacing={5}>
        {blogData?.map((blog) => (
          <BlogItem blog={blog} key={blog._id}/>
        ))}
      </Stack>
    </div>
  )
}

export default Home