import { useEffect, useReducer } from "react";
import {
  AddTodoAction,
  RemoveTodoAction,
  ToggleTodoAction,
} from "../ActionsTodo/ActionsTodo";
import { todoReducer } from "../todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const onNewTodo = (newTodo) => {
    dispatch(AddTodoAction(newTodo));
  };

  const onRemoveTodo = (id) => {
    dispatch(RemoveTodoAction(id));
  };

  const onToggleTodo = (id) => {
    dispatch(ToggleTodoAction(id));
  };

  const pendingTodos = todos.filter((todo) => todo.done === false).length;
  const todosCount = todos.length;

  return {
    todos,
    pendingTodos,
    todosCount,
    onNewTodo,
    onRemoveTodo,
    onToggleTodo,
  };
};
