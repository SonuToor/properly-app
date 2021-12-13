import React from "react"
import { useSelector } from "react-redux"
import { FlexContainer, PropertyContainer } from "../components"
import { MIN_PRICE_FILTER } from "../constants"
import { PropertiesFiltersState } from "../core/redux/reducer"
import { properties } from "../data"
import { IProperty } from "../types"

export const AvailableProperties: React.FC = () => {
  const searchTerm = useSelector<PropertiesFiltersState, string>((state) => state.searchTerm)
  const price = useSelector<PropertiesFiltersState, number>((state) => state.priceFilter)
  const matchingProperties = useSelector<PropertiesFiltersState, IProperty[]>(
    (state) => state.matchingProperties
  )

  const userIsFiltering = searchTerm.length > 2 || price > MIN_PRICE_FILTER

  return (
    <FlexContainer axis="row" sx={{ flexWrap: "wrap" }}>
      {userIsFiltering
        ? matchingProperties.length
          ? matchingProperties.map((property) => (
              <PropertyContainer property={property} key={property.id} />
            ))
          : "Sorry no matches"
        : properties.map((property) => <PropertyContainer property={property} key={property.id} />)}
    </FlexContainer>
  )
}
