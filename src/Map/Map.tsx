import React from "react"
import { wrapper, mapContainer, mapStyles } from "./Map.styles"
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import { DataType } from "../react-app-env"
import { PlaceIcon } from "../helpers";

type MapProps = {
  setClickedPos: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>
  clickedPos: google.maps.LatLngLiteral
  filteredPlaces: DataType[]
}

const Map: React.FC<MapProps> = ({ setClickedPos, clickedPos, filteredPlaces }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    language: "en",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
  })

  const mapRef = React.useRef<google.maps.Map | null>(null)

  const onLoad = (map: google.maps.Map) : void => {
    mapRef.current = map
  }
  
  const onUnmount = (): void => {
    mapRef.current = null
  }

  const onMapClick = (event: google.maps.MapMouseEvent) => {
    //@ts-ignore
    setClickedPos({lat: event?.latLng?.lat(), lng: event?.latLng?.lng()})
  }

  return (
    <React.Fragment>
      <Box sx={wrapper}>
        {!isLoaded
          ? <LinearProgress />
          : <GoogleMap
              mapContainerStyle={mapContainer}
              center={{lat: clickedPos.lat, lng: clickedPos.lng}}
              zoom={14}
              options={{styles: mapStyles, disableDefaultUI: true, zoomControl: true}}
              onLoad={onLoad}
              onUnmount={onUnmount}
              onClick={(event) => onMapClick(event)}
            >
              {clickedPos.lat ? <Marker position={clickedPos} /> : null}
              {filteredPlaces?.map(marker => (
                <Marker
                  key={marker.location_id}
                  position={{lat: Number(marker.latitude), lng: Number(marker.longitude)}}
                  icon={{
                    url: PlaceIcon("hotels"),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(30, 30)
                  }}
                />
              ))}
          </GoogleMap>
        }
      </Box>
    </React.Fragment>
  )
}

export default Map