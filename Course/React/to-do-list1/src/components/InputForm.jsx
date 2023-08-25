import React, {useRef, useState, useEffect } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const InputForm = ({ create, removeAll }) => {
  //const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState([{ title: "", completed: false }]);

  const addNewTask = (e) => {
    e.preventDefault();
    if (task.title !== "") {
      const newTask = {
        ...task,
        id: Date.now(),
        completed: false,
      };
      create(newTask);
      setTask({ title: "" });
    }
  };

  const clearList = (e) => {
    e.preventDefault();
    // displayList([])
    removeAll();
  };

  



  /*
      const loadFromServer =(e) => {
        e.preventDefault();
        loadList();

        useEffect(() => {
          fetch("https://")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setTasks(result);
              },
              (error) => {
                setIsLoaded(true);
                setTasks(error);
              }
            )
            }, [])
          
    
    
    
      }
      }*/

  return (
    <form>
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>
      <MyInput
        ref={input => input && input.focus()}
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        type="text"
        placeholder="Enter a task"
      />
      <MyButton onClick={addNewTask}>Add Task</MyButton>
      <MyButton onClick={clearList}>Clear List</MyButton>
     
      {/*  <MyButton>Load from server</MyButton> */}
    </form>
  );
};

export default InputForm;
