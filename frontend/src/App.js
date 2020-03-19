//libraries and assets
import React from 'react';
import './App.css';

//react routing
import { AuthRoute, ProtectedRoute } from '../src/util/route_util';
import { Switch} from 'react-router-dom';

//components
import NavBarContainer from './components/nav/navbar_container';
import MainPage from './components/main/main_page';
import UserShowContainer from './components/users/user_show_container';
// import Footer from './components/footer/footer';
import Preferences from './components/preferences/preferences'
import RestaurantShowContainer from './components/restauraunts/restaurant_show_container';


const App = () => {
  return (
    <div className='App'>
        <NavBarContainer className="nav-bar"/>
        <Switch>
            <ProtectedRoute path='/restaurants/:id' component={RestaurantShowContainer}/>
            <ProtectedRoute path="/preferences" component={Preferences} />
            <ProtectedRoute path="/user" component={UserShowContainer} />
            <AuthRoute path="/" component={MainPage} />

        </Switch>
    </div>
  );
}

export default App;
