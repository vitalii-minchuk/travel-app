import React from "react"

import { Autocomplete } from "@react-google-maps/api"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import SearchIcon from "@mui/icons-material/Search"
import Container from "@mui/material/Container"
import {Search, SearchIconWrapper, StyledInputBase} from "./Header.styles"

type HeaderProps = {
  setClickedPos:  React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>
}

const  Header: React.FC<HeaderProps> = ({ setClickedPos }) => {
  const [value, setValue] = React.useState("")
  const [autocomplete, setAutocomplete] = React.useState<google.maps.places.Autocomplete | null>(null)

  const onLoad = (autoC: google.maps.places.Autocomplete): void => setAutocomplete(autoC)

  const onPlaceChanged = (): void => {
    const lat = autocomplete?.getPlace().geometry?.location?.lat()
    const lng = autocomplete?.getPlace().geometry?.location?.lng()

    if (lat && lng) {
      setClickedPos({ lat, lng })
      setValue("")
    }
  }


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
              <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{paddingLeft: "5px"}} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </Search>
              </Autocomplete>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header