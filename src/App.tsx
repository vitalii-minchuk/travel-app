import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import { getPlacesData } from "./API"
import { DataType } from "./react-app-env"
import { Bounds } from "google-map-react"
import { PlaceSharp } from "@mui/icons-material"

const App: React.FC = () => {
  const [places, setPlaces] = React.useState<DataType[]>([] as DataType[])
  const [coordinates, setCoordinates] = React.useState<google.maps.LatLngLiteral>({} as google.maps.LatLngLiteral)
  const [bounds, setBounds] = React.useState<Bounds>({} as Bounds)

  const filteredPlaces = places?.filter(el => el.photo)

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  },[])

  // React.useEffect(() => {
  //   const getPlaces = async (bounds: Bounds) => {
  //     const result = await getPlacesData(bounds)
  //     if(result) {
  //       setPlaces(result)
  //     }
  //   }

  //   const timer = setTimeout(() => {
  //     getPlaces(bounds)
  //   }, 2000)
    
  //   return () => clearTimeout(timer)
  // }, [bounds, coordinates])
  
  const isPersistedState = (stateName: string): any => {
    const sessionState = sessionStorage.getItem(stateName)
    return sessionState && JSON.parse(sessionState)
  };

  // React.useEffect(() => {
  //   sessionStorage.setItem("homeState", JSON.stringify(places))
  // }, [places])

  React.useEffect(() => {
    setPlaces(isPersistedState("homeState"))
  }, [])
console.log(places)
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">
      <Grid container spacing={3} sx={{width: "100%"}}>
        <Grid item xs={12} md={4}>
          <List places={filteredPlaces} />
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
