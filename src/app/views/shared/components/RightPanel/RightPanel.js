import styles from '../../styles/RightPanel.module.css';

function RightPanel() {
  return (
    <div className={styles.right_container}>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate"></i>
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
          <i className="fa-solid fa-ellipsis fa-2x"></i>
        </div>
        <div className={styles.grupos_nomes}>
          <div>
            <i className="fa-solid fa-ellipsis fa-2x"></i>
            <div>
              <span><b>Alarakiba</b> e <b>outros 78</b> curtiram o seu post ৹ 5m</span>
            </div>
            <hr></hr>
          </div>
          <div>
            <i className="fa-solid fa-ellipsis fa-2x"></i>
            <div>
              <span><b>Rarri</b> marcou você no comentário: <b>@kletinho</b> Olha isso aqui ৹ 15m</span>
            </div>
            <hr></hr>
          </div>
          <div>
            <i className="fa-solid fa-ellipsis fa-2x"></i>
            <div>
              <span><b>Jana</b> começou a te seguir.<b>Entre</b> no perfil dela ৹ 35m</span>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;