import { ILocation } from "../types";

export const formatLocation = (location: ILocation) => 
    ( `${location.streetAddress}, ${location.city}, ${location.postalCode}, ${location.province}`)


export const formatSize = (size: number) => (`${size.toLocaleString()} sqft`)