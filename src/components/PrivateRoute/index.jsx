import React from "react";
import { connect } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = props => {
    const { loginDetails, ...rest } = props;
   if (loginDetails && loginDetails.success) {
        return  <Route {...rest} />
   }

   return <Redirect to='/login' />;
};

const mapStateToProps = state => {
    return {
      loginDetails: state.accountReducer.loginDetails
    };
};
  
export default connect(mapStateToProps, null)(PrivateRoute);
