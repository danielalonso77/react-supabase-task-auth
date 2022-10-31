import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cliente } from "../backend/supabase.js";
import TaskForm from "../components/taskform";
import TableTask from "../components/tableTask";
/* import {useTask} from "../context/TaskContext"; */

import { Button } from "react-bootstrap-v5";
export default function Login() {
  /* const {tasks} = useTask(); */

  const navigate = useNavigate();

  useEffect(() => {
    if (!cliente.auth.user()) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div className="container ">
        <div className="row">
          <h1>Home</h1>
          
          <Button
            
            onClick={() => {
              cliente.auth.signOut();
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div style={styles.column}>
        {/* /boton para ir salir de la sesión */}

        <TaskForm />
        <header>
          <h1>Tareas hechas</h1>
        </header>
        <TableTask />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  columnelement: {
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
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
    fontSize: "16px",
    color: "#555",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "10px",
    fontSize: "16px",
    backgroundColor: "#f5f5f5",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
};
