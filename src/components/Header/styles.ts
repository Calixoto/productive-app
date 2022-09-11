import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 74rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  padding: 1rem 2.5rem;
  border-radius: 8px;
`;

interface NavLinkProps {
  active: boolean;
}

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const Link = styled(NavLink)<NavLinkProps>`
  position: relative;
  padding: 0 0.5rem;
  display: inline-block;
  font-weight: bold;

  line-height: 100%;

  transition: all 0.2s linear;

  &:hover {
    filter: opacity(0.7);
  }

  ${(props) =>
    props.active &&
    css`
      ::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -1rem;
        border-radius: 3px 3px 0 0;
        left: 0;

        background-color: ${(props) => props.theme.blue};
      }
    `}
`;
