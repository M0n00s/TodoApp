import { AddTodo, RemoveTodo, ToggleTodo } from "../TypesActions/Types";

export const AddTodoAction = (newTodo) => {
  return { type: AddTodo, payload: newTodo };
};
export const RemoveTodoAction = (id) => {
  return { type: RemoveTodo, payload: id };
};
export const ToggleTodoAction = (id) => {
  return { type: ToggleTodo, payload: id };
};
