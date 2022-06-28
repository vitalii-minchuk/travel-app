import axios from "axios"
import { Bounds } from "google-map-react";
import { PlaceType } from "./react-app-env";

const URL =  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359"
//   },
//   headers: {
//     "X-RapidAPI-Key": "",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
//   }
// };

export const getPlacesData = async ({ sw, ne }: Bounds) => {
  try {
    const {data} = await axios.get<PlaceType>(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
      }
    })
   
    return data.data
    
  } catch (error) {
    console.log(error);
  }
}