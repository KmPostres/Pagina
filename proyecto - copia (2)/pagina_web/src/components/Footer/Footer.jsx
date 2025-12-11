import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer} id="contacto">
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h3>Horario</h3>
          <p>Lunes a Viernes de 4pm a 8pm</p>
          <p>Exhibición Martes a Viernes de 4pm a 8pm</p>
        </div>
        <div className={styles.section}>
          <h3>Teléfono</h3>
          <p>5529044023</p>
        </div>
        <div className={styles.section}>
          <h3>Contáctanos</h3>
          <p>© 2025 Postrería KM</p>
        </div>
        <div className={styles.section}>
          <h3>Redes</h3>
          <a href="https://www.instagram.com/postr_eskm?igsh=MTVyeW4xb2o4ODdmOA==" target="_blank" rel="noopener noreferrer">
            <img src="/imagenes/insta.png" alt="Instagram" className={styles.icon} />
          </a>
        </div>
        <div className={styles.section} id="ubicacion">
          <h3>Ubicación</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30052.576343908204!2d-99.14266073940138!3d19.688255232476873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f493043976dd%3A0x98525264e3a44f70!2zVHVsdGVwZWMsIE3DqXgu!5e0!3m2!1ses-419!2smx!4v1761008845463!5m2!1ses-419!2smx"

            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa ubicación KM Postres"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;