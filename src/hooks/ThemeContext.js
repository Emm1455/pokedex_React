import CheckTheme from '../functions/CheckTheme'
import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(CheckTheme())
  const handleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('themePreferences', JSON.stringify({ theme: 'dark' }))
      setTheme('dark')
    } else {
      localStorage.setItem('themePreferences', JSON.stringify({ theme: 'light' }))
      setTheme('light')
    }
  }

  const data = { theme, handleTheme }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }
export default ThemeContext
