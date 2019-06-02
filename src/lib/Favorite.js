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
    const favorites = this.getFavorites()
    console.log('REMOVE-FAVS-1 favorites', favorites)
    // favorite now undefined
    console.log('REMOVE favorite', favorite)
    // favorites.objectNumber undefined as it is now an array of strings
    console.log('REMOVE favorites.objectNumber', favorites.objectNumber)
    // i need to find the matching index of the array of strings, right now it is null so is returning -1
    const index = favorites.indexOf(favorites.objectNumber)
    console.log('REMOVE-INDEX index', index)
    // because of this the splice method is not working so I have included an if statement
    // this if statement means that if the statement returns false, it will not splice the array
    if (index >= 0 ) favorites.splice(index, 1)
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
