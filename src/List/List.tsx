import React from "react"
import { wrapper } from "./List.styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Grid from "@mui/material/Grid"
import { DataType } from "../react-app-env"
import PlaceDetails from "./PlaceDetails/PlaceDetails"
import { LinearProgress } from "@mui/material"

type ListProps = {
  places: DataType[]
  setType: React.Dispatch<React.SetStateAction<string>>
  setDistance: React.Dispatch<React.SetStateAction<string>>
  type: string
  childClicked: DataType | null
  isLoading: boolean
  distance: string
}

const List: React.FC<ListProps> = ({ isLoading, childClicked, places, setDistance, distance, setType, type }) => {
  
  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value)
  }
  const handleDistanceChange = (event: SelectChangeEvent) => {
    setDistance(event.target.value)
  }

  if (childClicked) return <Box sx={wrapper}>
      <PlaceDetails place={childClicked} />
  </Box>

  return (
    <React.Fragment>
      <Box sx={wrapper}>
        <Typography variant="h5" component={"h2"} >
          Restaurants, Hotels and Attractions around you
        </Typography>
        {isLoading ? (
          <LinearProgress />
        ) : (
          <>
            <Grid container spacing={1} pb={2} sx={{width: "100%"}}>
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
                  <InputLabel id="distance">Distance</InputLabel>
                  <Select
                    id="distance"
                    value={distance}
                    variant="standard"
                    label="Distance"
                    onChange={handleDistanceChange}
                  >
                    <MenuItem value="500">0.5 km</MenuItem>
                    <MenuItem value="1000">1 km</MenuItem>
                    <MenuItem value="2000">2 km</MenuItem>
                    <MenuItem value="3000">3 km</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{height: "100%"}}>
              {places?.map((place, i) => (
                <Grid key={i} item xs={12} >
                  <PlaceDetails place={place} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
        
      </Box>
    </React.Fragment>
  )



  
}

export default List