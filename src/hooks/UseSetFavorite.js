import { useState } from 'react'

function UseSetFavorite (initialState) {
  const [isFavorite, setIsFavorite] = useState(initialState)

  function addToFavorites () {
    setIsFavorite(true)
  }

  function removeFromFavorites () {
    setIsFavorite(false)
  }
  return (
    [isFavorite, addToFavorites, removeFromFavorites]
  )
}

export default UseSetFavorite
