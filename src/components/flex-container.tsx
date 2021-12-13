import React from "react"
import { Box, BoxProps } from "rebass"

type axis = "column" | "row"

interface IFlexContainerProps extends BoxProps {
  axis: axis
}

export const FlexContainer: React.FC<IFlexContainerProps> = ({ axis, children, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: axis,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
