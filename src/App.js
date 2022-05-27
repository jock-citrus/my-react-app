import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      {
        /**
         * Switch tell the router that only one route should be rendered at a time
         *  exact prevents the AllMeetupsPage being shown for all routes that
         * include '/', i.e. all routes
         **/
      }
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'><NewMeetupPage /></Route>
        <Route path='/favorites'><FavoritesPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
