import React from "react";

import { connect } from "react-redux";
import { mapDispatchNavigationToProps } from "../../redux/actionCreators";
import Button from "@material-ui/core/Button";

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
    return (
      <div>
        <p>Home</p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchNavigationToProps
)(Main);
