import { TodoType } from "pages/Todo/Todo.types";

export interface TodosState {
  list: TodoType[];
  todo: TodoType | null;
  query: string;
  filter: string;
  sorting: string;
  isOpen: boolean;
  counter: number;
}
