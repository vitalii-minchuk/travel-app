/// <reference types="react-scripts" />

export type PlaceType = {
  data: DataType[]
}

export type DataType = {
  photo: string,
  name: string,
  price: string,
  ranking: string,
  awards: AwardsType[]
}

type AwardsType = {
  display_name: string,
  images: AwardsImgsType
}

type AwardsImgsType = {

}