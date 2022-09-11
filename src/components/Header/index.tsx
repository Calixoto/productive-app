import { useLocation } from "react-router-dom";
import { HeaderContainer, Link, NavContainer } from "./styles";

export function Header() {
  const { pathname } = useLocation();
  return (
    <HeaderContainer>
      <h1>logo</h1>

      <NavContainer>
        <Link active={pathname === "/" && true} to="/" title="Timer">
          Timer
        </Link>
        <Link active={pathname === "/tasks" && true} to="/tasks" title="To-do">
          To-Do
        </Link>
      </NavContainer>
    </HeaderContainer>
  );
}
