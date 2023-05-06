import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <header className="header-container">
        <div className="header-container__content">
          <h1>BROKERTWIN</h1>
          <h2>
            Una manera creativa e interactiva para recorrer tu futuro hogar
          </h2>
          <button>VER MÁS</button>
        </div>
      </header>
      <main className="main-container">
        <div className="main-container__content">
          <h2>NOSOTROS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            eveniet id nisi fuga excepturi quaerat non! Numquam commodi qui
            temporibus tenetur ex eius, saepe animi quis eligendi veritatis
            debitis nobisS.
          </p>
        </div>
      </main>
      <section className="section-container">
        <h2>CASAS</h2>
        <div className="section-container__content">
          <iframe src="https://twinmotion.unrealengine.com/presentation/YeAKQaIeTJV1WJty?embed"></iframe>
        </div>
      </section>
      <div className="contact-container">
        <h2>CONTACTO</h2>
        <Contact />
      </div>
      <footer className="footer-container">
        <p>Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
