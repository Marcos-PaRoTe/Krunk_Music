import styles from "../../shared/styles/NovoProduto.module.css";
/* import axios from "axios"; */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
/* import { useNavigate } from "react-router-dom"; */
import Select from 'react-select';


const options = [
  { id: '1', value: 'guitarra', label: 'Guitarra' },
  { id: '2', value: 'violao', label: 'Violão' },
  { id: '3', value: 'bateria', label: 'Bateria' },
  { id: '4', value: 'musica', label: 'Música' }
];

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("O nome é obrigatório")
    .max(20, "O nome precisa ter no máximo 20 caracteres"),
  categoria: yup
    .array()
    .required("A categoria é obrigatória")
    /* .default('Bateria') */,
  preco: yup
    .string()
    .required("O preço é obrigatório")
    .max(10, "O preço precisa ter no máximo 10 números"),
});


function NovoProduto() {
  
  /* let history = useNavigate(); */
  
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationPost) });
  
  const addPost = (data) => console.log(data);
  /* axios
    .post("https://upload-my-api.herokuapp.com/post/create", data)
    .then(() => {
      console.log("Deu tudo certo");
      history.push("/");
    })
    .catch(() => {
      console.log("DEU ERRADO");
    }); */

  return (
    <section className={styles.home_container}>
      <div className={styles.box}>
        <h1>Criar Anúncio</h1>
        <hr></hr>

        <div className={styles.card_body_post}>
          <form onSubmit={handleSubmit(addPost)}>
            <div className={styles.fields}>
              <label>Nome Do Produto</label>
              <input type="text" name="nome" {...register("nome")} placeholder="Digite o nome do produto" />
              <p className={styles.error_message}>{errors.nome?.message}</p>
            </div>

            <div className={styles.fields}>
              <label>Categoria</label>
              <Select className={styles.select}
                options={options}
                name="categoria"
                /* defaultValue={{ id: '1', value: 'guitarra', label: 'Guitarra' }} */
                /* onChange={e => {
                  this.setState({
                    id: e.id,
                    valeu: e.value,
                    label: e.label
                  })
                }} */
                register={{...register("categoria")}}
                placeholder='Selecione a categoria'
                styles={{
                  control: (base) => ({
                    ...base,
                    border: '1px solid #0000006a',
                    boxShadow: 'none',
                    '&:hover': {
                      border: '1px solid black',
                    }
                  })
                }}
              />
              <p className={styles.error_message}>{errors.categoria?.message}</p>
            </div>

            <div className={styles.fields}>
              <label>Preço</label>
              <input type="number" name="preco" {...register("preco")} placeholder="Digite o preço do produto" />
              <p className={styles.error_message}>{errors.preco?.message}</p>
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