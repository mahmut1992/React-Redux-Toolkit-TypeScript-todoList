import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/Types";

const TodoCreate = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");
  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("todo giriniz");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };
  return (
    <div className="todo-create">
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        value={newTodo}
        placeholder="todo giriniz ..."
        className="todo-input"
        type="text"
      />
      <button onClick={handleCreateTodo} className="todo-create-button">
        Oluştur
      </button>
    </div>
  );
};

export default TodoCreate;
