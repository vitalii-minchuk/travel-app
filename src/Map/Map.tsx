import React from "react"
import { wrapper, mapContainer, mapStyles } from "./Map.styles"
import LinearProgress from '@mui/material/LinearProgress';
import Box from "@mui/material/Box"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
  })

  const mapRef = React.useRef<google.maps.Map | null>(null)

  const onLoad = (map: google.maps.Map) : void => {
    mapRef.current = map
  }

  const onUnmount = (): void => {
    mapRef.current = null
  }

  if (!isLoaded) return <LinearProgress />

  return (
    <Box sx={wrapper}>
      <GoogleMap
        mapContainerStyle={mapContainer}
        center={{ lat: 39, lng: 30.33}}
        zoom={11}
        options={{styles: mapStyles, disableDefaultUI: true, zoomControl: true}}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
    </Box>
  )
}

export default Map