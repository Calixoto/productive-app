import { NewTask } from "../../components/NewTask";
import { Tasks } from "../../components/Tasks";
import { useTasks } from "../../contexts/TasksContext";
import { TaskBoardContainer } from "./styles";

export function TaskBoard() {
  const { handleGetText } = useTasks();

  return (
    <TaskBoardContainer>
      <NewTask handleGetText={handleGetText} />
      <Tasks />
    </TaskBoardContainer>
  );
}
