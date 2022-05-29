import { createContext, useState } from 'react';

// CapitalCase because createContext actually returns a react component,
// and conventions is to CapitalCase.
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  meetupIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {

  const [favorites, setFavorites] = useState([]);

  function addFavoriteHandler(meetup) {
    // Using function here because this way it guarantees that we get the latest
    // snapshot of favorites to update. React does not process the data immediately
    // so there is a very unlikely scenario if you use favorites.concat(meetup) to update
    // you will not have the latest snapshot of data.

    // This is the best way to update state if you rely on a previous version of state.
    setFavorites((prevFavorites) => prevFavorites.concat(meetup))
  }

  function removeFavoriteHandler(meetupId) {
    setFavorites((prevFavorites) => prevFavorites.filter(f => f.id !== meetupId))
  }

  function meetupIsFavoriteHandler(meetupId) {
    return favorites.some(f => f.id === meetupId)
  }

  const context = {
    favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    meetupIsFavorite: meetupIsFavoriteHandler
  };

  return <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>
}

export default FavoritesContext;