import React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Grid from "@mui/material/Grid"
import { DataType } from "../../react-app-env"

import PlaceDetails from "../PlaceDetails/PlaceDetails"

type ListProps = {
  places: DataType[]
}

const List: React.FC<ListProps> = ({ places }) => {
  const [type, setType] = React.useState("restaurants")
  const [rating, setRating] = React.useState("0")

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value)
  }
  const handleRatingChange = (event: SelectChangeEvent) => {
    setRating(event.target.value)
  }

  return (
    <Box sx={{ height: "100%", padding: "16px" }} >
      <Typography variant="h5" component={"h2"} >Restaurants, Hotels and Attractions around you</Typography>
      <Grid container spacing={1} sx={{width: "100%"}}>
        <Grid item xs={7}>
        <FormControl sx={{ my: 2, minWidth: 120 }}>
        <InputLabel id="type">Type</InputLabel>
        <Select
          variant="standard"
          id="type"
          value={type}
          label="Type"
          onChange={handleTypeChange}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={5}>
        <FormControl sx={{ my: 2, minWidth: 90 }}>
        <InputLabel id="type">Rating</InputLabel>
        <Select
          id="rating"
          value={rating}
          variant="standard"
          label="Rating"
          onChange={handleRatingChange}
        >
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{height: "60vh", overflow: "auto"}}>
        {places?.map((place, i) => (
          <Grid key={i} item xs={12} >
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
      
    </Box>
  )
}

export default List