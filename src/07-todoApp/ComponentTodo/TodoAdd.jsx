import { useForm } from "../HookTodos/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { onInputChange, inputTodo, onResetForm } = useForm({ inputTodo: "" });

  const onInputSubmit = (e) => {
    e.preventDefault();
    if (inputTodo.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: inputTodo,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <form onSubmit={onInputSubmit}>
      <input
        className="form-control mt-2"
        type="text"
        placeholder="Que hay que hacer?"
        name="inputTodo"
        value={inputTodo}
        onChange={onInputChange}
        autoComplete="off"
      />
      <button className="btn btn-outline-primary">Agregar</button>
    </form>
  );
};
