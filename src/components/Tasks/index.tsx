import { useEffect, useState } from "react";
import { useTasks } from "../../contexts/TasksContext";
import { EmptyTasks } from "../EmptyTasks";
import { ListTasks } from "../ListTasks";
import { HeaderTask } from "./HeaderTask";
import { ListTaskWrapper, TasksContainer } from "./styles";

export function Tasks({}) {
  const {
    handleDeleteTask,
    handleCompleteTask,
    tasks,
    countCompletedTask,
    isEmpty,
  } = useTasks();
  const [countTask, setCountTask] = useState(0);

  useEffect(() => {
    if (tasks[0]?.text === "") {
      setCountTask(0);
    } else {
      setCountTask(tasks.length);
    }
  }, [tasks]);
  return (
    <TasksContainer>
      <div>
        <HeaderTask title="Tarefas criadas" amount={countTask.toString()} />
        <HeaderTask
          title="Concluídas"
          amount={
            countTask !== 0 ? countCompletedTask + " de " + countTask : "0"
          }
        />
      </div>

      <ListTaskWrapper>
        {isEmpty ? (
          <EmptyTasks />
        ) : (
          tasks.map((task) => (
            <ListTasks
              handleDeleteTask={() => handleDeleteTask(task.id)}
              isActive={task.isCompleted}
              handleCompleteTask={() => handleCompleteTask(task.id)}
              taskText={task.text}
              key={task.id}
            />
          ))
        )}
      </ListTaskWrapper>
    </TasksContainer>
  );
}
