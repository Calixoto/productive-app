import checkHover from "../../assets/check-hover.svg";
import check from "../../assets/check.svg";
import checkedHover from "../../assets/checked-hover.svg";
import checked from "../../assets/checked.svg";
import trashDanger from "../../assets/trash-danger.svg";
import trash from "../../assets/trash.svg";
import { ListTaskContainer } from "./styles";
interface ListTasksProps {
  taskText: string;
  handleCompleteTask: () => void;
  handleDeleteTask: () => void;
  isActive: boolean;
}

export function ListTasks({
  taskText,
  handleCompleteTask,
  isActive = false,
  handleDeleteTask,
}: ListTasksProps) {
  return (
    <ListTaskContainer>
      <div className="active">
        <button type="button" onClick={handleCompleteTask}>
          <img
            src={!isActive ? check : checked}
            style={{ width: "17px", height: "17px" }}
          />
          <img
            src={!isActive ? checkHover : checkedHover}
            className="onHover"
            style={{ width: "17px", height: "17px" }}
          />
        </button>
        <p>{taskText}</p>
        <button type="button" onClick={handleDeleteTask}>
          <img src={trash} style={{ width: "12px", height: "14px" }} />
          <img
            src={trashDanger}
            className="onHover"
            style={{ width: "12px", height: "14px" }}
          />
        </button>
      </div>
    </ListTaskContainer>
  );
}
