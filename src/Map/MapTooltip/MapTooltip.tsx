import React from "react"

import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"
import Paper from "@mui/material/Paper"
import Rating from "@mui/material/Rating"

import { DataType } from "../../react-app-env"

type MapTooltipProps = {
  hoveredMarker: DataType
  isMobile: boolean
}

const MapTooltip: React.FC<MapTooltipProps> = ({ hoveredMarker, isMobile }) => {
  return (
    <React.Fragment>
      <Paper elevation={12}>
        <CardMedia
          style={{width: 100, height: 60, margin: "auto"}}
          image={hoveredMarker.photo.images.medium.url}
          title={hoveredMarker.name}
        />
        <Typography maxWidth={isMobile ? 70 : 100} variant="body2">
          {hoveredMarker.name}
        </Typography>
        {isMobile &&
          <Rating
            size="small"
            value={Number(hoveredMarker.rating)}
            readOnly
            precision={0.5}
          />
        }
      </Paper>
    </React.Fragment>
  )
}

export default MapTooltip