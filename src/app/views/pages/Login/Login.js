import { useEffect } from 'react';
import styles from '../../shared/styles/Login.module.css';
import { useNavigate } from 'react-router-dom';
/* import { Route, Router, Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Navbar from "../../layout/Navbar/Navbar";
import LeftPanel from "../../shared/components/LeftPanel/LeftPanel";
import Marketplace from "../Marketplace/Marketplace";
import RightPanel from "../../shared/components/RightPanel/RightPanel";
import Footer from "../../layout/Footer/Footer"; */

function Login() {

  const navigate = useNavigate();

  function logar() {
    navigate('/marketplace');
  }

  return (
    <div className={styles.main_container}>
      <input type="checkbox" id={styles.slide}/>
      <div className={styles.container}>
        <div className={styles.login_container}>
          <div className={styles.texto}>
            Login
          </div>

          <form>
            <div className={styles.campos}>
              <label htmlFor="">Email</label>
              <input type="text" required />
            </div>
            <div className={styles.campos}>
              <label htmlFor="">Senha</label>
              <input type="password" required />
            </div>

            <div className={styles.esqueceu}>
              <a>Esqueceu a senha?</a>
            </div>

            <div className={styles.btn_login}>
              <button type="button" onClick={logar()}>Entrar</button>
            </div>

            <div className={styles.cadastro_link}>
              Não é membro? <a href='#'><label htmlFor={styles.slide} className={styles.slide}>Cadastre-se</label></a>
            </div>
          </form>
        </div>

        <div className={styles.cadastro_container}>
          <div className={styles.texto}>Cadastre-se</div>
          <form>
            <div className={styles.campos}>
              <label htmlFor="">Email</label>
              <input type="text" required />
            </div>
            <div className={styles.campos}>
              <label htmlFor="">Senha</label>
              <input type="password" required />
            </div>

            <div className={styles.campos}>
              <label htmlFor="">Confirme sua senha</label>
              <input type="password" required />
            </div>

            <div className={styles.btn_cadastro}>
              <button type="submit">Cadastrar</button>
            </div>

            <div className={styles.cadastro_link}>
              Possui uma conta? <a href='#'><label htmlFor={styles.slide} className={styles.slide}>Login</label></a>
            </div>
          </form>
        </div>
      </div>

              <a className={styles.password} href="/login">Esqueci a senha</a>
              <button className={`${styles.btn} ${styles.btn_second}`}>Logar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;