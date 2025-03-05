import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useAuthInitialization from './hooks/useAuthInitialization';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';


function App() {
  useAuthInitialization();
  const theme = useSelector((state: RootState) => state.theme)
  
  const darkTheme = createTheme({
    palette: {
      mode: theme ?? "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='"app'>
        <Navbar />
        <Outlet />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme ?? "dark"} />
      </div>
    </ThemeProvider>

  )
}

export default App
