class Favorite {

  static setFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  static addFavorite(favorite) {
    const favorites = this.getFavorites()
    favorites.push(favorite.objectNumber)
    this.setFavorites(favorites)
    console.log('add favorites.objectNumber', favorites.objectNumber)
  }

  static removeFavorite(favorite) {
    console.log('REMOVE favorite', favorite)
    const favorites = this.getFavorites()
    const index = favorites.indexOf(favorite.objectNumber)
    if (index >= 0 ) favorites.splice(index, 1)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  static getFavorites() {
    return JSON.parse(localStorage.getItem('favorites'))
  }

  // check gallery this.state.data.objectNumber against favorite.objectNumber
  static isFavorite(favorite) {
    const favorites = this.getFavorites()
    return favorites.includes(favorite.objectNumber)
  }

  static clearFavorites() {
    localStorage.removeItem('favorites')
  }

}

export default Favorite
