import { useNavigate } from 'react-router-dom';
import styles from '../../shared/styles/Login.module.css';

function Login() {

  const navigate = useNavigate();

  const logar = () => {
    console.log("chamou");
    navigate('/marketplace');
  };

  return (
    <div className={styles.main_container}>
      <input type="checkbox" id={styles.slide} />
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
              <a href='/'>Esqueceu a senha?</a>
            </div>

            <div className={styles.btn_login}>
              <button type="button" onClick={logar}>Entrar</button>
            </div>

            <div className={styles.cadastro_link}>
              Não é membro? <a href='/'><label htmlFor={styles.slide} className={styles.slide}>Cadastre-se</label></a>
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
              Possui uma conta? <a href='/'><label htmlFor={styles.slide} className={styles.slide}>Login</label></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;