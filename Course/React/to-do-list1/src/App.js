import React, { useState } from "react";
//import Counter from "./components/Counter";
import TaskItem from "./components/TaskItem";
import "./styles/App.css";
import TasktList from "./components/TaskList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  //  const [likes, setLikes] = useState(0);
  //  const [tasks, setTasks] = useState([
  //          {id:1, textTask: "do", body: "decr"},
  //         {id:2, textTask: "do", body: "decr"},
  //         {id:3, textTask: "do", body: "decr"},

  //]);

   const [textTasks, setTasks] = useState('khkhkhkh');

  //const [textTasks, setTasks] = useState([{id: 1, textTask: "25"}]);

  const addNewTask = (e) => {
    e.preventDefault();
    console.log(textTasks);
    const newTask = {
      id: Date.now(),
      textTasks,
    };
    console.log(textTasks);
    setTasks([...textTasks, newTask]);
   // setTasks('');
  };

  return (
    <div className="App">
      <form>
        <h1 style={{ textAlign: "center" }}>To-Do List</h1>
        <MyInput
          value={textTasks}
          onChange={(e) => setTasks(e.target.value)}
          type="text"
          placeholder="Enter a task"
        />
        <MyButton onClick={addNewTask}>Add Task</MyButton>
      </form>
      <TasktList tasks={textTasks} />
    </div>
  );
}
export default App;
