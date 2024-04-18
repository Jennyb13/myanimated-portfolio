import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Vision</motion.b> Creativa
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Proyectos</motion.b> Exitosos
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Zen</h2>
                  <p>
                      Crear experiencias inmersivas que transmitan belleza y esencia.
                      Infundir cada proyecto con una sensación de identidad y propósito, 
                      creando productos que no solo cumplan su función, 
                      sino que también inspiren y conecten con los usuarios a un nivel más profundo. 
                  </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Green</h2>
                  <p>
                      Incorporar prácticas sostenibles y conscientes en cada etapa del desarrollo.
                      Productos con  visión de futuro verdey sostenible,
                      priorizando accesibilidad e inclusión en cada paso.
                      Comprometidos a ser parte de la solución para un mundo más equitativo y sostenible.
                  </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Creatividad</h2>
                  <p>
                      Tejer sueños y anelos en el lienzo del universo virtual,
                      con tecnologías inmersivas que despierten los sentidos y la imaginación.
                      Expresar la vision del producto con pasión, belleza e identidad.
                      Despertar la capacidad de asombro de clientes y usuarios.
                  </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Innovacion</h2>
                  <p>
                      Desafiar lo convencional, combinando horizontes tecnologicos.
                      Innovar con audacia y visión,creando soluciones únicas y genuinas.
                      Transformar ideas en realidades, fusionando arte y ciencia.
                      Abrazar el cambio como agente de adaptabilidad.
                  </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;