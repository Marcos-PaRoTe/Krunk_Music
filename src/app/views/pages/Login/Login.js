import styles from '../../shared/styles/Login.module.css';
import { useEffect } from 'react';
/* import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios"; */

function Login() {

  useEffect(() => {
    animacao();
  });

  function animacao() {
    var btnEntrar = document.querySelector("#entrar");
    var btnCadastrar = document.querySelector("#cadastrar");

    var section = document.querySelector("section");
    console.log(section)

    btnEntrar.addEventListener("click", function () {
      section.className = "sign_in_js";
    });

    btnCadastrar.addEventListener("click", function () {
      section.className = "sign_up_js";
    });
  }

  /* const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validarLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória")
  });

  const validarCadastro = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  }); */

  return (
    <section>
      <div className={styles.container}>
        <div className={`${styles.content} ${styles.first_content}`}>
          <div className={styles.first_column}>
            <h2 className={`${styles.title} ${styles.title_primary}`}>Bem vindo de volta!</h2>
            <p className={`${styles.description} ${styles.description_primary}`}>Para manter-se conectado com a gente</p>
            <p className={`${styles.description} ${styles.description_primary}`}>Faça o login clicando abaixo</p>
            <button id='entrar' className={` ${styles.btn} ${styles.btn_primary}`}>Entrar</button>
          </div>
          <div className={styles.second_column}>
            <h2 className={`${styles.title} ${styles.title_second}`}>Crie sua conta</h2>
            <div className={styles.social_media}>
              <ul className={styles.list_social_media}>
                <a className={styles.link_social_media} href="/login">
                  <li className={styles.item_social_media}>
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className={styles.link_social_media} href="/login">
                  <li className={styles.item_social_media}>
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className={styles.link_social_media} href="/login">
                  <li className={styles.item_social_media}>
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p className={`${styles.description} ${styles.description_second}`}>Ou use seu email para se registrar:</p>
            <form className={styles.form}>
              <label className={styles.label_input} htmlFor="">
                <i className={`far fa-user ${styles.icon_modify}`}></i>
                <input type="text" placeholder="Digite seu nome" />
              </label>

              <label className={styles.label_input} htmlFor="">
                <i className={`far fa-envelope ${styles.icon_modify}`}></i>
                <input type="email" placeholder="Digite seu email" />
              </label>

              <label className={styles.label_input} htmlFor="">
                <i className={`fas fa-lock ${styles.icon_modify}`}></i>
                <input type="password" placeholder="Digite sua senha" />
              </label>

              <button className={`${styles.btn} ${styles.btn_second}`}>Cadastrar</button>
            </form>
          </div>
        </div>
        <div className={`${styles.content} ${styles.second_content}`}>
          <div className={styles.first_column}>
            <h2 className={`${styles.title} ${styles.title_primary}`}>Olá, Krunkers!</h2>
            <p className={`${styles.description} ${styles.description_primary}`}>Digite suas informações pessoais</p>
            <p className={`${styles.description} ${styles.description_primary}`}>E venha curtir com a gente</p>
            <button id="cadastrar" className={`${styles.btn} ${styles.btn_primary}`}>Cadastrar</button>
          </div>
          <div className={styles.second_column}>
            <h2 className={`${styles.title} ${styles.title_second}`}>Cadastrar no Krunk Music</h2>
            <div className={styles.social_media}>
              <ul className={styles.list_social_media}>
                <a className={styles.link_social_media} href="/login">
                  <li className={styles.item_social_media}>
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className={styles.link_social_media} href="/login">
                  <li className={styles.item_social_media}>
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className={styles.link_social_media} href="/login">
                  <li className={styles.item_social_media}>
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p className={`${styles.description} ${styles.description_second}`}>Ou use a sua conta de email:</p>
            <form className={styles.form}>

              <label className={styles.label_input} htmlFor="">
                <i className={`far fa-envelope ${styles.icon_modify}`}></i>
                <input type="email" placeholder="Digite seu email" />
              </label>

              <label className={styles.label_input} htmlFor="">
                <i className={`fas fa-lock ${styles.icon_modify}`}></i>
                <input type="password" placeholder="Digite sua senha" />
              </label>

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