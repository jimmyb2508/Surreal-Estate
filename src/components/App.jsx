import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import SavedProperties from './SavedProperties';

import '../styles/app.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      name: '',
      email: '',
      picture: '',
      userFavourites: [],
    };
  }

  handleLogin = response => {
    this.setState({
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
    axios.get(`http://localhost:3000/api/v1/Favourite/`)
      .then(response =>
        this.setState({ userFavourites: response.data.map(prop => prop.propertyListing) }),
      )
      .catch(response => console.log(response));
  };

  handleLogout = () => {
    window.FB.logout(function(response) {
      document.location.reload();
    });
  };

  render() {
    const { userID } = this.state;
    return (
      <>
        <NavBar
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
          userID={this.state.userID}
          name={this.state.name}
          email={this.state.email}
          picture={this.state.picture}
         />
        <Switch>
          <Route exact path="/" render={props => <Properties {...props} userID={userID} />} />
          <Route exact path="/add-property" component={AddProperty} />
          <div className="wrapper">
            {userID && <Route exact path="/saved-properties" component={SavedProperties} />}
          </div>

        </Switch>
      </>
    );
  }
}

export default App;
