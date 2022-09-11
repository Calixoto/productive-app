import styled from "styled-components";

export const HeaderTaskContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h2 {
    font-size: 0.875rem;
    font-weight: 700;

    color: var(--blue);
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    gap: 10px;

    height: 19px;

    background: var(--gray-400);
    border-radius: 999px;
    font-size: 0.75rem;
    line-height: 15px;
    color: var(--gray-200);
    font-weight: 700;
  }

  &:last-child {
    h2 {
      color: var(--purple);
    }
  }
`;
