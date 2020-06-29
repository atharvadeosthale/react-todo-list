import React, { Fragment, useState } from "react";

function Todo({ text, completed, index, onComplete }) {
  return (
    <Fragment>
      <tr>
        <td style={completed ? { textDecoration: "line-through" } : null}>
          {text}
        </td>
        <td>
          <input
            type="checkbox"
            disabled={completed}
            onClick={() => onComplete(index)}
          />
        </td>
      </tr>
    </Fragment>
  );
}

function App() {
  const [todos, setTodo] = useState([
    { text: "Go to walk", completed: false },
    { text: "Go to gym", completed: false },
  ]);

  const [formData, setFormData] = useState({
    text: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodo([...todos, { text: formData.text, completed: false }]);
  };

  const onComplete = (e) => {
    const newTodos = [...todos];
    newTodos[e].completed = true;
    setTodo(newTodos);
  };

  return (
    <Fragment>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Todo</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <Todo
                text={todo.text}
                completed={todo.completed}
                index={index}
                onComplete={onComplete}
              />
            ))}
          </tbody>
        </table>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Todo</label>
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={(e) => onChange(e)}
              className="form-control"
              placeholder="Enter your Todo"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add Todo
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default App;
