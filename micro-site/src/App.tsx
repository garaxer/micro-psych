import React from "react";
import ReactDOM from "react-dom";

import Counter from "remote/Counter";
import AppLayout from "./components/AppLayout/AppLayout";
import SideMenu from "./components/SideMenu/SideMenu";

import "./index.scss";

const App = () => (
  <AppLayout>
    <AppLayout.Banner>micro-site</AppLayout.Banner>
    <AppLayout.AppBar>Gary's Micro-site extravaganza</AppLayout.AppBar>
    <AppLayout.SideMenu>
      <SideMenu />
    </AppLayout.SideMenu>
    <AppLayout.Content>
      <div className="mx-auto mt-1">
        Individual React Component Test:
        <div className="max-w-2s">
          <Counter />
        </div>
      </div>
    </AppLayout.Content>
    <AppLayout.Footer>{new Date().getFullYear()}</AppLayout.Footer>
  </AppLayout>
);
ReactDOM.render(<App />, document.getElementById("app"));
