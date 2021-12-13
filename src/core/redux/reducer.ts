import { createAction, createReducer} from '@reduxjs/toolkit'
import { MIN_PRICE_FILTER } from '../../constants'
import { properties } from '../../data'
import { IProperty } from '../../types'

export interface PropertiesFiltersState {
    priceFilter: number,
    searchTerm: string,
    matchingProperties: IProperty[] 
}

const initialPropertiesFilterState: PropertiesFiltersState = {
    priceFilter: MIN_PRICE_FILTER,
    searchTerm: "",
    matchingProperties: properties
}

export const setPriceFilter = createAction<number>('filter/setPrice')
export const setSearchFilterTerm = createAction<string>('filter/searchTerm')
export const setMatchingProperties = createAction<IProperty[]>('filter/setMatchingProperties')
export const resetPropertiesFilter = createAction('filter/reset')

export const propertiesFilterReducer = createReducer(initialPropertiesFilterState, (builder) => {
    builder
        .addCase(setPriceFilter, (state, action) => {
            state.priceFilter = action.payload
      })
      .addCase(setSearchFilterTerm, (state, action) => {
        state.searchTerm = action.payload
      })
      .addCase(setMatchingProperties, (state, action) => {
        state.matchingProperties = action.payload
      })
      .addCase(resetPropertiesFilter, (state, _action) => {
        state = initialPropertiesFilterState
      })
  })