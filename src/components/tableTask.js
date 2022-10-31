import React, { useEffect } from "react";
import { Table } from "react-bootstrap-v5";
import { useTask } from "../context/TaskContext";

import TaskCard from "./TaskCard";



function tableTask() {
  
  const { tasks, getTasks, loading } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  /* console.log(tasks); */

  function renderizarTareas() {
    if (loading) {
      return <div style={styles.loading}>Loading...</div>;
    } else if (tasks.length === 0) {
      return <div style={styles.loading}>No hay tareas</div>;
    } else {
      return (
        <div>
          <Table responsive striped>
            <thead>
              <tr>
              </tr>
            </thead>

            {tasks.map((task) => (
              <tbody key={task.id}>
                <TaskCard task={task} />
              </tbody>
            ))}
          </Table>
        </div>
      );
    }
  }

  return <div>{renderizarTareas()}</div>;
}

export default tableTask;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  table: {
    width: "100%",
    border: "1px solid #ccc",
    borderCollapse: "collapse",
    textAlign: "center",
    marginBottom: "10px",
  },
  buttonDel: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
    fontSize: "16px",
    backgroundColor: "#F8A790 ",
  },
  buttonEdit: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
    fontSize: "16px",
    backgroundColor: "#F8F090",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
    fontSize: "16px",
    backgroundColor: "#f5f5f5",
  },
  loading: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
    fontSize: "16px",
    backgroundColor: "#f5f5f5",
  },
};
