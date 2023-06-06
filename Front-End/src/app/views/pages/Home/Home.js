import styles from '../../shared/styles/Home.module.css'
import avatar2 from "../../../../assets/avatar2.png";
import avatar3 from "../../../../assets/avatar3.jpg";
import avatar4 from "../../../../assets/avatar4.png";
import avatar5 from "../../../../assets/avatar5.jpg";

function Home() {
  return (
    <section className={styles.home_container}>
      <div className={styles.box}>
        <div className={styles.start}>
          <div>
            <img src={avatar5} alt='krunk_Logo'/>
            <span className={styles.nome}>
              Monka Di Luffa <i className="fa-solid fa-certificate"></i>
            </span>
          </div>
          <span>
            23 minutos atrás <i className="fa-solid fa-ellipsis"></i>
          </span>
        </div>
        <div className={styles.texto_container}>
          <p className={styles.texto}>
            Esta é a minha mais recente música, escrevi ela me inspirando em uma viagem que fiz para floresta amazônica qunado conheci a cultura do povo Kopiku. Espero que gostem da prévia e ajudem com um valor simbólico... Qualquer feedback para avaliar... <b className={styles.bold}>Ver mais</b>
          </p>
          <hr></hr>
        </div>
        <div className={styles.usuario}>
          <div>
            <button className={styles.btn_usuario}>Curtir<i className="fa-solid fa-thumbs-up fa-beat-fade" style={{color: '#FFF'}}></i></button>
            <button className={styles.btn_usuario}>Comentar<i className="fa-solid fa-comment fa-beat-fade" style={{color: '#FFF'}}></i></button>
            <button className={styles.btn_usuario}>Compartilhar<i className="fa-solid fa-share fa-beat-fade" style={{color: '#FFF'}}></i></button>
          </div>
          <div>
            <span><i className="fa-sharp fa-solid fa-heart fa-beat" style={{color: '#ff0000'}}></i> 61</span>
            <span><i className="fa-solid fa-comment fa-fade" style={{color: '#ee00ff'}}></i>34</span>
            <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{color: '#005eff'}}></i> 16</span>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.start}>
          <div>
            <img src={avatar2} alt='krunk_Logo'/>
            <span className={styles.nome}>
              Maria Joaquim <i className="fa-solid fa-certificate"></i>
            </span>
          </div>
          <span>
            33 minutos atrás <i className="fa-solid fa-ellipsis"></i>
          </span>
        </div>
        <div className={styles.texto_container}>
          <p className={styles.texto}>
          A banda irlandesa U2 é conhecida por suas letras profundas e melodias envolventes. "With or Without You" é uma das músicas mais emblemáticas do grupo. Escrita por Bono, a música aborda temas como amor, devoção e as complexidades de um relacionamento... <b className={styles.bold}>Ver mais</b>
          </p>
          <hr></hr>
        </div>
        <div className={styles.usuario}>
          <div>
            <button className={styles.btn_usuario}>Curtir<i className="fa-solid fa-thumbs-up fa-beat-fade" style={{color: '#FFF'}}></i></button>
            <button className={styles.btn_usuario}>Comentar<i className="fa-solid fa-comment fa-beat-fade" style={{color: '#FFF'}}></i></button>
            <button className={styles.btn_usuario}>Compartilhar<i className="fa-solid fa-share fa-beat-fade" style={{color: '#FFF'}}></i></button>
          </div>
          <div>
            <span><i className="fa-sharp fa-solid fa-heart fa-beat" style={{color: '#ff0000'}}></i> 50</span>
            <span><i className="fa-solid fa-comment fa-fade" style={{color: '#ee00ff'}}></i>34</span>
            <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{color: '#005eff'}}></i> 100</span>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.start}>
          <div>
            <img src={avatar3} alt='krunk_Logo'/>
            <span className={styles.nome}>
              Ademilton Soza <i className="fa-solid fa-certificate"></i>
            </span>
          </div>
          <span>
            43 minutos atrás <i className="fa-solid fa-ellipsis"></i>
          </span>
        </div>
        <div className={styles.texto_container}>
          <p className={styles.texto}>
            A lendária banda britânica Queen revolucionou o cenário musical com sua mistura única de rock e teatralidade. "Bohemian Rhapsody" é um exemplo perfeito dessa abordagem ousada. Composta por Freddie Mercury, a música é uma verdadeira obra-prima, com suas diferentes seções... <b className={styles.bold}>Ver mais</b>
          </p>
          <hr></hr>
        </div>
        <div className={styles.usuario}>
          <div>
            <button className={styles.btn_usuario}>Curtir<i className="fa-solid fa-thumbs-up fa-beat-fade" style={{color: '#FFF'}}></i></button>
            <button className={styles.btn_usuario}>Comentar<i className="fa-solid fa-comment fa-beat-fade" style={{color: '#FFF'}}></i></button>
            <button className={styles.btn_usuario}>Compartilhar<i className="fa-solid fa-share fa-beat-fade" style={{color: '#FFF'}}></i></button>
          </div>
          <div>
            <span><i className="fa-sharp fa-solid fa-heart fa-beat" style={{color: '#ff0000'}}></i> 39</span>
            <span><i className="fa-solid fa-comment fa-fade" style={{color: '#ee00ff'}}></i>34</span>
            <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{color: '#005eff'}}></i> 19</span>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.start}>
          <div>
            <img src={avatar4} alt='krunk_Logo'/>
            <span className={styles.nome}>
              Luidemberg Broca <i className="fa-solid fa-certificate"></i>
            </span>
          </div>
          <span>
          53 minutos atrás <i className="fa-solid fa-ellipsis"></i>
          </span>
        </div>
        <div className={styles.texto_container}>
          <p className={styles.texto}>
            A banda britânica Coldplay ganhou destaque mundial com sua música envolvente e letras emocionantes. Uma das suas canções mais icônicas é "Viva La Vida". Composta por Chris Martin, a música é um hino otimista que fala sobre superar desafios e abraçar novas oportunidades... <b className={styles.bold}>Ver mais</b>
          </p>
          <hr></hr>
        </div>
        <div className={styles.usuario}>
          <div>
            <button className={styles.btn_usuario}>Curtir<i className="fa-solid fa-thumbs-up fa-beat-fade" style={{color: '#FFF'}}></i></button>
            <button className={styles.btn_usuario}>Comentar<i className="fa-solid fa-comment fa-beat-fade" style={{color: '#FFF'}}></i></button>
            <button className={styles.btn_usuario}>Compartilhar<i className="fa-solid fa-share fa-beat-fade" style={{color: '#FFF'}}></i></button>
          </div>
          <div>
            <span><i className="fa-sharp fa-solid fa-heart fa-beat" style={{color: '#ff0000'}}></i> 70</span>
            <span><i className="fa-solid fa-comment fa-fade" style={{color: '#ee00ff'}}></i>34</span>
            <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{color: '#005eff'}}></i> 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;