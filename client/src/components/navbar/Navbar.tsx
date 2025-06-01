import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FaBlogger } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearAuthToken } from '../../services/authSlice';
import Switch from '@mui/material/Switch';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { toggleTheme } from '../../services/themeSlice';
import { toast } from 'react-toastify';
import { useLogoutMutation } from '../../services/user';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const auth = useSelector((state: RootState) => state.auth);
  const theme = useSelector((state: RootState) => state.theme);
  const [logout] = useLogoutMutation()
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await logout();
      dispatch(clearAuthToken());
      navigate('/login');
      toast.success("User Logged out successfully")
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    dispatch(toggleTheme())
  };


  const navItems = [
    { label: 'Home', path: '/', shouldDisplay: true },
    { label: 'Login', path: '/login', shouldDisplay: !auth.token },
    { label: 'Signup', path: '/signup', shouldDisplay: !auth.token },
    { label: 'Favorites', path: '/favorites', shouldDisplay: auth.token },
    { label: 'My Blogs', path: '/myBlogs', shouldDisplay: auth.token },
    { label: 'Create Blog', path: '/createBlog', shouldDisplay: auth.token },
    //@ts-ignore
    { label: 'Users', path: '/users', shouldDisplay: auth.user?.role === "admin" },
    {
      label: 'Logout',
      path: '#', // Prevent navigation on click
      shouldDisplay: auth.token,
      onClick: handleLogout, // Attach async logout handler
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <FaBlogger size={30} />
      </Typography>
      <Divider />
      <List>
        {navItems.filter((item) => item.shouldDisplay).map((item) =>
          item.label === 'Logout' ? (
            <Button key={item.label} sx={{ color: '#fff' }} onClick={item.onClick}>
              {item.label}
            </Button>
          ) : (
            <Button key={item.label} component={Link} to={item.path} sx={{ color: '#fff' }}>
              {item.label}
            </Button>
          )
        )}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <FaBlogger size={30} />
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {theme === "dark" ? <MdDarkMode size={24} color="white" /> : <MdLightMode size={24} color="yellow" />}
            <Switch
              checked={theme === "dark"}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.filter((item) => item.shouldDisplay).map((item) =>
              item.label === 'Logout' ? (
                <Button key={item.label} sx={{ color: '#fff' }} onClick={item.onClick}>
                  {item.label}
                </Button>
              ) : (
                <Button key={item.label} component={Link} to={item.path} sx={{ color: '#fff' }}>
                  {item.label}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;