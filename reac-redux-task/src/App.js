import React, { Component } from "react";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import routeOptions from './routes/route.js'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import * as UserActions from "../src/redux/actions/user-actions"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
componentDidMount(){
  
}

  render() {
    let routes = routeOptions.routes.map(({ path, component, exact }, i) => (
      <Route
        key={Math.random() + "ROUTE_"}
        exact={exact}
        path={path}
        component={component}
      />
    ));
    return (
      <div className="App">
              <Switch>
              {routes}
            </Switch>
        </div>
    );
  }
}


App.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
function mapStateToProps(state) {
  return {
    ...state.user
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...UserActions }, dispatch);
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (App));
 