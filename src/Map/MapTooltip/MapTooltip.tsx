import React from "react"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Paper from "@mui/material/Paper"
import Rating from "@mui/material/Rating"
import { DataType } from "../../react-app-env"

type MapTooltipProps = {
  hoveredMarker: DataType
}

const MapTooltip: React.FC<MapTooltipProps> = ({ hoveredMarker }) => {
  return (
    <React.Fragment>
      <Paper elevation={12}>
        <CardMedia
          style={{width: 100, height: 70, margin: "auto"}}
          image={hoveredMarker.photo.images.medium.url}
          title={hoveredMarker.name}
        />
        <CardContent>
          <Typography maxWidth={100} variant="body2">{hoveredMarker.name}</Typography>
          <Rating
            size="small"
            value={Number(hoveredMarker.rating)}
            readOnly
            precision={0.5}
          />
        </CardContent>
          
      </Paper>
    </React.Fragment>
  )
}

export default MapTooltip