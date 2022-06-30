import React from "react"
import Header from "./Header/Header"
import Stack from "@mui/material/Stack"
import List from "./List/List";
import Map from "./Map/Map";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{xs: 1, md: 2 }}
        sx={{height: "90vh", width: "100%"}}
      >
        <List />
        <Map />
      </Stack>
    </React.Fragment>
  )
}

export default App;
