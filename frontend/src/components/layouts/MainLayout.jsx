import React from "react"
import { Container, Box } from "@chakra-ui/react"
import Navbar from "../Navbar"

export default function MainLayout ({ showLogo, backgroundColor, authorized }) {
  return (
      <Box
          textAlign="center"
          fontSize="xl"
          backgroundColor={ backgroundColor || "#fcfcfc" }
          minHeight="100vh"
      >
          <Container
              maxW='8xl'
              padding={0}
          >
              <Navbar showLogo={showLogo} authorized={authorized}/>
          </Container>
      </Box>
  )
}
