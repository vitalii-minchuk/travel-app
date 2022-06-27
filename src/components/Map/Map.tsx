import React, { ChangeEvent } from "react"
import GoogleMapReact, { ChangeEventValue } from "google-map-react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import Container from "@mui/material/Container"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import { MiniContainer, MiniPaper, mapStyles } from "./styles"

type MapProps = {
  coordinates: google.maps.LatLngLiteral
  setCoordinates: any
  setBounds: any
}

const Map: React.FC<MapProps> = ({ coordinates, setCoordinates, setBounds }) => {
  const isMobile: boolean = useMediaQuery("(min-width:600px)")

  const onChangeHandler = (value: ChangeEventValue) => {
    setCoordinates({ lat: value.center.lat, lng: value.center.lng })
    setBounds({
      ne: value.bounds.ne,
      nw: value.bounds.nw,
      se: value.bounds.se,
      sw: value.bounds.sw
    })
  }

  return (
    <div style={{height: "85vh", width: "100%"}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}}
        defaultCenter={{
          lat: 52.520007,
          lng: 13.404954
        }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(value) => onChangeHandler(value)}
      >
        {/* <MiniPaper elevation={6}>
          <MiniContainer></MiniContainer>
        </MiniPaper> */}
        
      </GoogleMapReact>
    </div>
  )
}

export default Map