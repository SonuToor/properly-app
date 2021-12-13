import { IProperty } from "../types";
import { v4 as uuid } from 'uuid';

export const properties: IProperty[] = [
    {
      id: uuid(),
      description: "Newly Renovated Victorian",  
    price: 4500000,
      image: "https://i.imgur.com/tgbXc9y.jpg",
        location: {
            city: "Toronto",
            postalCode: "M8J2L9",
            province: "ON",
            streetAddress: "22 Something Street"
        }, 
        size: 20333, 
        bathrooms: 2,
        rooms: 4
    },
    {
      id: uuid(),
      description: "Spacious Townhouse in Brampton",  
      price: 800000,
      image: "https://i.imgur.com/It6zadb.jpg",
        location: {
            city: "Toronto",
            postalCode: "M8J2L9",
            province: "ON",
            streetAddress: "22 Something Street"
        }, 
        size: 20333, 
        bathrooms: 2,
        rooms: 4
  },
  {
    id: uuid(),
    description: "Newly built Condo Downtown",  
    price: 700000,
    image: "https://i.imgur.com/5ZfFMfB.jpg",
      location: {
          city: "Toronto",
          postalCode: "M8J2L9",
          province: "ON",
          streetAddress: "22 Something Street"
      }, 
      size: 20333, 
      bathrooms: 2,
      rooms: 4
  },   
  {
    id: uuid(),
    description: "Detached house in Oshawa",  
    price: 1280000,
    image: "https://i.imgur.com/JdUZrkY.jpg",
      location: {
          city: "Oshawa",
          postalCode: "M8J2L9",
          province: "ON",
          streetAddress: "25 Something Street"
      }, 
      size: 20333, 
      bathrooms: 2,
      rooms: 4
  },
  {
    id: uuid(),
    description: "Spacious Townhouse in Whitby",  
    price: 900000,
    image: "https://i.imgur.com/It6zadb.jpg",
      location: {
          city: "Toronto",
          postalCode: "M8J2L9",
          province: "ON",
          streetAddress: "22 Something Street"
      }, 
      size: 20333, 
      bathrooms: 2,
      rooms: 4
},
{
  id: uuid(),
  description: "Condo Downtown",  
  price: 650000,
  image: "https://i.imgur.com/5ZfFMfB.jpg",
    location: {
        city: "Toronto",
        postalCode: "M8J2L9",
        province: "ON",
        streetAddress: "22 Something Street"
    }, 
    size: 20333, 
    bathrooms: 2,
    rooms: 4
},       {
  id: uuid(),
  description: "Newly Renovated Victorian",  
price: 2700000,
  image: "https://i.imgur.com/tgbXc9y.jpg",
    location: {
        city: "Toronto",
        postalCode: "M8J2L9",
        province: "ON",
        streetAddress: "22 Something Street"
    }, 
    size: 20333, 
    bathrooms: 2,
    rooms: 4
},
{
  id: uuid(),
description: "Newly built Condo Downtown",  
price: 599000,
image: "https://i.imgur.com/5ZfFMfB.jpg",
location: {
    city: "Toronto",
    postalCode: "M8J2L9",
    province: "ON",
    streetAddress: "22 Something Street"
}, 
size: 20333, 
bathrooms: 2,
rooms: 4
  },
  {
  id: uuid(),
description: "Modern home in Little Portugal",  
price: 2399000,
image: "https://i.imgur.com/YfYggIq.jpg",
location: {
    city: "Toronto",
    postalCode: "M8J2L9",
    province: "ON",
    streetAddress: "22 Something Street"
}, 
size: 20333, 
bathrooms: 2,
rooms: 4
},   
]

