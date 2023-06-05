import styles from '../../shared/styles/Login.module.css';

function Login() {

  const logar = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  }

  const cadastrar = (e) => {
    e.preventDefault();
    let data = e.target[1].value;
    let dataAlterarda = new Date(data).toLocaleDateString();
    console.log(e.target[0].value);
    console.log(e.target[2].value);
    console.log(dataAlterarda);
  }

  return (
    <section className={styles.animation}>
      <div className={styles.main_container}>
        <input type="checkbox" id={styles.slide} />
        <div className={styles.container}>
          <div className={styles.login_container}>
            <div className={styles.texto}>
              Login
            </div>

            <form onSubmit={logar}>
              <div className={styles.campos}>
                <label htmlFor="email">E-mail</label>
                <input
                  id='email'
                  name='email'
                  type="email"
                  placeholder='Digite o seu email'
                  required
                />
              </div>

              <div className={styles.campos}>
                <label htmlFor="senha">Senha</label>
                <input
                  id='senha'
                  name='senha'
                  type="password"
                  placeholder='Digite a sua senha'
                  required
                  minLength={6}
                />
              </div>

              <div className={styles.esqueceu}>
                <a href='/'>Esqueceu a senha?</a>
              </div>

              <div className={styles.btn_login}>
                <button type="submit">Entrar</button>
              </div>

              <div className={styles.cadastro_link}>
                Não é membro? <a href='/'><label htmlFor={styles.slide} className={styles.slide}>Cadastre-se</label></a>
              </div>
            </form>
          </div>

          <div className={styles.cadastro_container}>
            <div className={styles.texto}>Cadastre-se</div>
            <form onSubmit={cadastrar}>
              <div className={styles.campos}>
                <label htmlFor="">Nome</label>
                <input type="text" required />
              </div>

              <div className={styles.campos}>
                <label htmlFor="">Email</label>
                <input type="email" required />
              </div>

              <div className={styles.campos}>
                <label htmlFor="">Data de nascimento</label>
                <input type="date" required />
              </div>

              <div className={styles.campos}>
                <label htmlFor="">Senha</label>
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
    </section>
  );
}

export default Login;