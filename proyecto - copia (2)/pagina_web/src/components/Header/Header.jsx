import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img 
        src="/imagenes/logo1.jpg" 
        alt="KM Postres Logo" 
        className={styles.logo}
      />
      <h1 className={styles.title}>KM POSTRES</h1>
      <nav>
        
          <a href="#productos">Servicios</a>
          <a href="#contacto">Contacto</a>
          <a href="#ubicacion">Ubicación</a>
        
      </nav>

    </header>
  );
}

export default Header;
