
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
// import theme from './theme';
import './index.css';
import './services/fetchvideos.js';
// import hooks from './Components/hooks.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider >
      <App />
      {/* <hooks/> */}
    </ChakraProvider>
  </React.StrictMode>
);
