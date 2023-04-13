import React, { useState } from "react";
import Display from "./Display";

const InputField = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editKey, setEditKey] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  function handleClick() {
    if (task !== "") {
      const realList = [...list, task];
      setList(realList);
    }

    if (editKey) {
      const editList = list.slice();
      editList[editKey] = task;
      setList(editList);
      setTask("");
      setEditKey(null);
    }
  }

  const delItem = (id) => {
    const filteredArray = list.filter((_, index) => index !== id);
    setList(filteredArray);
  };

  const editItem = (item, index) => {
    setTask(item);
    setEditKey(index);
  };

  return (
    <Display
      handleChange={handleChange}
      handleClick={handleClick}
      editKey={editKey}
      delItem={delItem}
      editItem={editItem}
      task={task}
      list={list}
    />
  );
};

export default InputField;
