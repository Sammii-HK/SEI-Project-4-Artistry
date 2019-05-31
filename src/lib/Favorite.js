class Favorite {

  static setFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  static addFavorite(favorite) {
    const favorites = this.getFavorites()
    favorites.push(favorite)
    this.setFavorites(favorites)
  }

  static removeFavorite(favorite) {
    const favorites = this.getFavorites()
    const index = favorites.findIndex(fav => fav.object_number === favorite.object_number)
    favorites.splice(index, 1)
    this.setFavorites(favorites)
  }

  static getFavorites() {
    return JSON.parse(localStorage.getItem('favorites'))
  }

  static isFavorite(favorite) {
    const favorites = this.getFavorites()
    return favorites.find(fav => fav.object_number === favorite.object_number)
  }

  static clearFavorites() {
    localStorage.removeItem('favorites')
  }

}

export default Favorite
