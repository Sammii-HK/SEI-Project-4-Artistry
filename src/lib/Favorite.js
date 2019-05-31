class Favorite {

  static setFavorites(favorites) {
    this._favorites = favorites
  }

  static addFavorite(favorite) {
    this._favorites = this._favorites || []
    this._favorites.push(favorite)
  }

  static removeFavorite(favorite) {
    const index = this._favorites.findIndex(fav => fav.object_number === favorite.object_number)
    this._favorites.splice(index, 1)
  }

  static getFavorites() {
    return this._favorites
  }

  static isFavorite(favorite) {
    this._favorites = this._favorites || []
    return this._favorites.find(fav => fav.object_number === favorite.object_number)
  }

  // does this clear all of the favorites?
  static clearFavorites() {
    this._favorites = null
  }

}

export default Favorite
