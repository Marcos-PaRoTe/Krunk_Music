import styles from '../../styles/RightPanel.module.css';
import logo from "../../../../../assets/profile.png";

function RightPanel() {
  return (
    <div className={styles.right_container}>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <img src={logo} alt='krunk_Logo' />
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate fa-fade" style={{color: '#005eff'}}></i>
            <p>Guitarrista</p>
          </span>
        </div>

        <div className={styles.seguidores}>
          <span>11K <p>Seguidores</p></span>
          <span>1.4k <p>Seguindo</p></span>
        </div>

        <div className={styles.pensamento}>
          <span>O que você está pensando, Kleitinho?</span>
        </div>
        <hr></hr>
        <button className={styles.btn}>Publicar</button>
      </div>

      <div className={styles.box}>
        <div className={styles.titulo}>
          <span>Últimas atividades</span>
        </div>
        <div className={styles.grupos_nomes}>
          <div>
            <img src={logo} alt='krunk_Logo' />
            <span><b>Alarakiba</b> e <b>outros 78</b> curtiram o seu post ৹ 5m</span>
            <hr></hr>
          </div>
          <div>
            <div>
              <img src={logo} alt='krunk_Logo' />
              <span><b>Rarri</b> marcou você no comentário: <b>@kletinho</b> Olha isso aqui ৹ 15m</span>
            </div>
            <hr></hr>
          </div>
          <div>
            <div>
              <img src={logo} alt='krunk_Logo' />
              <span><b>Jana</b> começou a te seguir.<b> Entre</b> no perfil dela ৹ 35m</span>
            </div>
            <hr></hr>
          </div>
        </div>
        <div className={styles.grupos_nomes}>
          <div>
            <img src={logo} alt='krunk_Logo' />
            <span><b>Zimba</b> e <b>outros 68</b> curtiram o seu post ৹ 60m</span>
            <hr></hr>
          </div>
          <div>
            <div>
              <img src={logo} alt='krunk_Logo' />
              <span><b>Barbeiro</b> marcou você no comentário: <b>@kletinho</b> Se liga aqui ৹ 12m</span>
            </div>
            <hr></hr>
          </div>
          <div>
            <div>
              <img src={logo} alt='krunk_Logo' />
              <span><b>Emanuel</b> começou a te seguir.<b> Entre</b> no perfil dele ৹ 55m</span>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;