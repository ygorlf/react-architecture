// Libs
import React, { Component, Fragment } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class Private extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
    };
  }

  componentDidMount() {
    this.getAuth();
  }

  componentDidUpdate(oldProps) {
    if (this.props.location.key !== oldProps.location.key) {
      this.getAuth();
    }
  }

  getToken = () => {
    const credentials = window.localStorage.getItem('react_architecture');

    if (credentials) {
      return true;
    }

    return false;
  };

  getAuth = async () => {
    try {
      if (this.getToken()) {
        this.setState({
          isAuthenticated: true,
          validated: true,
        });
      } else {
        this.setState({
          isAuthenticated: false,
          validated: true,
        });
      }
    } catch (err) {
      window.localStorage.removeItem('react_architecture');
      this.setState({
        isAuthenticated: false,
        validated: true,
      });
    }
  };

  renderRoute = () => {
    const { component: Component, ...rest } = this.props;

    return <Route {...rest} component={Component} />;
  };

  render() {
    const { validated, isAuthenticated } = this.state;

    return (
      <Fragment>
        {validated && isAuthenticated && this.renderRoute()}
        {validated && !isAuthenticated && <Redirect to="/login" />}
      </Fragment>
    );
  }
}

export default withRouter(Private);