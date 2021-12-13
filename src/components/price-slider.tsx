import React from "react"
import { Label, Slider } from "@rebass/forms"
import { FlexContainer } from "."
import { MAX_PRICE_FILTER, MIN_PRICE_FILTER } from "../constants"

export interface IPriceSliderProps {
  price: number
  onChange: (price: number) => void
}

export const PriceSlider: React.FC<IPriceSliderProps> = ({ price, onChange }) => {
  return (
    <FlexContainer axis="column">
      <Label>Set Max Price</Label>
      <Label>{`$${price.toLocaleString()}`} </Label>
      <Slider
        value={price}
        min={MIN_PRICE_FILTER}
        max={MAX_PRICE_FILTER}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </FlexContainer>
  )
}
