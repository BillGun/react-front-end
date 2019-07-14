import React from "react";
import ReactDOM from "react-dom";
// import "../node_modules/materialize-css/dist/css/materialize.min.css";
// import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./index.css";

import Navbar from "./components/navbar/navbar";

import { Provider } from "react-redux";
import store from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <Navbar />
        </main>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
