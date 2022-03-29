import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Games from "./components/Games/Games";

import Homepage from "./components/Homepage/Homepage";
import { ChakraProvider } from "@chakra-ui/react"
import Footer from "./components/Homepage/Footer"
import LoginForm from "./components/LoginForm";


function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/games" element={<Games/>}/>
          <Route exact path="/LoginForm" element={<LoginForm/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
