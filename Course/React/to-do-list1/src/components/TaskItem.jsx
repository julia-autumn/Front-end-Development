import React from "react";

const TaskItem = (props) => {
  console.log(props);

  return (
    <div className="task">
      <div className="post__content">
        <strong>
          {props.number}. {props.task.textTask}{" "}
        </strong>
        <div>Java div</div>
      </div>
      <div className="post_btns">
        <button>Done</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
