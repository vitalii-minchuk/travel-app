import React from "react"
import GoogleMapReact from "google-map-react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import Container from "@mui/material/Container"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import { mapStyles } from "../../mapStyles"
import { MiniContainer, MiniPaper } from "./styles"



const Map = () => {
  const isMobile = useMediaQuery('(min-width:600px)')
  const coordinates = {lat: 0, lng: 0}

  return (
    <div style={{height: '85vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyBBCUY2oGNTb12mxArKIvNIo0eglGJfoC0"}}
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