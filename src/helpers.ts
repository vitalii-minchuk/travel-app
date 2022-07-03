import Restaurant from "./images/restaurant.svg"
import Hotel from "./images/hotel.svg"
import Attraction from "./images/attraction.svg"

export const PlaceIcon = (type: string): string => {
  switch (type) {
    case "attractions":
      return Attraction
    case "restaurants":
      return Restaurant
    case "hotels":
      return Hotel
    default:
      return ""
  }
}