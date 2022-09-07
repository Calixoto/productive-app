import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { NewTaskContainer } from "./styles";

interface NewTaskProps {
  handleGetText: (value: string) => void;
}

export function NewTask({ handleGetText }: NewTaskProps) {
  const [value, setValue] = useState("");

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleGetText(value);
    setValue("");
  }

  return (
    <NewTaskContainer>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">
          Criar <BsPlusCircle />
        </button>
      </form>
    </NewTaskContainer>
  );
}
