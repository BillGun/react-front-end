import React from "react";

import { connect } from "react-redux";
import { Navigate } from "../../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    navigate: destination => dispatch(Navigate(destination))
  };
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Home Mounted");
    this.props.navigate("Home");
  }

  render() {
    return <p>Home</p>;
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Main);
