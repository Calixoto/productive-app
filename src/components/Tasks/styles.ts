import styled from "styled-components";

export const TasksContainer = styled.div`
  max-width: 740px;
  width: 100%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* border: 1px solid red; */

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.25rem;
  }
`;

export const ListTaskWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  flex: 1;
  overflow: auto;

  max-height: 370px;

  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["gray-500"]};
    border-radius: 15px;
  }
`;
