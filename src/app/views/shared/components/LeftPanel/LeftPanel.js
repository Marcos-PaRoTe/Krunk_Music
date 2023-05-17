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
            <span>Pedro</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <div>
            <i className="fa-solid fa-person-dress fa-2x"></i>
            <span>Lilian</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>André</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <div>
            <i className="fa-solid fa-person-dress fa-2x"></i>
            <span>Izabel</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <div>
            <i className="fa-solid fa-person fa-2x"></i>
            <span>João</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <div>
            <i className="fa-solid fa-person-dress fa-2x"></i>
            <span>Larissa</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftPanel;
