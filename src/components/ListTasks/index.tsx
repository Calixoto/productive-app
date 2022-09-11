import checkHover from "../../assets/check-hover.svg";
import check from "../../assets/check.svg";
import checkedHover from "../../assets/checked-hover.svg";
import checked from "../../assets/checked.svg";
import trashDanger from "../../assets/trash-danger.svg";
import trash from "../../assets/trash.svg";
import { ListTaskContainer, ListTaskContent, TaskActionButton } from "./styles";
interface ListTasksProps {
  taskText: string;
  handleCompleteTask: () => void;
  handleDeleteTask: () => void;
  isActive: boolean;
}

export function ListTasks({
  taskText,
  handleCompleteTask,
  isActive,
  handleDeleteTask,
}: ListTasksProps) {
  return (
    <ListTaskContainer>
      <ListTaskContent active={isActive}>
        <TaskActionButton type="button" onClick={handleCompleteTask}>
          <img
            src={!isActive ? check : checked}
            style={{ width: "17px", height: "17px" }}
          />
          <img
            src={!isActive ? checkHover : checkedHover}
            className="onHover"
            style={{ width: "17px", height: "17px" }}
          />
        </TaskActionButton>
        <p>{taskText}</p>
        <TaskActionButton type="button" onClick={handleDeleteTask}>
          <img src={trash} style={{ width: "12px", height: "14px" }} />
          <img
            src={trashDanger}
            className="onHover"
            style={{ width: "12px", height: "14px" }}
          />
        </TaskActionButton>
      </ListTaskContent>
    </ListTaskContainer>
  );
}
