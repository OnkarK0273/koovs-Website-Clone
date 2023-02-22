import { Box, Divider } from "@chakra-ui/react";
import MainRoute from "./Pages/MainRoutes";
import Navbar from "./HomeComponent/Navbar";
import Navbar1 from "./HomeComponent/Navbar1";
import { useLocation } from "react-router-dom";
import { Heading } from '@chakra-ui/react';
import './App.css';



function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div>

      {location.pathname === "/admin" ? (
        false
      ) : (
        <Box>
          {" "}
          <Navbar />
          <Divider />
          <Navbar1 />
        </Box>
      )}

      {location.pathname === "/admin" ? false : <Heading>Navbar</Heading>}

      <MainRoute />
    </div>
  );
}

export default App;
