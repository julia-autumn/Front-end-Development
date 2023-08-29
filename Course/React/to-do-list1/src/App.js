import React, {useEffect, useState, createContext, useContext} from "react";
import { useTasks } from "./hooks/useTasks";
import { useFetching } from "./hooks/useFetching";
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
import MyInput from "./components/UI/input/MyInput";
import TaskFilter from "./components/TaskFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import setDarkMode from "./components/setDarkMode";


const ThemeContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState([]);
  //const [selectedSort, setSelectedSort] = useState("");
  //  const [searchQuery, setSearchQuery] = useState("");
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [isTasksLoading, setIsTasksLoading] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedTasks = useTasks(tasks, filter.sort, filter.query);
  const [fetchTasks, isTasksLoading, taskError] = useFetching(async () => {
    const tasks = await TaskService.getAll();
    setTasks(tasks);
  });
  
  const [checked, setChecked] = useState("false");
  
  const [theme, setTheme] = useState("light");



  const changeCheckbox = (e) => {
    setChecked(!checked);
    setTheme(setChecked);
  };



  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setModal(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

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

    <ThemeContext.Provider value={theme}>
    <div className="App">
   {/*   <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create Task
      </MyButton>
     <MyModal visible={modal} setVisible={setModal} */}
        <InputForm create={createTask} removeAll={removeAll} load={loadList} />
     {/* </MyModal> */}

      <hr style={{ margin: "10px" }} />
      <MyButton onClick={fetchTasks}>Load from Server</MyButton>
      <MyButton onClick={fetchTasks}>Upload to Server</MyButton>
      <input type="checkbox" checked={theme === 'dark'} onChange={changeCheckbox} /> <span>Dark Mode</span>
      <hr style={{ margin: "10px" }} />
      <TaskFilter filter={filter} setFilter={setFilter} />
    

      {taskError &&
         <h1>Error ${taskError}</h1>
         }
      {isTasksLoading === true ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <TaskList
          done={doneTask}
          remove={removeTask}
          tasks={sortedAndSearchedTasks}
        />
      )}
    </div>
    </ThemeContext.Provider>
  );
}
export default App; 

