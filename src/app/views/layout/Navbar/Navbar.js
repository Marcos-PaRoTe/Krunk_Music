import { Link } from "react-router-dom";
import styles from "../../shared/styles/Navbar.module.css";
import logo from "../../../../assets/krunk_logo.jpeg";
import profile from "../../../../assets/profile.png";

function Navbar() {
  return (
    <nav className={`navbar  ${styles.navbar}`} >
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>
          <span className={styles.titulo}>Krunk Music.</span>
          <img src={logo} alt='krunk_Logo' />
        </Link>
        <div>
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.lista}`}>
            <li className="nav-item">
              <Link className="nav-link active" to='/'>
                <i className="fa-solid fa-house fa-2x"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/marketplace'>
                <i className="fa-solid fa-store fa-2x"></i>
                Marketplace
              </Link>
            </li>
          </ul>
        </div>

        <form className="d-flex" role="search">
          <div className="row">
            <div className="input-group col-md-4">
              <input className={`form-control border-right-0 border ${styles.inputBusca}`} type="search" placeholder="Pesquisar..."/>
              <span className="input-group-append">
                <button className="btn btn-outline-secondary border-left-0 border" type="button">
                    <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>         
        </form>
        
        <div>
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.lista}`}>
            <li className="nav-item">
              <Link className="nav-link active">
                <i className="fa-solid fa-bookmark fa-2x"></i>
                Salvos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                <i className="fa-solid fa-bell fa-2x"></i>
                Notificação
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                <img src={profile} alt="Foto do usuário"/>
                Kleitinho
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
