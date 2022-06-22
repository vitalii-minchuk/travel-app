import React from "react"
import GoogleMapReact from "google-map-react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import Container from "@mui/material/Container"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import { MiniContainer, MiniPaper, mapStyles } from "./styles"

interface IMapProps  {
  coordinates: google.maps.LatLngLiteral
}

const Map: React.FC<IMapProps> = ({ coordinates }) => {
  const isMobile: boolean = useMediaQuery('(min-width:600px)')

  return (
    <div style={{height: '85vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
      >
      <MiniPaper elevation={6}>
        <MiniContainer>dfsasfsdgsadgh</MiniContainer>
        </MiniPaper>
        
      </GoogleMapReact>
    </div>
  )
}

export default Map