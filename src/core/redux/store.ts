import { configureStore } from "@reduxjs/toolkit"
import { propertiesFilterReducer } from "./reducer"

export const store = configureStore({ reducer: propertiesFilterReducer })
