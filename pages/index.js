import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Site em construção</h1>
        <h4>
          Será criado um clone do site{" "}
          <a href="http://tabnews.com.br">Tabnews</a>
        </h4>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Home;
