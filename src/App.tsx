import React from "react"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./core/theme"
import { AvailableProperties, FilterProperties } from "./features"
import { Provider } from "react-redux"
import { store } from "./core/redux/store"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Provider store={store}>
        <FilterProperties />
        <AvailableProperties />
      </Provider>
    </ThemeProvider>
  )
}

export default App
