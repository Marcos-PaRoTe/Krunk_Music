import styles from "../../shared/styles/Navbar.module.css";
import logov2 from "../../../../assets/logov2.png";
import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <nav>
      <input type="checkbox" id={styles.check} />
      <label htmlFor={styles.check} className={styles.checkbtn}>
        <i className="fas fa-bars"></i>
      </label>
      <span className={styles.titulo}>Krunk Music<b>.</b></span>
      <img src={logov2} className={styles.logo} alt="logo_krunk" />
      <ul className={styles.lista}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/marketplace'>Marketplace</NavLink>
        </li>
        <li><NavLink to='/produtos'><i className="fa-solid fa-plus fa-flip" style={{color: '#FF4400'}}></i>Produtos</NavLink></li>
        <li><NavLink to='/login'>Sair</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;