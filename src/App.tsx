import React from "react"
import Header from "./Header/Header"
import Stack from "@mui/material/Stack"
import List from "./List/List"
import Map from "./Map/Map"
import { getNearbyPlaces } from "./API"
import { DataType } from "./react-app-env"
import { isPersistedState } from "./helpers"
import Container from "@mui/material/Container"

const App: React.FC = () => {
  const [places, setPlaces] = React.useState<DataType[]>([] as DataType[])
  const [clickedPos, setClickedPos] = React.useState<google.maps.LatLngLiteral>({ lat: 49.44862093112109, lng: 32.042534991043546})
  const filteredPlaces = places.filter(place => place.photo)
//   React.useEffect(() => {
//     const fetchData = async () => {
// console.log(clickedPos)      
//       const data = await getNearbyPlaces(clickedPos.lat, clickedPos.lng)
// console.log(data)
//       setPlaces(data)
//     }
//     fetchData()
//   }, [clickedPos])
  
  // React.useEffect(() => {
  //   localStorage.setItem("homeState", JSON.stringify(places))
  // }, [places])

  React.useEffect(() => {
    const sessionState = isPersistedState("homeState")

      if (sessionState) {
        setPlaces(sessionState)
        return;
      }
  }, [])

console.log(clickedPos)
console.log(places)
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{xs: 1, md: 2 }}
          sx={{height: "86vh", width: "100%"}}
        >
          <List places={filteredPlaces} />
          <Map filteredPlaces={filteredPlaces} setClickedPos={setClickedPos} clickedPos={clickedPos} />
        </Stack>
      </Container>
    </React.Fragment>
  )
}

export default App;
