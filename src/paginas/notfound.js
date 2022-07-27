import React from 'react'

function notfound() {
  return (
    <div
    style={styles.container}
    >
        <h1>404</h1>
        <h2>Pagina no encontrada</h2>
    </div>
  )
}

export default notfound

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