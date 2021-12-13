import Fuse from "fuse.js"
import { IProperty } from "../types"

export const filterByPrice = (properties: IProperty[], price: number) => {
    const propertiesBelowMaxPrice = properties.filter((property) => property.price <= price)
    return propertiesBelowMaxPrice
}

const searchOptions: Fuse.IFuseOptions<IProperty> = {
    keys: ["description"],
  }


export const searchProperties = (properties: IProperty[], searchTerm: string): IProperty[] => {
    const fuse = new Fuse(properties, searchOptions)

    return fuse.search(searchTerm).map((result) => result.item)
}