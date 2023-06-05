import styles from '../../shared/styles/Marketplace.module.css';
import logo from "../../../../assets/profile.png";
import guitarra from "../../../../assets/Guitar.jpg";
import viola from "../../../../assets/Viola.jpg";
import bateria from "../../../../assets/bateria.jpg";
import cd from "../../../../assets/cd.jpg";
import piano from "../../../../assets/piano.jpg";

function Marketplace() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <img src={logo} alt='Logo Krunk Music'></img>
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate" style={{ color: '#005eff' }}></i>
          </span>
        </div>
        <div className={styles.viola}>
          <img src={viola} alt='Violão'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Violão 6 cordas</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 16</span>
        </div>
        <p>R$ 600,00</p>

        <button className={styles.btn}>Comprar</button>
      </div>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <img src={logo} alt='Logo Krunk Music'></img>
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate" style={{ color: '#005eff' }}></i>
          </span>
        </div>
        <div className={styles.guitarra}>
          <img src={guitarra} alt='Guitarra'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Guitarra Fender</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 2</span>
        </div>          
        <p>R$ 1950,00</p>

        <button className={styles.btn}>Comprar</button>
      </div>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <img src={logo} alt='Logo Krunk Music'></img>
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate" style={{ color: '#005eff' }}></i>
          </span>
        </div>
        <div className={styles.guitarra}>
          <img src={bateria} alt='Bateria'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Bateria RMV</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 60</span>
        </div>
        <p>R$ 360,00</p>

        <button className={styles.btn}>Comprar</button>
      </div>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <img src={logo} alt='Logo Krunk Music'></img>
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate" style={{ color: '#005eff' }}></i>
          </span>
        </div>
        <div className={styles.viola}>
          <img src={piano} alt='Violão'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Piano 61 Teclas</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 1</span>
        </div>
        <p>R$ 499,00</p>

        <button className={styles.btn}>Comprar</button>
      </div>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <img src={logo} alt='Logo Krunk Music'></img>
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate" style={{ color: '#005eff' }}></i>
          </span>
        </div>
        <div className={styles.guitarra}>
          <img src={cd} alt='CD'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Música Somebody</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 42</span>
        </div>
        <p>R$ 20,00</p>

        <button className={styles.btn}>Comprar</button>
      </div>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <img src={logo} alt='Logo Krunk Music'></img>
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate" style={{ color: '#005eff' }}></i>
          </span>
        </div>
        <div className={styles.viola}>
          <img src={viola} alt='Violão'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Violão Aço</span>
          <span className={styles.icone}>
            <i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i>
           300
          </span>
        </div>
        <p className={styles.preco}>R$ 45,00</p>

        <button className={styles.btn}>Comprar</button>
      </div>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <img src={logo} alt='Logo Krunk Music'></img>
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate" style={{ color: '#005eff' }}></i>
          </span>
        </div>
        <div className={styles.viola}>
          <img src={cd} alt='cd'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Lembrei de ontem</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 50</span>
        </div>
        <p>R$ 45,00</p>

        <button className={styles.btn}>Comprar</button>
      </div>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <img src={logo} alt='Logo Krunk Music'></img>
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate" style={{ color: '#005eff' }}></i>
          </span>
        </div>
        <div className={styles.guitarra}>
          <img src={bateria} alt='bateria'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Bateria Ed16</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 6</span>
        </div>
        <p>R$ 45,00</p>

        <button className={styles.btn}>Comprar</button>
      </div>
      <div className={styles.box}>
        <div className={styles.titulo}>
          <img src={logo} alt='Logo Krunk Music'></img>
          <span className={styles.descricao}>
            Kleitinho <i className="fa-solid fa-certificate" style={{ color: '#005eff' }}></i>
          </span>
        </div>
        <div className={styles.viola}>
          <img src={piano} alt='piano'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Piano Compatco</span>
          <span className={styles.icone}>
            <i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i>
           0
          </span>
        </div>
        <p className={styles.preco}>R$ 45,00</p>

        <button className={styles.btn}>Comprar</button>
      </div>
    </section>
  );
}

export default Marketplace;
