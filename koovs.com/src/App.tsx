import { Box, Divider } from "@chakra-ui/react";
import MainRoute from "./AllRoutes/MainRoutes";
import Navbar from "./HomeComponent/Navbar";
import Navbar1 from "./HomeComponent/Navbar1";
import Footer from "./HomeComponent/Footer";
import { useLocation } from "react-router-dom";
import "./App.css";


function App() {
  const location = useLocation();
  // console.log(location);
  return (
    <div  >
      {location.pathname === "/admin" ? (
        false
      ) : (
        <Box>
<<<<<<< HEAD
          <BackToTop />
=======
          {/* <BackToTop/> */}
>>>>>>> b9c71f51756986c4dd73d84e2dd673832e77dc93
          <Navbar />
          <Divider />
          <Navbar1 />
        </Box>
      )}

      <MainRoute />

      {location.pathname === "/admin" ? (
        false
      ) : (
        <Box>
          <Footer />
        </Box>
      )}
    </div>
  );
}

export default App;
