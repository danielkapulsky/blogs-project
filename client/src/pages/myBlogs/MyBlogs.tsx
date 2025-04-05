import { useGetMyBlogsQuery } from '../../services/blog';

const MyBlogs = () => {
   const {data} = useGetMyBlogsQuery();
   console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default MyBlogs