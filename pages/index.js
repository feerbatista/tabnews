import React from "react";

const Home = () => {
  return (
    <div className="container">
      <header className="menu">
        <div className="logo">Tabnews</div>

        <div className="menu-items">
          <div className="search-bar">Pesquisar</div>
          <a href="#">Login</a>
          <a href="#">Cadastrar</a>
          <a href="#">Relevantes</a>
          <a href="#">Recentes</a>
        </div>
      </header>

      <div className="content">
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <ul>
          <li>
            1. O que vocês acham do mundo do PHP? (não é pergunta repetitiva e
            sim um debate)
          </li>
        </ul>
        <div className="pagination">
          <span>Anterior</span>
          <span>Próximo</span>
        </div>
      </div>

      <footer className="footer">
        <div>© 2023 TabNews</div>
        <div className="footer-links">
          <a href="#">Contato</a>
          <a href="#">GitHub</a>
          <a href="#">Museu</a>
          <a href="#">RSS</a>
          <a href="#">Sobre</a>
          <a href="#">Status</a>
          <a href="#">Termos de Uso</a>
        </div>
      </footer>

      <style jsx>{`

        *{}
        .container {
          font-family: Arial, sans-serif;
          max-width: 960px;
          margin: 0 auto;
          width:100vh
          height:100wh
        }

        .menu {
          display: flex;
          justify-content: space-between ;
          align-items: center;
          background-color: #313131;
          padding:5px;
        }

        .logo {
          display:flex;
          justify-content: center;
          
          align-items: center;

          font-size: 1rem;
          font-weight: bold;
          color:#fff;
        }

        .menu-items {
          display: flex;
          justify-content: space-around ;
          align-items: center;
          font-size: 0.6rem;
        }

        .menu-items a {
          margin-left: 10px;
          color: #fff;
          text-decoration: none;
        }

        .search-bar {
          margin: 0 auto;
          width: 250px;
          color: #333;
          border: 1px solid rgb(140, 149, 159);;
          cursor: pointer;
          text-align:end;
          padding-right:15px;
          color:#fff;
        }

        .content {
          padding: 20px;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        .pagination {
          margin-top: 20px;
          display:flex;
          justify-content:center;
          align-items:cemter;
        }

        .pagination span {
          margin-right: 10px;
          color: #333;
          cursor: pointer;
        }

        .footer {
          display: flex;
          justify-content: space-around;
          align-items: center;
          justify-content: center;
          padding: 10px;
          margin-top: 20px;
          background-color: transparent;
        }

        .footer-links a {
          margin-right: 10px;
          color: #333;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
