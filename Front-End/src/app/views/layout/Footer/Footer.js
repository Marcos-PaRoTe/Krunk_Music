import styles from "../../shared/styles/Footer.module.css";
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.lista}>
        <li>
          <i className="fa-brands fa-instagram fa-2x"></i>
          <p>Instagram</p>
        </li>
        <li>
          <i className="fa-brands fa-facebook fa-2x"></i>
          <p>Facebook</p>
        </li>
        <li>
          <i className="fa-brands fa-whatsapp fa-2x"></i>
          <p>WhatsApp</p>
        </li>
      </ul>
      <div className={styles.copy_right}>
        <span>Krunk Music.</span> &copy; 2023
      </div>
    </footer>
  );
}

export default Footer;
