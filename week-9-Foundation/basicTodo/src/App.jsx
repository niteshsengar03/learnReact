import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "Hit the gym reguraly",
      done: false,
    },
  ]);

  function addTodo() {
    const newTodo =
      {
        title: title,
        description: description,
        done: false,
      };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="title"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      ></input>
      <input
        id="description"
        type="text"
        placeholder="description"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={addTodo}>Add Todo</button>
      <br />
      {todos.map((todo) => (
        <Todos title={todo.title} description={todo.description}></Todos>
      ))}
    </div>
  );

  function Todos({ title, description }) {
    return (
      <>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </>
    );
  }
}

export default App;
