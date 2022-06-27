import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import { getPlacesData } from "./API"
import { DataType } from "./react-app-env"
import { CssBaseline } from "@mui/material"

const App: React.FC = () => {
  const [places, setPlaces] = React.useState<DataType[]>([] as DataType[])
  const [coordinates, setCoordinates] = React.useState<google.maps.LatLngLiteral>({} as google.maps.LatLngLiteral)
  const [bounds, setBounds] = React.useState(null)

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  },[])

  React.useLayoutEffect(() => {
    const getPlaces = async () => {
      const result = await getPlacesData()
      if(result) {
        setPlaces(result)
      }
    }

    getPlaces()
  }, [])
console.log(places)
console.log(bounds, coordinates)
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
      <Grid container spacing={3} sx={{width: "100%"}}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setBounds={setBounds}
            setCoordinates={setCoordinates}
          />
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  )
}

export default App
