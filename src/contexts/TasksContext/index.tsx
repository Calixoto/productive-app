import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface TasksContextProviderProps {
  children?: ReactNode;
}

interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

interface TasksContextProps {
  handleCompleteTask(id: string): void;
  handleDeleteTask(id: string): void;
  isEmpty: boolean;
  countCompletedTask: number;
  handleGetText(value: string): void;
  tasks: Task[];
}

export const TasksContext = createContext({} as TasksContextProps);

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [countCompletedTask, setCountCompletedTask] = useState(0);
  const isEmpty = tasks.length === 0;

  function handleGetText(value: string) {
    setTasks((state) => [
      ...state,
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        text: value,
        isCompleted: false,
      },
    ]);
  }

  function handleCompleteTask(id: string) {
    const tasksMap = tasks.map((task) => {
      if (task.id === id) {
        setCountCompletedTask(
          !task.isCompleted ? countCompletedTask + 1 : countCompletedTask - 1
        );
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(tasksMap);
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter((task) => {
      if (task.id === id) {
        if (task.isCompleted) {
          setCountCompletedTask(countCompletedTask - 1);
        }
        return false;
      }
      return true;
    });
    setTasks(newTasks);
    if (newTasks.length === 0) {
      localStorage.removeItem("@to-do:task-state-1.0.0");
    }
  }

  useEffect(() => {
    const storagedTask = localStorage.getItem("@to-do:task-state-1.0.0");

    if (storagedTask) {
      const parsedStoragedTask: Task[] = JSON.parse(storagedTask);
      setTasks(parsedStoragedTask);
      console.log(parsedStoragedTask);
      let amount = 0;
      for (let i = 0; i < parsedStoragedTask.length; i++) {
        if (parsedStoragedTask[i].isCompleted) {
          amount++;
        }
      }
      console.log(amount);
      setCountCompletedTask(amount);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("@to-do:task-state-1.0.0", JSON.stringify(tasks));
    }
  }, [tasks]);

  const provider = {
    handleCompleteTask,
    handleDeleteTask,
    isEmpty,
    countCompletedTask,
    handleGetText,
    tasks,
  };
  return (
    <TasksContext.Provider value={provider}>{children}</TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within an TaskContextProvider!");
  }

  return context;
}
