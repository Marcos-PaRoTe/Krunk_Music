import styles from '../../shared/styles/Home.module.css'
import logo from "../../../../assets/profile.png";

function Home() {
  return (
    <section className={styles.home_container}>
      <div className={styles.box}>
        <div className={styles.start}>
          <div>
            <img src={logo} alt='krunk_Logo'/>
            <span className={styles.nome}>
              Monka Di Luffa <i className="fa-solid fa-certificate"></i>
            </span>
          </div>
          <span>
            3 minutos atrás <i className="fa-solid fa-ellipsis"></i>
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
            <span><i className="fa-sharp fa-solid fa-heart fa-beat" style={{color: '#ff0000'}}></i> 70</span>
            <span><i className="fa-solid fa-comment fa-fade" style={{color: '#ee00ff'}}></i>34</span>
            <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{color: '#005eff'}}></i> 16</span>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.start}>
          <div>
            <img src={logo} alt='krunk_Logo'/>
            <span className={styles.nome}>
              Monka Di Luffa <i className="fa-solid fa-certificate"></i>
            </span>
          </div>
          <span>
            3 minutos atrás <i className="fa-solid fa-ellipsis"></i>
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
            <span><i className="fa-sharp fa-solid fa-heart fa-beat" style={{color: '#ff0000'}}></i> 70</span>
            <span><i className="fa-solid fa-comment fa-fade" style={{color: '#ee00ff'}}></i>34</span>
            <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{color: '#005eff'}}></i> 16</span>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.start}>
          <div>
            <img src={logo} alt='krunk_Logo'/>
            <span className={styles.nome}>
              Monka Di Luffa <i className="fa-solid fa-certificate"></i>
            </span>
          </div>
          <span>
            3 minutos atrás <i className="fa-solid fa-ellipsis"></i>
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
            <span><i className="fa-sharp fa-solid fa-heart fa-beat" style={{color: '#ff0000'}}></i> 70</span>
            <span><i className="fa-solid fa-comment fa-fade" style={{color: '#ee00ff'}}></i>34</span>
            <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{color: '#005eff'}}></i> 16</span>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.start}>
          <div>
            <img src={logo} alt='krunk_Logo'/>
            <span className={styles.nome}>
              Monka Di Luffa <i className="fa-solid fa-certificate"></i>
            </span>
          </div>
          <span>
            3 minutos atrás <i className="fa-solid fa-ellipsis"></i>
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
            <span><i className="fa-sharp fa-solid fa-heart fa-beat" style={{color: '#ff0000'}}></i> 70</span>
            <span><i className="fa-solid fa-comment fa-fade" style={{color: '#ee00ff'}}></i>34</span>
            <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{color: '#005eff'}}></i> 16</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;