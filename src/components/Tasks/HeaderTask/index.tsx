import { HeaderTaskContainer } from "./styled";

interface HeaderTaskProps {
  title: string;
  amount: string;
}

export function HeaderTask({ title, amount }: HeaderTaskProps) {
  return (
    <HeaderTaskContainer>
      <h2>{title}</h2>
      <span>{amount}</span>
    </HeaderTaskContainer>
  );
}
