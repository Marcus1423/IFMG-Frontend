import styles from "./card.module.css";

function Card({ imagem, titulo, descricao }) {
  return (
    <div>
      <div className={styles.card}>
        <img
          src={imagem}
          alt={titulo}
          className={styles.image}
        />

        <h2 className={styles.title}>{titulo}</h2>
        <p className={styles.description}>{descricao}</p>
      </div>
    </div>
  );
}

export default Card;