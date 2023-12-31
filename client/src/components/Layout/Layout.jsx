// 담당: 정주현

import { useLocation } from "react-router-dom";
import AppRouter from "../AppRouter";
import Header from "./Header";
import { useMemo } from "react";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const isHome = useMemo(() => location.pathname === "/", [location]);
  const isMap = useMemo(() => location.pathname === "/map", [location]);
  return (
    <>
      {!isHome && <Header />}
      <AppRouter />
      {!isHome && !isMap && <Footer />}
    </>
  );
};

export default Layout;
