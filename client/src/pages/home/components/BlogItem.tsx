import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IBlogEntity } from '../../../interfaces/blogInterface';
import { useNavigate } from 'react-router-dom';
interface BlogItemProps {
  blog: IBlogEntity
}

const BlogItem = ({ blog }: BlogItemProps) => {
  const navigate = useNavigate()

  const navigateHandle = (id: string) => {
    navigate(`/${id}`)
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
      <CardActions>
        <Button size="small" onClick={() => navigateHandle(blog._id)}>More info</Button>
      </CardActions>
    </Card>
  )
}

export default BlogItem