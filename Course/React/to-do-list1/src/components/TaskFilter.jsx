import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const TaskFilter = ({filter, setFilter}) =>{

    return (
    <div>
    <MyInput
        value = {filter.query}
        onChange = {e => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
        />
    <MySelect
      value={filter.sort}
      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      defaultValue="Sorting"
      options={[
        { value: "title", name: "by Title" },
        { value: "completed", name: "by Status" },
      ]}
    />
  </div>
    )
}

export default TaskFilter;       