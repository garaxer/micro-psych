import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import AppLayout from "../AppLayout/AppLayout";
import SideMenu from "../SideMenu/SideMenu";
import HomeContent from "../../HomeContent/HomeContent";
import Counter from "../../Counter";
import { lazy, Suspense } from "react";

const PDPContent = lazy(() => import("micro_site/PDPContent"));
const CartContent = lazy(() => import("cart/CartContent"));

const MainLayout = () => {
  return (
    <Router>
      <AppLayout>
        <AppLayout.Banner>
          <Header />
        </AppLayout.Banner>
        <AppLayout.AppBar>
          <Link to="/">Gary's Micro-site extravaganza</Link> |
          <Link to="/cart" id="cart">
            {" "}
            Cart
          </Link>
        </AppLayout.AppBar>
        <AppLayout.SideMenu>
          <SideMenu />
        </AppLayout.SideMenu>
        <AppLayout.Content>
          <Routes>
            <Route
              path="/"
              element={
                <div className="mt-10 text-3xl mx-auto max-w-6xl">
                  <HomeContent />
                </div>
              }
            />
            <Route
              path="/services/:id"
              element={
                <Suspense fallback={<div>Loading ...</div>}>
                  <PDPContent />
                </Suspense>
              }
            />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Loading ...</div>}>
                  <CartContent />
                </Suspense>
              }
            />
            <Route path="/counter" element={<Counter />} />
            <Route
              path="/test"
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
    </Router>
  );
};

export default MainLayout;
