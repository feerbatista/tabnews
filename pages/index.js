function Home() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Isso garante que o conteúdo fique centralizado verticalmente
  };

  const textStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    margin: "5px",
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>Prazer, Fernando</div>
      <div>
        <a href="https://github.com/feerbatista/" style={buttonStyle}>
          GitHub
        </a>
        <a
          href="https://www.instagram.com/feerbatista.png/"
          style={buttonStyle}
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Home;
