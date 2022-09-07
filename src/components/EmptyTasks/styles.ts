import styled from "styled-components";

export const EmptyTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 1.5rem;
  border-top: 1px solid var(--gray-400);
  border-radius: 0.5rem;

  p {
    font-size: 1rem;
    font-weight: 400s;
    line-height: 140%;
    text-align: center;
  }
`;
