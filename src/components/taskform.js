import React, { useState } from "react";
/* import { cliente } from "../backend/supabase.js"; */

import { FormGroup } from "react-bootstrap-v5";
import { useTask } from "../context/TaskContext";

function taskform() {
  const [taskName, setTaskName] = useState("");
  const { addTask, adding } = useTask();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(adding);
    addTask(taskName);
    setTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <input
            style={styles.input}
            type="text"
            name="taskName"
            placeholder="Tarea"
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            value={taskName}
          />
          <button disabled={adding}>
            {adding ? "Agregando..." : "Agregar"}
          </button>
        </FormGroup>
      </form>
    </div>
  );
}

export default taskform;
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  input: {
    width: "300px",
    height: "30px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
    fontSize: "16px",
    backgroundColor: "#0000ff",
  },
};
