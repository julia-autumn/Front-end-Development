import React from "react";
import MyButton from "./UI/button/MyButton";

const TaskItem = (props) => {
  console.log(props);

  return (
    <div className="task">
      <div className="post__content">
        {props.task.completed ? (
          <div className="done">
            {props.number}. {props.task.title}
          </div>
        ) : (
          <div>
            {" "}
            <strong>
              {props.number}. {props.task.title}
            </strong>
          </div>
        )}
      </div>
      <div className="post_btns">
        <MyButton onClick={() => props.done(props.task)}>Done</MyButton>
        <MyButton onClick={() => props.remove(props.task)}>Remove</MyButton>
      </div>
    </div>
  );
};

export default TaskItem;
