import { useGetAllBlogsQuery } from '../../services/blog';
import BlogItem from './components/BlogItem';
import { Stack } from '@mui/material';

const Home = () => {
  const {data} = useGetAllBlogsQuery();
  const blogData = data?.data;

  return (
    <div>
      <Stack spacing={3} 
           display="flex"
           flexDirection="row"
           flexWrap="wrap"
           gap="10px"
           alignItems="flex-end">
        {blogData?.map((blog) => (
          <BlogItem blog={blog} key={blog._id}/>
        ))}
      </Stack>
    </div>
  )
}

export default Home