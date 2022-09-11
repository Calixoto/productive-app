import styled, { css } from "styled-components";

interface ActiveTaskProps {
  active: boolean;
}

export const ListTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  border-radius: 0.5rem;
`;

export const ListTaskContent = styled.div<ActiveTaskProps>`
  ${({ active }) =>
    active
      ? css`
          display: flex;
          align-items: flex-start;
          padding: 1rem;
          gap: 0.75rem;
          border: 1px solid var(--gray-500);
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
          border-radius: 0.5rem;
          width: 100%;

          p {
            font-size: 0.75rem;
            line-height: 140%;
            font-weight: 400;
            text-decoration-line: line-through;
            color: var(--gray-300) !important;
          }
        `
      : css`
          display: flex;
          align-items: flex-start;
          padding: 1rem;
          gap: 0.75rem;
          border: 1px solid var(--gray-400);
          background: var(--gray-500);
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
          border-radius: 0.5rem;
          width: 100%;

          p {
            font-size: 0.75rem;
            line-height: 140%;
            font-weight: 400;
            color: var(--gray-100);
          }
        `}
`;

export const TaskActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  border-radius: 0.25rem;

  width: 1.5rem;
  height: 1.5rem;

  transition: all 0.1s ease-out;

  .onHover {
    display: none;
  }

  &:hover {
    img {
      display: none;
    }
    .onHover {
      display: block;
    }

    &:last-child {
      background: var(--gray-400);
    }
  }
`;
