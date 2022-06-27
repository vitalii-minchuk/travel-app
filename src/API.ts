import axios from "axios"
import { PlaceType } from "./react-app-env";

const URL =  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359"
  },
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
  }
};

export const getPlacesData = async () => {
  try {
    
    const {data} = await axios.get<PlaceType>(URL, options)
   
    return data.data
    
  } catch (error) {
    console.log(error);
  }
}


// address: "24 Dong Khoi, Dien Dien 650000 Vietnam"
// address_obj: {street1: '24 Dong Khoi', street2: null, city: 'Dien Dien', state: null, country: 'Vietnam', …}
// ancestors: (3) [{…}, {…}, {…}]
// awards: []
// bearing: "south"
// category: {key: 'restaurant', name: 'Restaurant'}
// cuisine: [{…}]
// description: ""
// dietary_restrictions: []
// distance: "8.213921327616687"
// distance_string: "8.2 km"
// doubleclick_zone: "as.vietnam"
// email: "thinn80@gmail.com"
// establishment_types: [{…}]
// hours: {week_ranges: Array(7), timezone: 'Asia/Ho_Chi_Minh'}
// is_candidate_for_contact_info_suppression: false
// is_closed: false
// is_jfy_enabled: false
// is_long_closed: false
// latitude: "12.270622"
// location_id: "9982902"
// location_string: "Dien Dien, Khanh Hoa Province"
// longitude: "109.108154"
// name: "Yolo Man Restaurant"
// nearest_metro_station: []
// num_reviews: "3"
// open_now_text: "Open Now"
// parent_display_name: "Dien Dien"
// phone: "+84 58 3772 279"
// photo: {images: {…}, is_blessed: true, uploaded_date: '2016-02-02T08:55:35-0500', caption: 'getlstd_property_photo', id: '171296401', …}
// preferred_map_engine: "default"
// price: "$20,000 - $500,000"
// price_level: "$$ - $$$"
// ranking: "#1 of 1 Restaurants in Dien Dien"
// ranking_category: "restaurant"
// ranking_denominator: "1"
// ranking_geo: "Dien Dien"
// ranking_geo_id: "15296278"
// ranking_position: "1"
// rating: "5.0"
// raw_ranking: "3.0573313236236572"
// subcategory: [{…}]
// timezone: "Asia/Ho_Chi_Minh"
// web_url: "https://www.tripadvisor.com/Restaurant_Review-g15296278-d9982902-Reviews-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html"
// website: "https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/"
// write_review: "https://www.tripadvisor.com/UserReview-g15296278-d9982902-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html"
// [[Prototype]]: Object