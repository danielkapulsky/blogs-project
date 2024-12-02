import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.tsx';
import SingleBlog from './pages/singleBlog/SingleBlog.tsx';
import Favorites from './pages/favorites/Favorites.tsx';
import MyBlogs from './pages/myBlogs/MyBlogs.tsx';
import Login from './pages/login/Login.tsx';
import Signup from './pages/signup/Signup.tsx';
import Users from './pages/users/Users.tsx';
import CreateBlog from './pages/createBlog/CreateBlog.tsx';
import EditBlog from './pages/editBlog/EditBlog.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:id",
        element: <SingleBlog />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/myBlogs",
        element: <MyBlogs />
      },
      {
        path: "/createBlog",
        element: <CreateBlog />
      },
      {
        path: "/editBlog/:id",
        element: <EditBlog />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/users",
        element: <Users />
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
