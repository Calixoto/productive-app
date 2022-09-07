import { EmptyTasksContainer } from "./styles";

import clipboard from "../../assets/clipboard.svg";

export function EmptyTasks() {
  return (
    <EmptyTasksContainer>
      <img src={clipboard} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong> <br /> Crie
        tarefas e organize seus itens a fazer
      </p>
    </EmptyTasksContainer>
  );
}
