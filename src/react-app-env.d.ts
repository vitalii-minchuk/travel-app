/// <reference types="react-scripts" />

export type DataType = {
  photo: string,
  name: string,
  price: string,
  ranking: string,
  photo: PhotoType
  name: string
  price_level: string
  ranking: string
  awards: AwardsType[]
  cuisine: CuisineType[]
  address: string
  phone: string
  web_url: string
  website: string
  rating: string
}

type PhotoType = {
  images: PhotoSizeType
}

type PhotoSizeType = {
  medium: {
    url: string
  }
  small: {
    url: string
  }
  large: {
    url: string
  }
}

type AwardsType = {
  images: AwardsImgsType
}

type AwardsImgsType = {
  large: string
  small: string
}

type CuisineType ={
  key: string
  name: string
} 