import React from "react"
import { Autocomplete } from "@react-google-maps/api"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import SearchIcon from "@mui/icons-material/Search"
import {Search, SearchIconWrapper, StyledInputBase} from "./styles"


const  Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header