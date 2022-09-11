import { Scroll, Timer } from "phosphor-react";
import { HeaderTimerContainer } from "./styles";

import { NavLink } from "react-router-dom";

export function HeaderTimer() {
  return (
    <HeaderTimerContainer>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderTimerContainer>
  );
}
