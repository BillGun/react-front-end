import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/navbar";

import { Provider } from "react-redux";
import store from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          Hello React,Webpack 4 & Babela 7!`
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
