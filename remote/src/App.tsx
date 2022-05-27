import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss";
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <SafeComponent>
      <Header />
    </SafeComponent>
    <Counter />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
