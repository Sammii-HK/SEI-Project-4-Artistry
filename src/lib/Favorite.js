class Favorite {

  static setFavorites(favorites) {
    const data = favorites.map(fav => fav.objectNumber)
    console.log('SET data (favorites)', data)
    localStorage.setItem('favorites', JSON.stringify(data))
  }

  static addFavorite(favorite) {
    const favorites = this.getFavorites()
    favorites.push(favorite.objectNumber)
    this.setFavorites(favorites)
  }

  static removeFavorite(favorite) {
    const favorites = this.getFavorites()
    console.log('REMOVE-FAVS-1 favorites', favorites)
    console.log('REMOVE favorite.objectNumber', favorite.objectNumber)
    const index = favorites.indexOf(favorite.objectNumber)
    console.log('REMOVE-INDEX index', index)
    favorites.splice(index, 1)
    console.log('REMOVE-FAVS-2 favorites', favorites)
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
