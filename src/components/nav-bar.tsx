import React from "react"
import { FlexContainer } from "."
import { Text } from "./text"

export const NavBar: React.FC = ({ children }) => {
  return (
    <FlexContainer
      px={2}
      axis="row"
      sx={{
        paddingY: "1%",
        paddingX: "2%",
        color: "white",
        backgroundColor: "black",
        justifyContent: "space-between",
        zIndex: 100,
        position: "sticky",
      }}
    >
      <Text tag="h1">Property Finder</Text>
      {children}
    </FlexContainer>
  )
}
