import React, { ReactNode } from "react";
import "./style.scss";

export interface ContainerProps {
  children: ReactNode;
}

const Banner = ({ children }: ContainerProps) => (
  <div className="banner bg-gray-800 text-white p-1 text-right">{children}</div>
);
const AppBar = ({ children }: ContainerProps) => (
  <div className="appBar bg-gray-100 text-black text-3xl py-1 px-2 t">
    {children}
  </div>
);
const SideMenu = ({ children }: ContainerProps) => (
  <div className="sideMenu bg-gray-100 text-black border-r-2 border-indigo-600 p-2">
    {children}
  </div>
);
const Content = ({ children }: ContainerProps) => (
  <div className="content bg-blue-100">{children}</div>
);
const Footer = ({ children }: ContainerProps) => (
  <div className="footer bg-gray-800 text-white p-1">{children}</div>
);

const AppLayout = ({ children }: ContainerProps) => {
  return <div className="root ">{children}</div>;
};

export default Object.assign(AppLayout, {
  Banner,
  AppBar,
  SideMenu,
  Content,
  Footer,
});
