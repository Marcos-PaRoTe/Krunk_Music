import React, { useState } from "react";
import styles from "../../shared/styles/NovoProduto.module.css";
/* import axios from "axios"; */


/* const options = [
  { id: '1', value: 'guitarra', label: 'Guitarra' },
  { id: '2', value: 'violao', label: 'Violão' },
  { id: '3', value: 'bateria', label: 'Bateria' },
  { id: '4', value: 'musica', label: 'Música' },
  { id: '5', value: 'piano', label: 'Piano' }
]; */

function NovoProduto() {

  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [erro0, setErro0] = useState('');
  const [erro1, setErro1] = useState('');
  const [erro2, setErro2] = useState('');

  const handleChangeSelect = (event) => {
    setOpcaoSelecionada(event.target.value);
    setErro1('');
  };

  const handleChangeInput1 = () => {
    setErro0('');
  }

  const handleChangeInput2 = () => {
    setErro2('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target[0].value) {
      setErro0('Por favor, digite o nome.');
    }

    if (!event.target[2].value) {
      setErro2('Por favor, digite o preço.');
    }

    if (opcaoSelecionada === '') {
      setErro1('Por favor, selecione uma opção.');
    }
  }

  return (
    <section className={styles.home_container}>
      <div className={styles.box}>
        <h1>Criar Anúncio</h1>
        <hr></hr>

        <div className={styles.card_body_post}>
          <form onSubmit={handleSubmit}>
            <div className={styles.fields}>
              <label>Nome Do Produto</label>
              <input type="text" name="nome" placeholder="Digite o nome do produto" onChange={handleChangeInput1} />
              {erro0 && <p className={styles.error_message}>{erro0}</p>}
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
              {erro1 && <p className={styles.error_message}>{erro1}</p>}
            </div>

            <div className={styles.fields}>
              <label>Preço</label>
              <input type="number" name="preco" placeholder="Digite o preço do produto" onChange={handleChangeInput2} />
              {erro2 && <p className={styles.error_message}>{erro2}</p>}
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