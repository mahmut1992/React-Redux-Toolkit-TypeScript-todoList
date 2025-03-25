import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoInitialState, TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;
  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);
  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };
  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };
  return (
    <div className="flex-between ">
      {editable ? (
        <input
          className="create-todo-input"
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content} </div>
      )}
      <div className="icons">
        <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className="icon" />
        {editable ? (
          <FaCheck onClick={handleUpdateTodo} className="icon" />
        ) : (
          <FaEdit onClick={() => setEditable(true)} className="icon" />
        )}
      </div>
    </div>
  );
};

export default Todo;
