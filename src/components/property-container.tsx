import React from "react"
import { Image } from "rebass"

import { Text } from "./text"
import { FlexContainer } from "./flex-container"

import { IProperty } from "../types"
import { formatLocation, formatSize } from "../utils"

interface IPropertyContainerProps {
  property: IProperty
}

export const PropertyContainer: React.FC<IPropertyContainerProps> = ({ property }) => {
  const { description, image: imageURL, price, location, size, rooms, bathrooms } = property

  return (
    <FlexContainer
      axis="column"
      sx={{
        alignItems: "center",
        textAlign: "center",
        width: ["70%", "50%", "30%"],
        marginLeft: ["15%", "25%", "2%"],
        marginRight: "1%",
        marginY: "1%",
        paddingY: "1%",
        paddingX: "2%",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "5px",
      }}
    >
      <Text tag={"h3"}>{description}</Text>
      <Image src={imageURL} sx={{ height: "50%", width: "70%", marginY: "1%" }} />
      <Text tag="h4">{`$${price.toLocaleString()}`}</Text>
      <Text tag="h4">{formatLocation(location)}</Text>
      <FlexContainer
        axis="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "start",
          width: "70%",
          marginTop: "4%",
        }}
      >
        <Text tag="p">{formatSize(size)}</Text>
        <FlexContainer axis="column">
          <Text tag="p">{`Rooms: ${rooms}`}</Text>
          <Text tag="p">{`Bathrooms: ${bathrooms}`}</Text>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
