import styles from "../../shared/styles/Marketplace.module.css";
import logo from "../../../../assets/profile.png";
import api from "../../../core/services/api";
import { useState } from "react";
import { useEffect } from "react";

function Marketplace() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function obterProdutos() {
      await api
        .get("/produtos")
        .then((response) => {
          setProdutos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    obterProdutos();
  }, []);

  return (
    <section className={styles.container}>
      {produtos.map((produto, key) => (
        <div className={styles.box} key={key}>
          <div className={styles.titulo}>
            <img src={logo} alt="Logo Krunk Music" />
            <span className={styles.descricao}>
              {produto.anunciante}{" "}
              <i
                className="fa-solid fa-certificate"
                style={{ color: "#005eff" }}
              ></i>
            </span>
          </div>
          <div className={styles.img}>
            <img
              src={require(`../../../../assets/${produto.categoria}.jpg`)}
              alt="Produto"
            />
          </div>

          <div className={styles.texto_musica}>
            <span>{produto.nome}</span>
            <span>
              <i
                className="fa-solid fa-cart-shopping fa-bounce"
                style={{ color: "#005eff" }}
              ></i>{" "}
              {Math.floor(Math.random() * 99)}
            </span>
          </div>
          <p>R$ {produto.valor}</p>

          <button className={styles.btn}>Comprar</button>
        </div>
      ))}
    </section>
  );
}

export default Marketplace;
