export interface IProperty {
  id: string
  description: string
  image: string
    price: number
    location: ILocation
    size: number
    rooms: number
    bathrooms: number
}

export interface ILocation {
    city: string
    postalCode: string
    province: string
    streetAddress: string
}
