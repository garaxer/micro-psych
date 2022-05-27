import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent/HomeContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
