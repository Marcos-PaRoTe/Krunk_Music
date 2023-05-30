import styles from "../../styles/LeftPanel.module.css";
import "@fortawesome/fontawesome-free/css/all.css";

function LeftPanel() {
  return (
    <section className={styles.left_container}>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <span>Meus Grupos</span>
          <i className="fa-solid fa-ellipsis fa-2x"></i>
        </div>
        <div className={styles.grupos_nomes}>
          <div>
            <i className="fa-solid fa-guitar fa-2x"></i>
            <span>Violão</span>
          </div>
          <div>
            <i className="fa-solid fa-drum fa-2x"></i>
            <span>Bateria</span>
          </div>
          <div>
            <i className="fa-solid fa-landmark fa-2x"></i>
            <span>Banco</span>
          </div>
          <div>
            <i className="fa-brands fa-spotify fa-2x"></i>
            <span>Spotify</span>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.titulo}>
          <span>Amigos</span>
          <i className="fa-solid fa-ellipsis fa-2x"></i>
        </div>

        <div className={styles.grupos_amigos}>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>Ali Fuy Estoi</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person-dress fa-2x"></i>
            <span>Nanamaen</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>Romauro</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person-dress fa-2x"></i>
            <span>Alarihabika</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr> 
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>Sebastian 2</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person-dress fa-2x"></i>
            <span>Monka D Luffa</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>Rarri Potti</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>Amigo de Milho</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>Helastófoli</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>Ventillia</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>Luca Lucas</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>Aembola</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>Zikailson</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>         
        </div>
      </div>
    </section>
  );
}

export default LeftPanel;
