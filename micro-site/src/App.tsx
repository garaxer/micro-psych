import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout/AppLayout";
import SideMenu from "./components/SideMenu/SideMenu";
import SafeComponent from "./components/SafeComponent";
const Header = React.lazy(() => import("remote/Header"));
const Footer = React.lazy(() => import("remote/Footer"));

import "remixicon/fonts/remixicon.css";
import "./index.scss";
import PDPContent from "./components/PDPContent/PDPContent";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <AppLayout.Banner>
          <SafeComponent>
            <Suspense fallback={<div>Loading ...</div>}>
              <Header />
            </Suspense>
          </SafeComponent>
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
          <Suspense fallback={<div>Loading ...</div>}>
            <SafeComponent>
              <Footer />
            </SafeComponent>
          </Suspense>
        </AppLayout.Footer>
      </AppLayout>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
