class Favorite {

  static setFavorites(favorites) {
    const data = favorites.map(fav => fav.object_number)
    console.log('SET data (favorites)', data)
    localStorage.setItem('favorites', JSON.stringify(data))
  }

  static addFavorite(favorite) {
    const favorites = this.getFavorites()
    favorites.push(favorite.object_number)
    this.setFavorites(favorites)
  }

  // when the button is clicked, it is removing the data from every favorite index item so it is null

  // CONSOLE LOG
  // gallery this.state.data.objectNumber SK-A-372
  // Favorite.js:33 FIND/IS favorite.object_number undefined
  // ** CLICK **
  // Favorite.js:33 FIND/IS favorite.object_number SK-A-372
  // Favorite.js:17 REMOVE favorite.object_number SK-A-372
  // Favorite.js:19 REMOVE-INDEX index 7
  // GalleryShow.js:31 Remove favorite... TODO
  // All items now null in localStorage

  static removeFavorite(favorite) {
    const favorites = this.getFavorites()
    console.log('REMOVE-FAVS-1 favorites', favorites)

    // this is logging the correct object number
    console.log('REMOVE favorite.object_number', favorite.object_number)

    const index = favorites.findIndex(number => number === favorite.object_number)
    console.log('REMOVE-INDEX index', index)

    favorites.splice(index, 1)
    // splice is working, array.length decreases by one
    console.log('REMOVE-FAVS-2 favorites', favorites)

    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  static getFavorites() {
    return JSON.parse(localStorage.getItem('favorites'))
  }

  // check gallery this.state.data.objectNumber against favorite.object_number
  static isFavorite(favorite) {
    const favorites = this.getFavorites()
    // logging the right object number
    const findFav = favorites.find(number => number === favorite.object_number)
    console.log('FIND/IS favorite.object_number', findFav)
    return favorites.find(number => number === favorite.object_number)
  }

  static clearFavorites() {
    localStorage.removeItem('favorites')
  }

}

export default Favorite
