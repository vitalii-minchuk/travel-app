import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import { getPlacesData } from "./components/api"
import { DataType } from "./components/types/types"
import { CssBaseline } from "@mui/material"

const App: React.FC = () => {
  const [places, setPlaces] = React.useState<DataType | null>(null)
  const [coordinates, setCoordinates] = React.useState<google.maps.LatLngLiteral>({
    lat: 52.520007,
    lng: 13.404954
  })

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  },[])

  React.useEffect(() => {
    getPlacesData()
      .then((data) => {
        console.log(data)
        //@ts-ignore
        setPlaces(data)

      })
  }, [])
  console.log(places)

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
      <Grid container spacing={3} sx={{width: "100%"}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map coordinates={coordinates} />
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  )
}

export default App
