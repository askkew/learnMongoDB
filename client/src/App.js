import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/home';
import Navbar from './components/navbar';
import { Upload } from './components/upload';
import { Profile } from './components/profile';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(174, 216, 234)',
    },
    secondary: {
      main: 'rgb(27, 183, 110)',
    },
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(174, 216, 234)',
    },
    secondary: {
      main: 'rgb(27, 183, 110)',
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;
