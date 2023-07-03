import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, header }) => {
  return (
    <div>
   
      {tasks.map((task, index) => (
        <TaskItem number={index + 1} task={task} key={task.id} />
      ))}
      

      
    </div>
  );
};
export default TaskList;
