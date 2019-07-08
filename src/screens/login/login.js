import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { connect } from "react-redux";
import { Navigate } from "../../redux/actions";

const LoginForm = () => {};

const mapDispatchToProps = dispatch => {
  return {
    navigate: destination => dispatch(Navigate(destination))
  };
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Login Mounted");
    this.props.navigate("Login");
  }

  render() {
    return (
      <Formik>
        <Form>
          <p>Login</p>
        </Form>
      </Formik>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
