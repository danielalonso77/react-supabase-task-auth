import React from "react";

function home() {
  return (
    <div style={styles.container}>
      <h1>Home</h1>

      <div>
        {/* /boton para ir a login */}
        <button
          style={styles.button}
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default home;

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
};
