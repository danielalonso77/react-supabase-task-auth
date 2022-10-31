import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskContext";

import Login from "./paginas/login";
import Home from "./paginas/home";
import NotFound from "./paginas/notfound";


import { cliente } from "./backend/supabase.js";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    cliente.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div style={styles.backgroundColor}>
      <TaskContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
    </div>
  );
}

export default App;

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  backgroundColor: {
    backgroundColor: "blue",
  },
};
