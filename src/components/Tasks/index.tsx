import { useEffect, useState } from "react";
import { EmptyTasks } from "../EmptyTasks";
import { ListTasks } from "../ListTasks";
import { TasksContainer } from "./styles";

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
        <section>
          <h2>Tarefas criadas</h2>
          <span>
            <strong>{countTask}</strong>
          </span>
        </section>
        <section>
          <h2>Concluídas</h2>
          <span>
            <strong>
              {countTask !== 0 ? countCompletedTask + " de " + countTask : 0}
            </strong>
          </span>
        </section>
      </div>
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
    </TasksContainer>
  );
}
