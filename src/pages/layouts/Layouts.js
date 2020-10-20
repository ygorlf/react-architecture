import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

// Pages
import Albums from '../albums/Albums';
import Cities from '../cities/Cities';
import Shows from '../shows/Shows';

// Components
import Header from '../../components/Header';

const Container = styled.div`
  width: 70%;
  max-width: 1110px;
  margin: .75rem auto 0;
`;

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
          path="/shows"
          render={() => (
            <Shows />
          )}
        />
        <Route
          exact
          path='/'
        >
          <Redirect to='/albums' />
        </Route>
      </Switch>
    )
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          {this.renderRoutes()}
        </Container>
      </Fragment>
    );
  }
}

export default Layouts;