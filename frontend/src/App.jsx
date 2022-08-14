import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react"
import MainLayout from "./components/layouts/MainLayout"

function App () {
  return (
        <ChakraProvider theme={theme}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<MainLayout />} />
                    <Route exact path="/authorized" element={<MainLayout email={"MyEmail"}/>} />
                </Routes>
            </Router>
        <ColorModeScript />
        </ChakraProvider>
  )
}

export default App
