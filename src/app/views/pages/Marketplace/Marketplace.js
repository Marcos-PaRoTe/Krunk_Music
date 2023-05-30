import styles from '../../shared/styles/Marketplace.module.css';
import logo from "../../../../assets/profile.png";
import guitarra from "../../../../assets/Guitar.jpg";
import viola from "../../../../assets/Viola.jpg";

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
          <span>Música Lentinha</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 16</span>
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
          <img src={guitarra} alt='Guitarra'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Música Amigo de milho</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 16</span>
        </div>          <p>R$ 45,00</p>

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
          <span>Música Grande Bico</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 16</span>
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
          <img src={viola} alt='Violão'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Música Pão Em Tegral</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 16</span>
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
          <img src={guitarra} alt='Guitarra'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Música Away to</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 16</span>
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
          <img src={viola} alt='Violão'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Música Queijo Com Alho</span>
          <span className={styles.icone}>
            <i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i>
           16
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
          <img src={viola} alt='Violão'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Música Pão Em Tegral</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 16</span>
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
          <img src={guitarra} alt='Guitarra'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Música Away to</span>
          <span><i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i> 16</span>
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
          <img src={viola} alt='Violão'></img>
        </div>

        <div className={styles.texto_musica}>
          <span>Música Queijo Com Alho</span>
          <span className={styles.icone}>
            <i className="fa-solid fa-cart-shopping fa-bounce" style={{ color: '#005eff' }}></i>
           16
          </span>
        </div>
        <p className={styles.preco}>R$ 45,00</p>

        <button className={styles.btn}>Comprar</button>
      </div>
    </section>
  );
}

export default Marketplace;
