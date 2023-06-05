import styles from "../../styles/LeftPanel.module.css";
import "@fortawesome/fontawesome-free/css/all.css";
import avatar2 from "../../../../../assets/avatar2.png";
import avatar3 from "../../../../../assets/avatar3.jpg";
import avatar4 from "../../../../../assets/avatar4.png";
import avatar5 from "../../../../../assets/avatar5.jpg";

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
            <img src={avatar2} alt="avatar2"></img>
            <span>Ali Fuy Estoi</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar3} alt="avatar3"></img>
            <span>Nanamaen</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar4} alt="avatar4"></img>
            <span>Romauro</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar5} alt="avatar5"></img>
            <span>Alarihabika</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr> 
          <div>
            <img src={avatar2} alt="avatar2"></img>
            <span>Sebastian 2</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar3} alt="avatar3"></img>
            <span>Monka D Luffa</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar4} alt="avatar4"></img>
            <span>Rarri Potti</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar5} alt="avatar5"></img>
            <span>Amigo de Milho</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar2} alt="avatar2"></img>
            <span>Helastófoli</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar3} alt="avatar3"></img>
            <span>Ventillia</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar4} alt="avatar4"></img>
            <span>Luca Lucas</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar2} alt="avatar2"></img>
            <span>Aembola</span>
            <div></div>
            <div></div>
            <span className={styles.ponto}></span>
          </div>
          <hr></hr>
          <div>
            <img src={avatar5} alt="avatar5"></img>
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
