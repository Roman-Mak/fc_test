import React from "react"
import { useMediaQuery } from "react-responsive"
import { Link, Box, Text, Stack, Avatar, Heading, Collapse, Divider, Icon } from "@chakra-ui/react"

const NavBar = ({ showLogo = true, email, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  let data
  if (email) {
    data = { email }
  }

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      {!isMobile && showTitle(showLogo)}
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      {isMobile && showTitle(showLogo)}
      {
        isMobile &&
          <MenuItem to="/profile">
                <Avatar
                    color='teal.500'
                    name={data?.email}
                    icon={<DefaultAvatarIcon color="teal.500" fontSize='2rem' />}
                    bg='white'
                    size='sm'
                  />
          </MenuItem>
      }
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

const showTitle = (show) => {
  return show ? <Title/> : <Box />
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

const DefaultAvatarIcon = (props) => (
  <Icon viewBox="0 0 128 128" role="img" aria-label=" avatar" {...props}>
    <path fill="currentColor" d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"></path>
    <path fill="currentColor" d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"></path>
  </Icon>
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
        <Box textAlign="left" width={["70%", "80%", "70%", "70%"]}>
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
