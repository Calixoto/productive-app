import styled from "styled-components";

export const TasksContainer = styled.div`
  max-width: 736px;
  width: 100%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    section {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h2 {
        font-size: 0.875rem;
        font-weight: 700;
        // line-height: 100%;
        color: var(--blue);
      }

      span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2px 8px;
        gap: 10px;

        // width: 25px;
        height: 19px;

        background: var(--gray-400);
        border-radius: 999px;

        strong {
          // width: 9px;
          height: 15px;

          font-size: 0.75rem;
          line-height: 15px;
          color: var(--gray-200);
        }
      }

      &:last-child {
        h2 {
          color: var(--purple);
        }
      }
    }
  }
`;
