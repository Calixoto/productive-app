import { Outlet, useLocation } from "react-router-dom";
import { HeaderTimer } from "../../components/HeaderTimer";

import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  const { pathname } = useLocation();
  return (
    <LayoutContainer>
      {pathname === "/" || pathname === "/history" ? <HeaderTimer /> : null}
      <Outlet />
    </LayoutContainer>
  );
}
