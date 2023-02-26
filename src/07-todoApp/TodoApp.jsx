import { TodoAdd } from "./ComponentTodo/TodoAdd";
import { TodoList } from "./ComponentTodo/TodoList";
import { useTodos } from "./HookTodos/useTodos";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodos,
    onRemoveTodo,
    onToggleTodo,
    onNewTodo,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp {todosCount}
        <small>, pendientes: {pendingTodos}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h3>Agregar Todo</h3>
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
};
