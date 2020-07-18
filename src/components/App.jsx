import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

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
    };
  }

  handleLogin = response => {
    this.setState({
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  handleLogout = () => {
    window.FB.logout(function(response) {
      document.location.reload();
    });
  };

  render() {
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
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </>
    );
  }
}

export default App;
