import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FlexContainer, NavBar, PriceSlider, SearchBar } from "../components"
import { MIN_SEARCH_LENGTH } from "../constants"
import {
  PropertiesFiltersState,
  setSearchFilterTerm,
  setPriceFilter,
  setMatchingProperties,
} from "../core/redux/reducer"
import { properties } from "../data"
import { IProperty } from "../types"
import { filterByPrice, searchProperties } from "./filter-capabilities"

export const FilterProperties: React.FC = () => {
  const dispatch = useDispatch()

  const searchTerm = useSelector<PropertiesFiltersState, string>((state) => state.searchTerm)
  const price = useSelector<PropertiesFiltersState, number>((state) => state.priceFilter)

  const setSearchTerm = (searchTerm: string) => {
    // Analytics event
    dispatch(setSearchFilterTerm(searchTerm))
  }

  const setPrice = (priceFilter: number) => {
    // Analytics event
    dispatch(setPriceFilter(priceFilter))
  }

  useEffect(() => {
    let propertyFilteringResults: IProperty[] = []

    if (searchTerm.length > MIN_SEARCH_LENGTH) {
      propertyFilteringResults = [...searchProperties(properties, searchTerm)]
      propertyFilteringResults = [...filterByPrice(propertyFilteringResults, price)]
    } else {
      propertyFilteringResults = filterByPrice(properties, price)
    }

    dispatch(setMatchingProperties(propertyFilteringResults))
  }, [price, searchTerm])

  return (
    <NavBar>
      <FlexContainer axis="row" sx={{ width: "80%", justifyContent: "space-between" }}>
        <SearchBar
          searchTerm={searchTerm}
          onChange={(newSearchTerm) => setSearchTerm(newSearchTerm)}
        />
        <PriceSlider price={price} onChange={(newPrice) => setPrice(newPrice)} />
      </FlexContainer>
    </NavBar>
  )
}
