import styles from '../../styles/LeftPanel.module.css';


function LeftPanel() {
  return (
    <div className={styles.left_container}>
      <div>Meus Grupos</div>
      <div>Amigos</div>
    </div>
  );
}

export default LeftPanel;