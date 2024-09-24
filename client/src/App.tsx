import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   main: '#333',
    // },
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='"app'>
        <Navbar />
        <Outlet />
      </div>
    </ThemeProvider>

  )
}

export default App
