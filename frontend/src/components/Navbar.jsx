import React from "react"
import { useMediaQuery } from "react-responsive"
import { Link, Box, Text, Stack, Avatar, Heading, Collapse, Divider } from "@chakra-ui/react"

const NavBar = ({ showLogo = true, authorized, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const { data } = { email: authorized }

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      {(() => {
        return showLogo ? <Title/> : <Box />
      })()}
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen && isMobile}>
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
          minW={["100vw", "100vw", "100px", "100px"]}
          p={0}
          marginTop={5}
          paddingTop={[5, 5, 0, 0]}
          paddingBottom={[5, 5, 0, 0]}
        >
          <Divider />
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/bookmarks">Bookmarks</MenuItem>
          <MenuItem to="/profile" isLast>
            {
              isMobile
                ? "Profile"
                : <Avatar
                  color='white'
                  name={data?.email}
                  bg='teal.700'
                  size='sm'
                  _hover={{
                    bg: "teal.800"
                  }}
                />
            }
            </MenuItem>
            </Stack>
      </MenuLinks>
    </NavBarContainer>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
)

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" width={"100%"} {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen, children }) => {
  return (
    <>
      <Collapse
        display={["block", "block", "none", "none"]}
        in={isOpen}
        p={0}>
          <Stack
            align="center"
            justify={["center"]}
            direction={["column", "column", "row", "row"]}
            p={0}
            m={0}
            minW={"100%"}
          >
          { children }
          </Stack>
      </Collapse>
      <Stack
        display={["none", "none", "block", "block"]}
        direction={"column"}>
        { children }
      </Stack>
    </>
  )
}

function Title () {
  return (
        <Box textAlign="left" width={["87%", "90%", "70%", "70%"]}>
            <Heading
              fontSize={["20px", "2xl", "2xl", "4xl"]}
              color={["white", "white", "teal", "teal"]}
              >
                <a
                    href="/"
                >
                    Some Site
                </a>
            </Heading>
            <Heading
                fontSize={["8px", "md", "lg", "lg"]}
                color={["gray.200", "gray.200", "gray.600", "gray.600"]}>
                Some subtitle
            </Heading>
        </Box>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
      <Stack
        as="nav"
        // align="center"
        direction={["row", "row"]}
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        // bg={'red'}
        bg={["teal.500", "teal.500", "transparent", "transparent"]}
        color={["white", "white", "teal.700", "teal.700"]}
        {...props}
      >
        {children}
      </Stack>
  )
}

export default NavBar
