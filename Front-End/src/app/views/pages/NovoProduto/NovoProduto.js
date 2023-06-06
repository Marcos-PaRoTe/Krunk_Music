import React, { useState } from "react";
import styles from "../../shared/styles/NovoProduto.module.css";
import api from "../../../core/services/api"
import { useNavigate } from "react-router-dom";

function NovoProduto() {

  const navigate = useNavigate();

  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [erro0, setErro0] = useState('');
  const [erro1, setErro1] = useState('');
  const [erro2, setErro2] = useState('');
  const [erro3, setErro3] = useState('');

  const handleChangeSelect = (event) => {
    setOpcaoSelecionada(event.target.value);
    setErro2('');
  };

  const handleChangeInput0 = () => {
    setErro0('');
  }

  const handleChangeInput1 = () => {
    setErro1('');
  }
  const handleChangeInput3 = () => {
    setErro3('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target[0].value) {
      setErro0('Por favor, digite o nome do anunciante.');
    }

    if (!event.target[1].value) {
      setErro1('Por favor, digite o nome do produto.');
    }

    if (!event.target[3].value) {
      setErro3('Por favor, digite o preço do produto.');
    }

    if (opcaoSelecionada === '') {
      setErro2('Por favor, selecione uma opção.');
    }

    let nomeAnunciante = event.target[0].value
    let nomeProduto = event.target[1].value
    let valorProduto = event.target[3].value

    const produtoForm = {
      anunciante: nomeAnunciante,
      nome: nomeProduto,
      categoria: opcaoSelecionada,
      valor: valorProduto
    };
    registrarProduto(produtoForm);
  }

  async function registrarProduto(produtoForm){
    await api.post('/produtos' , produtoForm)
    .then((response) => {
      navigate('/marketplace');
    });;
  }

  return (
    <section className={styles.home_container}>
      <div className={styles.box}>
        <h1>Criar Anúncio</h1>
        <hr></hr>

        <div className={styles.card_body_post}>
          <form onSubmit={handleSubmit}>
            <div className={styles.fields}>
              <label>Nome Do Anunciante</label>
              <input type="text" name="nome" placeholder="Digite o nome do produto" onChange={handleChangeInput0} />
              {erro0 && <p className={styles.error_message}>{erro0}</p>}
            </div>

            <div className={styles.fields}>
              <label>Nome Do Produto</label>
              <input type="text" name="nome" placeholder="Digite o nome do produto" onChange={handleChangeInput1} />
              {erro1 && <p className={styles.error_message}>{erro1}</p>}
            </div>

            <div className={styles.fields}>
              <label>Categoria</label>
              <select id="selectOption" value={opcaoSelecionada} onChange={handleChangeSelect}>
                <option value="">Selecione</option>
                <option value="guitarra">Guitarra</option>
                <option value="violao">Violão</option>
                <option value="bateria">Bateria</option>
                <option value="musica">Música</option>
                <option value="piano">Piano</option>
              </select>
              {erro2 && <p className={styles.error_message}>{erro2}</p>}
            </div>

            <div className={styles.fields}>
              <label>Preço</label>
              <input type="number" name="preco" placeholder="Digite o preço do produto" onChange={handleChangeInput3} />
              {erro3 && <p className={styles.error_message}>{erro3}</p>}
            </div>

            <div className={styles.btn_post}>
              <button type="submit">Criar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NovoProduto;