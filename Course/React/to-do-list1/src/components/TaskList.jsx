import React from "react";
import TaskItem from "./TaskItem";

/*isDone*/
const TaskList = ({ tasks, header, remove, done }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          done={done}
          remove={remove}
          number={index + 1}
          task={task}
          key={task.id}
        />
        /*isDone={isDone} */
      ))}
    </div>
  );
};
export default TaskList;
