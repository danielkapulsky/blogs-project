import { useParams } from 'react-router-dom';
import { useGetBlogByIdQuery, useToggleBlogLikeMutation } from '../../services/blog';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import classes from "./SingleBlog.module.scss";
import Loader from '../../components/loader/Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { skipToken } from '@reduxjs/toolkit/query'

const SingleBlog = () => {
  // const { id } = useParams();
  // const { data, isLoading, error, refetch} = useGetBlogByIdQuery(id ?? skipToken)
  // if (!id) return <Loader />
  // if (!data) return <Loader />
  // const [likeBlog] = useToggleBlogLikeMutation();
  // const { title, createdAt, img, text } = data.data;
  // const activeUser = useSelector((state: RootState) => state.auth.user);
  // const isLiked = data.data.likes.some((likeId) => likeId === activeUser?._id);

   const { id } = useParams();

  // ✅ Always call hooks unconditionally
  const { data, isLoading, error, refetch } = useGetBlogByIdQuery(id ?? skipToken);
  const [likeBlog] = useToggleBlogLikeMutation();
  const activeUser = useSelector((state: RootState) => state.auth.user);

  // ✅ Return loading state after all hooks
  if (!id || isLoading || !data) {
    return <Loader />;
  }

  const { title, createdAt, img, text, likes, _id } = data.data;
  const isLiked = likes?.some((likeId) => likeId === activeUser?._id);

  //test next lesson the like/unlike in single blog and explain the refactor



  const onBlogLikeHandler = async () => {
    try {
      await likeBlog(data.data._id);
      refetch();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.singleBlogContainer}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={createdAt?.toString()}
        />
        <CardMedia
          component="img"
          height="194"
          image={img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={onBlogLikeHandler}>
            {isLiked? <FaHeart /> : <FaRegHeart/>}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default SingleBlog