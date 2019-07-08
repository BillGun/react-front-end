import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { connect } from "react-redux";
import { Navigate } from "../../redux/actions";

import Main from "../../screens/main/main";
import Login from "../../screens/login/login";

function mapStateToProps(state) {
  console.log(state);
  const { navigate } = state;
  return { text: navigate.currentTab };
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: destination => dispatch(Navigate(destination))
  };
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Navbar Mounted");
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">
                  {/* onClick={() => this.props.navigate("Home")} */}
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login">
                  {/* onClick={() => this.props.navigate("Login")} */}
                  Login
                </Link>
              </li>
            </ul>

            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
