import { useSelector } from 'react-redux';
import { useGetAllBlogsQuery } from '../../services/blog';
import BlogItem from './components/BlogItem';
import { Stack } from '@mui/material';
import { RootState } from '../../store/store';

const Home = () => {
  const {data, isLoading, error} = useGetAllBlogsQuery();
  const blogData = data?.data;
  const test = useSelector((state: RootState) => state.auth)

  return (
    <div>
      <Stack spacing={3} 
        direction="row" 
        flexWrap="wrap" 
        alignItems="stretch">
        {blogData?.map((blog) => (
          <BlogItem blog={blog} key={blog._id}/>
        ))}
      </Stack>
    </div>
  )
}

export default Home