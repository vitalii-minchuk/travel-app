import React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone"
import Rating from "@mui/material/Rating"

import { DataType } from "../../react-app-env"


type PlaceDetailsProps = {
  place: DataType
}

const PlaceDetails: React.FC<PlaceDetailsProps> = ({ place }) => {

  return (
    <Card elevation={6}>
      <CardMedia
        style={{height: 300}}
        image={place.photo.images.large.url}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box>
          <Rating value={Number(place.rating)} readOnly precision={0.5} />
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" >Price</Typography>
            <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" gap={2}>
            <Typography variant="subtitle1" >Ranking</Typography>
            <Typography gutterBottom variant="subtitle1" textAlign="end" >
              {place.ranking}
            </Typography>
          </Box>
          {place?.awards?.map((award, i) => (
            <Box
             key={i}
             display="flex"
             gap={2}
             justifyContent="space-between"
             my={1}
             alignItems="flex-start"
            >
              <img src={award.images.small} alt="award" />
              <Typography variant="subtitle2" color="textSecondary" textAlign="end" >
                {award.display_name}
              </Typography>
            </Box>
          ))}
          {place?.cuisine?.map(({ name }) => (
            <Chip key={name} size="small" label={name} sx={{margin: "5px 5px 5px 0"}} />
          ))}
          {place.address && (
            <Box
              display="flex"
              gap={2}
              justifyContent="space-between"
              my={1}
              alignItems="flex-start"
            >
              <LocationOnTwoToneIcon />
              <Typography variant="body2" color="textSecondary" textAlign="end">
                {place.address}
              </Typography>
            </Box>
          )}
          {place.phone && (
            <Box
              display="flex"
              gap={2}
              justifyContent="space-between"
              my={1} alignItems="flex-start"
            >
              <PhoneIcon />
              <Typography variant="body2" color="textSecondary" textAlign="end">
                {place.phone}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlaceDetails