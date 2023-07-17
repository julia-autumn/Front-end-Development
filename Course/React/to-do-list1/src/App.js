import React, { useEffect, useState } from "react";
//import Counter from "./components/Counter";
import TaskItem from "./components/TaskItem";
import "./styles/App.css";
import TaskList from "./components/TaskList";
import MyButton from "./components/UI/button/MyButton";
//import MyInput from "./components/UI/input/MyInput";
import InputForm from "./components/InputForm";
import MySelect from "./components/UI/select/MySelect";
import TaskService from "./API/TaskService";
import Loader from "./components/UI/Loader/Loader";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [isTasksLoading, setIsTasksLoading] = useState(false);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    setIsTasksLoading(true);
    setTimeout(async () => {
      const tasks = await TaskService.getAll();
      //   console.log(response.data);
      setTasks(tasks);
      setIsTasksLoading(false);
    }, 1000);
  }

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const removeAll = () => {
    setTasks([]);
  };

  const doneTask = (task) => {
    const newDoneTask = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, completed: !task.completed };
      }
      return t;
    });

    setTasks(newDoneTask);
  };

  const sortTasks = (sort) => {
    setSelectedSort(sort);
    setTasks(
      [...tasks].sort((a, b) => String(a[sort]).localeCompare(String(b[sort])))
    );
  };

  function loadList() {
    /*   useEffect(() => {
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
      
*/
  }

  return (
    <div className="App">
      <InputForm create={createTask} removeAll={removeAll} load={loadList} />
      <hr style={{ margin: "10px" }} />
      <MyButton onClick={fetchTasks}>Load from Server</MyButton>
      <hr style={{ margin: "10px" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortTasks}
          defaultValue="Sorting"
          options={[
            { value: "title", name: "by Title" },
            { value: "completed", name: "by Status" },
          ]}
        />
      </div>

      {isTasksLoading === true ? (
        <Loader />
      ) : tasks.length !== 0 ? (
        <TaskList done={doneTask} remove={removeTask} tasks={tasks} />
      ) : (
        <div style={{ textAlign: "center", color: "GrayText" }}>
          Empty task list
        </div>
      )}
    </div>
  );
}
export default App;
