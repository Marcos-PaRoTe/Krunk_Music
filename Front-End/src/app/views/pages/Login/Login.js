import styles from '../../shared/styles/Login.module.css';
import { useNavigate } from 'react-router-dom';
import api from "../../../core/services/api"

function Login() {

  const navigate = useNavigate();

  const logar = (e) => {
    e.preventDefault();
    let email = e.target[0].value
    let senha = e.target[1].value

    const loginForm = {
      email: email,
      senha: senha
    };

    fazerLogin(loginForm);
  }

  const cadastrar = (e) => {
    e.preventDefault();
    let data = e.target[2].value;
    let dataAlterarda = new Date(data).toLocaleDateString();
    let nome = e.target[0].value
    let email = e.target[1].value
    let senha = e.target[3].value

    const registerForm = {
      nome: nome,
      email: email,
      senha: senha,
      dataNascimento: dataAlterarda
    };
    fazerRegistro(registerForm);
  }

  async function fazerRegistro(registerForm){
    await api.post('/cadastrar' , registerForm)
    .then((response) => {
      navigate('/home');
      setTimeout(() => {
        alert(`Bem vindo(a) ${response.data.nome}`);
      }, 100);
    })
    .catch((error) => {
     if(error.response.status === 409){
      alert("Usuário já existe")
     }else{
      alert("Ocorreu um erro, tente novamente")
     }
    });
  }

  async function fazerLogin(loginForm) {
    await api
      .post('/login', loginForm)
      .then((response) => {
        navigate('/home');
        setTimeout(() => {
          alert(`Bem vindo(a) ${response.data.nome}`);
        }, 100);
      })
      .catch(() => {
        alert("Email ou senha inválidos!");
      });
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
                Não é membro? 
                <a href='/'>
                  <label htmlFor={styles.slide} className={styles.slide}>
                    Cadastre-se
                  </label>
                </a>
              </div>
            </form>
          </div>

          <div className={styles.cadastro_container}>
            <div className={styles.texto}>Cadastre-se</div>
            <form onSubmit={cadastrar}>
              <div className={styles.campos}>
                <label htmlFor="">Nome</label>
                <input 
                  id='nome2'
                  name='nome'
                  type="text"
                  placeholder='Digite o seu nome completo'
                  required />
              </div>

              <div className={styles.campos}>
                <label htmlFor="">Email</label>
                <input 
                  id='email2'
                  name='email'
                  type="email"
                  placeholder='Digite o seu email'
                  required/>
              </div>

              <div className={styles.campos}>
                <label htmlFor="">Data de nascimento</label>
                <input type="date" required />
              </div>

              <div className={styles.campos}>
                <label htmlFor="">Senha</label>
                <input
                  id='senha2'
                  name='senha'
                  type="password"
                  placeholder='Digite a sua senha'
                  required
                  minLength={6}/>
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