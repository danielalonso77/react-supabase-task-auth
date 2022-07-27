import "../App.css";
import { useState } from "react";
import { cliente } from "../backend/supabase.js";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const result = await cliente.auth.signIn({
        email,
      });
      console.log(cliente.auth.user);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Regresar
      </button>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label>
          <h1>Email:</h1>
        </label>
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="youremail@site.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button style={styles.button}>Enviar</button>
      </form>
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
    backgroundColor:{
        backgroundColor: "#f5f5f5",
        
    }
};
