import "./App.css";
import { Box, Divider } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import MainRoute from "./Pages/MainRoutes";
import Navbar from "./HomeComponent/Navbar";
import Navbar1 from "./HomeComponent/Navbar1";

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
      <MainRoute />
    </div>
  );
}

export default App;
