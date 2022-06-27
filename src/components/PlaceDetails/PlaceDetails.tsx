import React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { DataType } from "../../react-app-env"

type PlaceDetailsProps = {
  place: DataType
}

const PlaceDetails: React.FC<PlaceDetailsProps> = ({ place }) => {
  return (
    <Card elevation={6}>
      <CardMedia

      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box>
          
        </Box>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails