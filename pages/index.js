function Home() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url("https://images4.alphacoders.com/110/1108171.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0",
    padding: "0",
  };

  const textStyle = {
    textAlign: "center",
    fontSize: "48px",
    fontWeight: "bold",
    color: "#fff",
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

  const homeStyle = {
    margin: "0",
    padding: "0",
    height: "100%",
  };

  return (
    <div style={homeStyle}>
      <div style={containerStyle}>
        <div style={textStyle}>Prazer, Fernando</div>
        <div>
          <a
            href="https://github.com/feerbatista/"
            style={buttonStyle}
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/feerbatista.png/"
            style={buttonStyle}
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5516999642837"
            style={buttonStyle}
            target="_blank"
          >
            Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
