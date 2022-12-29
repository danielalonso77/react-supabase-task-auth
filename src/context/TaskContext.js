import React, { useState, createContext, useContext } from "react";
import { cliente } from "../backend/supabase.js";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTask must be used within a TaskProvider");
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getTasks(done = false) {
    setLoading(true);
    const user = cliente.auth.user();

    const { error, data } = await cliente
      .from("tasks")
      .select("*")
      .eq("uid", user.id)
      .eq("done", done)
      .order("id", { ascending: false });

    if (error)
      throw error;

    setTasks(data);

    setLoading(false);
  }

  const doneTask = async (id, updateField) => {
    console.log(id, updateField);
    setLoading(true);

    const u = cliente.auth.user();
    const { error, data } = await cliente
      .from("tasks")
      .update(updateField)
      .eq("id", id)
      .eq("uid", u.id);
    if (error) throw error;

    setTasks(tasks.filter((task) => task.id !== id));
    console.log(data);
    setLoading(false);
  };

  const addTask = async (taskName) => {
    setAdding(true);
    try {
      const user = cliente.auth.user();
      console.log(user);
      const { error, data } = await cliente.from("tasks").insert({
        name: taskName,
        uid: user.id,
      });
      if (error) throw error;
      console.log(data);
      setTasks([...tasks, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setAdding(false);
    }
  };

  const deleteTask = async (id) => {
    setLoading(true);
    console.log(id);
    const u = cliente.auth.user();
    const { error, data } = await cliente
      .from("tasks")
      .delete()
      .eq("uid", u.id)
      .eq("id", id);
    if (error) throw error;
    console.log(data);
    setTasks(tasks.filter((task) => task.id !== id));
    setLoading(false);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        addTask,
        doneTask,
        adding,
        loading,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
