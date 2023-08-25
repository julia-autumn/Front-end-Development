import React from "react";
import TaskItem from "./TaskItem";
import  {TransitionGroup, CSSTransition} from "react-transition-group";

/*isDone*/
const TaskList = ({ tasks, remove, done }) => {
  if (!tasks.length) {
    return (
      <div style={{ textAlign: "center", color: "GrayText" }}>
        Empty task list
      </div>
    );
  }
  return (
    <div>
      <TransitionGroup>


      {tasks.map((task, index) => (

        <CSSTransition
              key={task.id}
              timeout={500}
              classNames="task"
              >

        
        <TaskItem
          done={done}
          remove={remove}
          number={index + 1}
          task={task}
               />
        </CSSTransition>
      ))}
      </TransitionGroup>
    </div>
  );
};
export default TaskList;
