
import React from "react";
import "./App.css";
import MainRoute from "./Pages/MainRoutes";

import { Heading } from '@chakra-ui/react';
import React from 'react';

//import logo from './logo.svg';

import { useLocation } from 'react-router-dom';

import './App.css';
import MainRoute from './Pages/MainRoutes';


function App() {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      {
        location.pathname ==='/admin'? false:<Heading>Navbar</Heading>
      }
      <MainRoute/>
    </div>
  );
}

export default App;
