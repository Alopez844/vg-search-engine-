import Navbar from "./components/Homepage/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Games from "./components/Games/Games";
import Homepage from "./components/Homepage/Homepage";
import { ChakraProvider } from "@chakra-ui/react"
import Footer from "./components/Homepage/Footer"

function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <div>
        <Navbar />
        <Homepage/>
        <Routes>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/games" element={<Games/>}/>
          <Route exact path="/Homepage" element={<Homepage/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
