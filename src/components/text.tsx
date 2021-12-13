import React, { ElementType } from "react"
import { Text as RebassText, TextProps as RebassTextProps } from "rebass"

export interface ITextProps extends RebassTextProps {
  tag: ElementType
}

export const Text: React.FC<ITextProps> = ({ children, tag, ...textProps }) => {
  return (
    <RebassText {...textProps} as={tag}>
      {children}
    </RebassText>
  )
}
