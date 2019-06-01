class Favorite {

  static setFavorites(favorites) {
    const data = favorites.map(fav => fav.object_number)
    localStorage.setItem('favorites', JSON.stringify(data))
  }

  static addFavorite(favorite) {
    const favorites = this.getFavorites()
    favorites.push(favorite.object_number)
    this.setFavorites(favorites)
  }

  static removeFavorite(favorite) {
    const favorites = this.getFavorites()
    console.log('REMOVE favorite.object_number', favorite.object_number)
    const index = favorites.findIndex(number => number === favorite.object_number)
    favorites.splice(index, 1)
    this.setFavorites(favorites)
  }

  static getFavorites() {
    return JSON.parse(localStorage.getItem('favorites'))
  }

  // check gallery this.state.data.objectNumber against favorite.object_number
  static isFavorite(favorite) {
    const favorites = this.getFavorites()
    const findFav = favorites.find(number => number === favorite.object_number)
    console.log('findFav', findFav)
    return favorites.find(number => number === favorite.object_number)
  }

  static clearFavorites() {
    localStorage.removeItem('favorites')
  }

}

export default Favorite
