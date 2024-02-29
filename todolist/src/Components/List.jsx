import { useState } from "react";

const List = () => {
  const initialTodos = ["Code", "Sleep", "Eat"];

  const [todos, setTodos] = useState(initialTodos);
  const [todoInput, setTodoInput] = useState("");
  const [editingTodo, setEditingTodo] = useState(false);
  const [editingTodoInput, setEditingTodoInput] = useState(null);

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                {editingTodo === index ? (
                  <>
                    <input
                      value={editingTodoInput}
                      onChange={(e) => {
                        setEditingTodoInput(e.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        setTodos((prev) => {
                          prev[index] = editingTodoInput;
                          return prev;
                        });
                        setEditingTodo(false);
                      }}
                    >
                      Done editing
                    </button>
                  </>
                ) : (
                  todo
                )}
                <button
                  onClick={() => {
                    setEditingTodoInput(todos[index]);
                    setEditingTodo(index);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setTodos((prev) => prev.filter((todo, i) => i !== index));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            value={todoInput}
          />
          <button
            onClick={() => {
              setTodos((prev) => [...prev, todoInput]);
            }}
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
};
export default List;
