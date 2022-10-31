import React from "react";
import { useTask } from "../context/TaskContext";


function TaskCard({ task }) {
  const { deleteTask, doneTask } = useTask();

  

  const handleDone = () => {
    doneTask(task.id, { done: !task.done });
    console.log("updated");

  };

  const handleDelete = () => {
    deleteTask(task.id);
    console.log("deleted");
  };

  return (
    <tr>
      <td></td>
      <td>{task.name}</td>
      <td>
        <button
        
         onClick={() => handleDelete()}>borrar</button>
        <button onClick={() => handleDone()}>hecho</button>
      </td>
    </tr>
  );
}

export default TaskCard;
