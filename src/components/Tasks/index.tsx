import { useEffect, useState } from "react";
import { EmptyTasks } from "../EmptyTasks";
import { ListTasks } from "../ListTasks";
import { HeaderTask } from "./HeaderTask";
import { ListTaskWrapper, TasksContainer } from "./styles";

interface TasksProps {
  isEmpty: boolean;
  countCompletedTask: number;
  handleDeleteTask: (id: number) => void;
  handleCompleteTask: (id: number) => void;
  tasks: {
    id: number;
    text: string;
    isCompleted: boolean;
  }[];
}

export function Tasks({
  tasks,
  isEmpty,
  handleCompleteTask,
  countCompletedTask,
  handleDeleteTask,
}: TasksProps) {
  const [countTask, setCountTask] = useState(0);

  useEffect(() => {
    if (tasks[0].text === "") {
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
