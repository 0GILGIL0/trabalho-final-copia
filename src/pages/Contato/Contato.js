// CSS
import styles from "./Contato.module.css";
import { Link } from "react-router-dom";

//imagens
import matheus from '../imagens/matheus.jpeg'
import ionara from '../imagens/ionara.jpeg'
import gabriel from '../imagens/gabriel.jpeg'
import marcus from '../imagens/marcus.jpeg'
import linkedin from '../imagens/linkedin1.png'

const Contato = () => {
  return (
    
    <div className={styles.container_about}>
      <div className={styles.est}>
          <img src={matheus} className={styles.foto} />
          <br />
          <p className={styles.nome}>Matheus</p>
          <br />
          <p className={styles.nome} >função</p>
          <br />  
      </div>

    <div className={styles.container_about}>
    <div className={styles.est}>
         <img src={ionara} className={styles.foto}/>
         <br/>
         <p className={styles.nome}>Ionara</p>
         <br/>
        <p className={styles.nome} >função</p>
        <img src={linkedin} className={styles.link}/>
      </div>
    </div>

      <div className={styles.container_about}>
      <div className={styles.est}>
        <img src={gabriel} className={styles.foto} />
        <br/>
        <p className={styles.nome}> Gabriel</p>
        <br/>
        <p className={styles.nome} >função</p>
      </div>
      </div>

      <div className={styles.container_about}>
      <div className={styles.est}>
        <img src={marcus} className={styles.foto} />
        <br/>
        <p className={styles.nome}> Gabriel</p>
        <br/>
        <p className={styles.nome} >função</p>
      </div>
      </div>

      <div className={styles.container_about2}>
      <div className={styles.est}>
        <img src={marcus} className={styles.foto} />
        <br/>
        <p className={styles.nome}> Gabriel</p>
        <br/>
        <p className={styles.nome} >função</p>
      </div>
      </div>

      <div className={styles.container_about2}>
      <div className={styles.est}>
        <img src={marcus} className={styles.foto} />
        <br/>
        <p className={styles.nome}> Gabriel</p>
        <br/>
        <p className={styles.nome} >função</p>
      </div>
      </div>

      <div className={styles.container_about2}>
      <div className={styles.est}>
        <img src={marcus} className={styles.foto} />
        <br/>
        <p className={styles.nome}> Gabriel</p>
        <br/>
        <p className={styles.nome} >função</p>
      </div>
      </div>

</div>
  );
};

export default Contato;