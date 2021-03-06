import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { ApolloProvider } from "@apollo/react-hooks";
import  ApolloClient  from "apollo-boost";

import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Homepage/Footer"
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import FriendProfile001 from "./components/FriendProfile/FriendProfile001";
import FriendProfile002 from "./components/FriendProfile/FriendProfile002";
import FriendProfile003 from "./components/FriendProfile/FriendProfile003";

const client = new ApolloClient({ 
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}`: '',
      },
    });
  },
  uri: '/graphql',
});


function App() {
  return (
    <ApolloProvider client={client}>
    <ChakraProvider>
    <BrowserRouter>
      <div>
        <Navbar token={false} />
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/LoginForm" element={<LoginForm/>}/>
          <Route exact path="/SignupForm" element={<SignupForm/>}/>
          <Route exact path="/FriendProfile001/:id" element={<FriendProfile001/>}/>
          <Route exact path="/FriendProfile002/:id" element={<FriendProfile002/>}/>
          <Route exact path="/FriendProfile003/:id" element={<FriendProfile003/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </ChakraProvider>
    </ApolloProvider>
  );
}
export default App;