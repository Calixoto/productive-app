import styled from "styled-components";

export const NewTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewTaskForm = styled.form`
  max-width: 736px;
  width: 100%;
  display: flex;
  gap: 0.5rem;

  input {
    width: 100%;
    background: var(--gray-500);
    border: 1px solid var(--gray-700);
    color: inherit;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1rem;
    line-height: 140%;
    outline: none;

    &:focus {
      border: 1px solid var(--purple-dark);
    }
  }
`;

export const SubmitNewTaskForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: var(--blue-dark);

  color: var(--gray-100);
  font-size: 0.875rem;
  line-height: 140%;
  font-weight: 700;

  transition: 0.3s ease-out;

  &:hover {
    background: var(--blue);
  }
`;
