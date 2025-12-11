import { useState } from "react";
import styles from "./Main.module.css";
import ProductCard from "../ProductCard/ProductCard";

function Main() {

    <main className="main">
      <section id="productos" className="section">
        <h2>Productos</h2>
        <p>Aquí van tus productos...</p>
      </section>

      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <p>Formulario o datos de contacto...</p>
      </section>
      <section id="ubicacion" className="section">
        <h2>Ubicacíon</h2>
        <p>Formulario o datos de contacto...</p>
      </section>
    </main>





  const [verInfo, setVerInfo] = useState(false);

  const productos = [
    {
      image: "/imagenes/miniHot.jpg",
      title: "Mini Hot Cakes con Lechera y Lunetas",
      price: "50",
      description: "Deliciosos mini hot cakes cubiertos con lechera y lunetas, ideales para un desayuno dulce."
    },
    {
      image: "/imagenes/fresas.jpg",
      title: "Fresas con Crema",
      price: "50",
      description: "Fresas frescas con crema batida de calidad premium, un clásico irresistible."
    },
    {
      image: "/imagenes/brocheta.jpg",
      title: "Brocheta de Mini Hot Cakes",
      price: "50",
      description: "Mini hot cakes en brochetas, perfectos para compartir o regalar."
    },
    {
      image: "/imagenes/fresa.jpg",
      title: "Pastel de Fresa",
      price: "350",
      description: "Pastel esponjoso de fresa, decorado con crema y fruta fresca de primera calidad."
    },
    {
      image: "/imagenes/rebanada.jpg",
      title: "Rebanada de Pastel",
      price: "45",
      description: "Porción individual de pastel, ideal para un antojo rápido y delicioso."
    },
    {
      image: "/imagenes/chocolate.jpg",
      title: "Pastel de Chocolate",
      price: "350",
      description: "Pastel de chocolate premium, suave y húmedo, para los amantes del cacao."
    },
    {
      image: "/imagenes/personalizado.jpg",
      title: "Pastel Personalizado",
      price: "360",
      description: "Crea tu pastel a tu gusto, decoraciones y sabores personalizados con amor."
    },
    {
      image: "/imagenes/flan.jpg",
      title: "Flan",
      price: "200",
      description: "Flan cremoso y suave, hecho con ingredientes de la mejor calidad."
    }
  ];

  return (
    <main className={styles.main}>
      {!verInfo && (
        <>
          <section className={styles.bienvenida}>
            <h2>Bienvenido a KM Postres</h2>
            <p>
              Disfruta de nuestros postres.  
              Donde cada dulce momento se convierte en un recuerdo inolvidable.  
              Endulza tu día con nuestros postres hechos con amor y dedicación.
            </p>
          </section>

          <section className={styles.productos}>
            <h2>Nuestros productos</h2>
            <div className={styles.grid}>
              {productos.map((p, index) => (
                <ProductCard
                  key={index}
                  image={p.image}
                  title={p.title}
                  price={p.price}
                  description={p.description}
                />
              ))}
              
            </div>
            
            <button className={styles.verMasBtn} onClick={() => setVerInfo(true)}>
              Ver más información
             
            </button>
          </section>

          <section className={styles.contacto}>
            <h2>Contacto</h2>
            <p>Síguenos:</p>
            <div className={styles.links}>
              <a
                href="https://www.instagram.com/postr_eskm/?igsh=MTVyeW4xb2o4ODdmOA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </section>
        </>
      )}

      {verInfo && (
        <section className={styles.informacion}>
          <h2>¿Por qué comprar en KM Postres?</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <img src="/imagenes/calidad.jpg" alt="Calidad Premium" />
              <h3>Calidad Premium</h3>
              <p>Usamos ingredientes frescos y de la mejor calidad para todos nuestros postres.</p>
            </div>
            <div className={styles.card} id="productos">
              <img src="/imagenes/frescura.jpg" alt="Frescura" />
              <h3>Frescura</h3>
              <p>Cada producto es hecho al momento para asegurar frescura y sabor único.</p>
            </div>
            <div className={styles.card}>
              <img src="/imagenes/beneficios.jpg" alt="Beneficios" />
              <h3>Beneficios</h3>
              <p>Postres saludables y balanceados para disfrutar sin culpa.</p>
            </div>
            <div className={styles.card}>
              <img src="/imagenes/amor.jpg" alt="Hecho con amor" />
              <h3>Hecho con amor</h3>
              <p>Cada postre es preparado con dedicación y cariño para nuestros clientes.</p>
            </div>
          </div>

          <h2>Ubicación</h2>
          <iframe
            className={styles.map} id="ubicacion"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30052.576343908204!2d-99.14266073940138!3d19.688255232476873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f493043976dd%3A0x98525264e3a44f70!2zVHVsdGVwZWMsIE3DqXgu!5e0!3m2!1ses-419!2smx!4v1761008845463!5m2!1ses-419!2smx"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <button className={styles.volverBtn} onClick={() => setVerInfo(false)}>
            Volver
          </button>
        </section>
      )}

      <a
        href="https://www.instagram.com/postr_eskm/?igsh=MTVyeW4xb2o4ODdmOA%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className={styles["ig-float"]}
      >
        📸
      </a>
    </main>
  );
}

export default Main;

