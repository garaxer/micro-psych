import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const SideMenu = React.lazy(() => import("remote/SideMenu"));
const Header = React.lazy(() => import("remote/Header"));
const Footer = React.lazy(() => import("remote/Footer"));
import AppLayout from "remote/AppLayout"; // https://github.com/module-federation/module-federation-examples/issues/422

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import PDPContent from "./components/PDPContent/PDPContent";
import SafeComponent from "./components/SafeComponent";

const App = () => {
  return (
    <Router>
      <SafeComponent>
        <Suspense fallback={<div>Loading ...</div>}>
          <AppLayout>
            <AppLayout.Banner>
              <Header />
            </AppLayout.Banner>
            <AppLayout.AppBar>Gary's Micro-site extravaganza</AppLayout.AppBar>
            <AppLayout.SideMenu>
              <SideMenu />
            </AppLayout.SideMenu>
            <AppLayout.Content>
              <Routes>
                <Route path="/services/:id" element={<PDPContent />} />
                <Route
                  path="/"
                  element={
                    <div className="mx-auto mt-1">
                      Individual React Component Test:
                      <div className="max-w-2s"></div>
                    </div>
                  }
                />
              </Routes>
            </AppLayout.Content>
            <AppLayout.Footer>
              <Footer />
            </AppLayout.Footer>
          </AppLayout>
        </Suspense>
      </SafeComponent>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
