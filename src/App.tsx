import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">
      <Grid container spacing={3} sx={{width: "100%"}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  )
}

export default App
