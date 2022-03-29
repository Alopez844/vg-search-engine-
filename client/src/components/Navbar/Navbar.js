import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { Box, Text, useMediaQuery } from "@chakra-ui/react"

// const Container= styled.div`
//     background-color: silver;
//     padding: 1rem;
// `

function Navbar() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Box bg='silver' width='100%' p={20} color='white'>
        <Link to="/profile">Profile</Link>
        <Link to="/games">Games</Link>
    </Box>
  )
}

export default Navbar