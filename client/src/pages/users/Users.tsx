import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useGetAllUsersQuery } from '../../services/user';

export default function Users() {
  const {data, refetch} = useGetAllUsersQuery()

  console.log(data)
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',display:"flex",flexDirection:"column", justifySelf:"center" }}>

      {data?.data.map((item) => (<ListItem key={item._id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item.email}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
               {item.username}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>))}
      <Divider variant="inset" component="li" />
    </List>
  );
}