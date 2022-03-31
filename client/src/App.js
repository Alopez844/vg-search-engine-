import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";

import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Homepage/Footer"
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";


function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/LoginForm" element={<LoginForm/>}/>
          <Route exact path="/SignupForm" element={<SignupForm/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;