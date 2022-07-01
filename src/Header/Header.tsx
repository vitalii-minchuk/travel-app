import React from "react"
import { Autocomplete } from "@react-google-maps/api"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import SearchIcon from "@mui/icons-material/Search"
import Container from "@mui/material/Container"
import {Search, SearchIconWrapper, StyledInputBase} from "./Header.styles"


const  Header: React.FC = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" }, 
            paddingBottom: {xs: "0.7rem", sm: "0"}
          }}>
            <Typography variant="h6" noWrap component="h1">
              Travel Advisor
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography 
                variant="body1"
                noWrap
                component="p"
                sx={{display: {xs: "none", sm: "block"}}}
              >
                Explore new places
              </Typography>
              {/* <Autocomplete> */}
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{paddingLeft: "5px"}} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              {/* </Autocomplete> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header