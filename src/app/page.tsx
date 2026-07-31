const Arrow = () => <span className="decorativeArrow" aria-hidden="true">↗</span>;

const services = [
  {
    number: "01",
    title: "Descubrimiento",
    text: "Convertimos procesos complejos en una hoja de ruta clara, con alcance, riesgos y decisiones visibles.",
  },
  {
    number: "02",
    title: "Producto digital",
    text: "Diseñamos y construimos plataformas web operativas, accesibles y preparadas para evolucionar.",
  },
  {
    number: "03",
    title: "Datos e IA",
    text: "Integramos automatización, machine learning y LLMs donde aportan valor real y pueden verificarse.",
  },
  {
    number: "04",
    title: "Evolución",
    text: "Acompañamos la puesta en marcha, medimos el resultado y mantenemos el producto después de la entrega.",
  },
];

const projects = [
  {
    tag: "Salud · Oncología",
    title: "Gestión de estudios clínicos",
    client: "CICUC · Oncología UC",
    text: "Plataforma para ordenar estudios, protocolos, seguimiento y operación clínica con trazabilidad.",
    tone: "green",
  },
  {
    tag: "Salud pública",
    title: "Centro para la Prevención y el Control del Cáncer",
    client: "CECAN",
    text: "Soluciones digitales orientadas a transformar información compleja en herramientas de trabajo útiles.",
    tone: "sand",
  },
  {
    tag: "Investigación",
    title: "Tecnología para salud",
    client: "iHealth · Instituto Milenio",
    text: "Investigación y desarrollo en la intersección entre datos, producto digital y salud.",
    tone: "blue",
  },
  {
    tag: "IA aplicada",
    title: "Operación inteligente de estacionamientos",
    client: "Producto web",
    text: "Automatización operacional con visión computacional, machine learning y detección de patentes.",
    tone: "orange",
  },
  {
    tag: "Innovación clínica",
    title: "Coordinación de procura de órganos",
    client: "Transplan",
    text: "Producto digital para apoyar el trabajo de equipos de procura y mejorar la coordinación del proceso.",
    tone: "purple",
  },
];

const principles = [
  ["Entender antes de construir", "El problema, los usuarios y las restricciones definen la tecnología; no al revés."],
  ["Entregar software que funciona", "Prototipamos para aprender, pero el objetivo es dejar una solución operativa."],
  ["Hacer visible la complejidad", "Decisiones, riesgos, alcance y evidencia permanecen trazables durante el proyecto."],
  ["Diseñar para continuar", "Código, documentación y operación quedan preparados para que el producto evolucione."],
];

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <a className="brand" href="#inicio" aria-label="Adyac, ir al inicio">
          <span className="brandMark" aria-hidden="true">
            <i />
            <i />
          </span>
          <strong>adyac</strong>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#metodo">Método</a>
        </nav>
        <a className="headerCta" href="#contacto">
          Conversemos <Arrow />
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="heroGrid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="heroCopy">
            <p className="eyebrow">Consultora de producto y tecnología · Chile</p>
            <h1>
              Construimos tecnología
              <span>que mueve el trabajo real.</span>
            </h1>
            <p className="heroLead">
              Diseñamos y desarrollamos productos digitales para equipos que
              resuelven problemas complejos en salud, investigación y operación.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#contacto">
                Cuéntanos tu desafío <Arrow />
              </a>
              <a className="textLink" href="#experiencia">
                Ver nuestra experiencia <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="heroObject" aria-hidden="true">
            <div className="orbit orbitOne" />
            <div className="orbit orbitTwo" />
            <div className="core">
              <span>problema</span>
              <b>+</b>
              <span>producto</span>
            </div>
            <span className="signal signalOne">01</span>
            <span className="signal signalTwo">adyac</span>
            <span className="signal signalThree">valor</span>
          </div>
          <div className="heroFooter">
            <span>De la conversación</span>
            <i />
            <span>al producto operativo</span>
          </div>
        </section>

        <section className="manifesto">
          <p className="sectionIndex">00 — En una frase</p>
          <p className="manifestoText">
            Trabajamos en la <em>adyacencia</em> entre personas, procesos y
            tecnología: ese espacio donde una buena idea se convierte en una
            herramienta que alguien puede usar, medir y sostener.
          </p>
        </section>

        <section className="section services" id="servicios">
          <div className="sectionHeading">
            <div>
              <p className="sectionIndex">01 — Lo que hacemos</p>
              <h2>Del problema a una solución que permanece.</h2>
            </div>
            <p>
              Nos involucramos desde el descubrimiento hasta la operación,
              combinando pensamiento de producto, diseño e ingeniería.
            </p>
          </div>
          <div className="serviceGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.number}>
                <span>{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="cardArrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section work" id="experiencia">
          <div className="sectionHeading light">
            <div>
              <p className="sectionIndex">02 — Experiencia</p>
              <h2>Proyectos en contextos donde importa hacerlo bien.</h2>
            </div>
            <p>
              Salud, investigación y operación comparten una exigencia:
              entender el dominio y entregar con responsabilidad.
            </p>
          </div>
          <div className="projectList">
            {projects.map((project, index) => (
              <article className={`projectRow ${project.tone}`} key={project.title}>
                <span className="projectNumber">0{index + 1}</span>
                <div className="projectMain">
                  <p>{project.tag}</p>
                  <h3>{project.title}</h3>
                </div>
                <div className="projectDetails">
                  <strong>{project.client}</strong>
                  <p>{project.text}</p>
                </div>
                <span className="projectDot" aria-hidden="true" />
              </article>
            ))}
          </div>
          <p className="workNote">
            La información pública de cada colaboración se presenta respetando
            su contexto y los acuerdos de confidencialidad aplicables.
          </p>
        </section>

        <section className="section method" id="metodo">
          <div className="methodIntro">
            <p className="sectionIndex">03 — Cómo trabajamos</p>
            <h2>Claridad para avanzar. Evidencia para decidir.</h2>
            <p>
              Usamos ciclos breves de descubrimiento, construcción y validación.
              Cada etapa deja un resultado visible y una decisión mejor informada.
            </p>
          </div>
          <div className="methodTrack" aria-label="Etapas de trabajo">
            {["Entender", "Diseñar", "Construir", "Validar", "Operar"].map(
              (step, index) => (
                <div className="methodStep" key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ),
            )}
          </div>
          <div className="principleGrid">
            {principles.map(([title, description]) => (
              <article key={title}>
                <span aria-hidden="true">+</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="team">
          <div className="teamCopy">
            <p className="sectionIndex">04 — Equipo</p>
            <h2>Un equipo cercano al problema y responsable del resultado.</h2>
          </div>
          <div className="teamGrid">
            <article>
              <div className="portrait fabian" aria-hidden="true"><span>FO</span></div>
              <p>Cofundador · Producto y ejecución</p>
              <h3>Fabián Ignacio Ortega Llantén</h3>
              <p className="teamBio">
                Lidera la estrategia de producto y la ejecución de los
                proyectos de Adyac. Traduce necesidades organizacionales en
                soluciones digitales, coordina el descubrimiento con usuarios
                y dirige el trabajo desde la definición del problema hasta la
                puesta en marcha y evolución del producto.
              </p>
              <ul className="expertise" aria-label="Áreas de especialidad de Fabián">
                <li>Dirección de producto</li>
                <li>Transformación digital</li>
                <li>Diseño de soluciones</li>
                <li>Gestión de proyectos</li>
              </ul>
            </article>
            <article>
              <div className="portrait rafael" aria-hidden="true"><span>RK</span></div>
              <p>Cofundador · Estrategia e investigación</p>
              <h3>Rafael Augusto Kaempfer Dañin</h3>
              <p className="teamBio">
                Lidera la estrategia de investigación y el análisis de
                problemas complejos en Adyac. Aporta rigor científico al diseño
                de soluciones, estructura modelos para apoyar decisiones y
                coordina la validación de resultados con equipos académicos,
                clínicos y operativos.
              </p>
              <ul className="expertise" aria-label="Áreas de especialidad de Rafael">
                <li>Estrategia de investigación</li>
                <li>Modelación de sistemas</li>
                <li>Validación científica</li>
                <li>Diseño experimental</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="contactLines" aria-hidden="true"><i /><i /><i /></div>
          <p className="sectionIndex">05 — Conversemos</p>
          <h2>
            ¿Tienes un problema que merece
            <span>una solución bien construida?</span>
          </h2>
          <p>
            Cuéntanos dónde estás y qué necesitas mover. La primera conversación
            es para entender, no para venderte una respuesta prefabricada.
          </p>
          <a className="button contactButton" href="mailto:hola@adyac.cl">
            hola@adyac.cl <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <a className="brand footerBrand" href="#inicio">
          <span className="brandMark" aria-hidden="true"><i /><i /></span>
          <strong>adyac</strong>
        </a>
        <p>Producto · Diseño · Tecnología</p>
        <div>
          <a href="https://www.adyac.cl/">www.adyac.cl</a>
          <span>Santiago, Chile</span>
          <span>© {new Date().getFullYear()} Adyac</span>
        </div>
      </footer>
    </>
  );
}
