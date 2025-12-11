import { useState } from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ image, title, price, description }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  return (
    <div className={styles.card}id="productos">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className={styles.precio}>${price}</p>
      <button
        className={styles.verInfoBtn}
        onClick={() => setMostrarDescripcion(!mostrarDescripcion)}
      >
        {mostrarDescripcion ? "Ocultar info" : "Ver info"}
      </button>
      {mostrarDescripcion && (
        <p className={styles.descripcion}>{description}</p>
      )}
    </div>
  );
}

export default ProductCard;

