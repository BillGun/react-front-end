import { Navigate } from "./actions";

export const mapDispatchNavigationToProps = dispatch => {
  return {
    navigate: destination => dispatch(Navigate(destination))
  };
};
