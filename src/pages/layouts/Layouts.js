import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Albums from '../albums/Albums';
import Cities from '../cities/Cities';
import Cars from '../cars/Cars';

// Components
import Header from '../../components/Header';

class Layouts extends Component {
  renderRoutes = () => {
    return (
      <Switch>
        <Route
          exact
          path="/albums"
          render={() => (
            <Albums />
          )}
        />
        <Route
          exact
          path="/cities"
          render={() => (
            <Cities />
          )}
        />
        <Route
          exact
          path="/cars"
          render={() => (
            <Cars />
          )}
        />
      </Switch>
    )
  }

  render() {
    return (
      <Fragment>
        <Header />
        {this.renderRoutes()}
      </Fragment>
    );
  }
}

export default Layouts;