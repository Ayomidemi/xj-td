import { useState, useEffect } from "react";
import "./App.css";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input"
        />
        <button onClick={addTask} className="button">
          Add
        </button>
      </div>

      <ul className="list">
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          tasks.map((t, index) => (
            <li key={index} className="list-item">
              {t}
              <button
                onClick={() => removeTask(index)}
                className="delete-button"
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoApp;
