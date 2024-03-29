import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
function PrivateRoute({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      /* render={props =>
        (sessionStorage.getItem('token')) ? (
          <Component {...props} />
        ) : (
            <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      } */

      render={props => {
        if (auth.isLoading) {
          return <h2>Loading...</h2>;
        } else if (!auth.isAuthenticated) {
          return <Redirect to="/login" />
        } else {
          return <Component {...props} />
        }
      }}
    />
  )
}

const mapStateToProps = state => ({
  auth: state.Auth
});
export default connect(mapStateToProps)(PrivateRoute);