import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { connect } from "react-redux";
import { mapDispatchNavigationToProps } from "../../redux/actionCreators";

const LoginForm = () => (
  <Formik
    initialValues={{ email: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" style={{ display: "block" }}>
            Email / Username
          </label>
          <input
            id="email"
            placeholder="Enter your email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.email && touched.email ? "text-input error" : "text-input"
            }
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}

          <button
            type="button"
            className="outline"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      );
    }}
  </Formik>
);

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
      // <Formik>
      //   <Form>
      //     <p>Login</p>
      //     <Field type="email" name="email" />
      //   </Form>
      // </Formik>
      <LoginForm />
    );
  }
}

export default connect(
  null,
  mapDispatchNavigationToProps
)(Login);
