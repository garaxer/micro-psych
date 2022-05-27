import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import AppLayout from "./components/AppLayout/AppLayout";
import SideMenu from "./components/SideMenu/SideMenu";
const Header = React.lazy(() => import("remote/Header"));
const Counter = React.lazy(() => import("remote/Counter"));

import "./index.scss";

const App = () => { 
  const [showHeader, setShowHeader] = useState(false);
  
  return(
  <AppLayout>
    <AppLayout.Banner>
      <Suspense fallback={<div>Loading ...</div>}>
        <Header />
      </Suspense>
    </AppLayout.Banner>
    <AppLayout.AppBar>Gary's Micro-site extravaganza</AppLayout.AppBar>
    <AppLayout.SideMenu>
      <SideMenu />
    </AppLayout.SideMenu>
    <AppLayout.Content>
      <div className="mx-auto mt-1">
        Individual React Component Test:
        <div className="max-w-2s">
          <Suspense fallback={<div>Loading ...</div>}>
            <Counter />
          </Suspense>
        </div>
      </div>
    </AppLayout.Content>
    <AppLayout.Footer>{new Date().getFullYear()}</AppLayout.Footer>
  </AppLayout>
)};
ReactDOM.render(<App />, document.getElementById("app"));
