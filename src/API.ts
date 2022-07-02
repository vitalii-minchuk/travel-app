import { DataType } from "./react-app-env";

export const URL = 'https://travel-advisor.p.rapidapi.com/'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY!,
	}
}

export const getNearbyPlaces = async (lat: number, lng: number, type: string): Promise<DataType[]> => {
  const response = await fetch(`${URL}${type}/list-by-latlng?latitude=${lat}&longitude=${lng}&limit=60&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US`, options)
  
  if (!response.ok) {
    throw new Error("Oh no! Something messed up!")
  }

  const { data } = await response.json()
console.log(data)  
  return data
}
