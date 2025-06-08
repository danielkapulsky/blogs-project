import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IBlogEntity } from '../../../interfaces/blogInterface';
import { useNavigate } from 'react-router-dom';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import { useLocation } from "react-router";
import { MdDelete } from "react-icons/md";
import { useDeleteBlogByIdMutation } from '../../../services/blog';
import { toast } from 'react-toastify';
import { FcLike } from "react-icons/fc";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

interface BlogItemProps {
  blog: IBlogEntity
  handleBlogDelete?: () => void
}

const BlogItem = ({ blog, handleBlogDelete }: BlogItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMyItem = location?.pathname.includes("myBlogs");
  const [deleteBlog] = useDeleteBlogByIdMutation()
  const isUserLogged = useSelector((state:RootState) => state.auth.token);
  

  const navigateHandle = (id: string, pathName: string) => {
    navigate(`/${pathName}${id}`)
  }

  const onBlogDeleteHandler = async () => {
    if (!handleBlogDelete) return;

    try {
      await deleteBlog(blog._id);
      handleBlogDelete();
      toast.success("blog deleted Successfully")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Card sx={{
      width: 345,
      height: 400,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <CardMedia
        sx={{ height: 180 }}
        image={blog.img}
        title={blog.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {blog.subtitle}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small" onClick={() => navigateHandle(blog._id, "")}>More info</Button>

        {isMyItem && <Button size="small" onClick={() => navigateHandle(blog._id, "editBlog/")}><EditNoteSharpIcon fontSize='large' /></Button>}
        {isMyItem && <Button size="large" onClick={onBlogDeleteHandler}><MdDelete size={24} /></Button>}
        {isUserLogged && <CardActions>
          <Button><FcLike /></Button>
          <p>100</p>
          </CardActions> } 

      </CardActions>
    </Card>
  )
}

export default BlogItem