import React from "react"
import Button from "@mui/material/Button"
import { Box } from "@mui/material"
import { wrapper } from "./CurrentLocation.styles"

type CurrentLocationProps = {
  moveTo: (position: google.maps.LatLngLiteral) => void
}

const CurrentLocation: React.FC<CurrentLocationProps> = ({ moveTo }) => {
  const [disabled, setDisabled] = React.useState(false)

  const clickHandler = (): void => {
    setDisabled(true)
    navigator.geolocation.getCurrentPosition(position => {
      setDisabled(false)
      moveTo({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  }

  return (
    <React.Fragment>
      <Box sx={wrapper}>
        <Button
          disabled={disabled}
          onClick={clickHandler}
        >
          {disabled ? "Loading..." : "Get Current Geolocation"}
        </Button>
      </Box>
      
    </React.Fragment>
  )
}

export default CurrentLocation