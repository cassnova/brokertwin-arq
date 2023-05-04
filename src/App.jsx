import "./App.css";
import Navbar from "./components/Navbar.jsx";

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
        <div className="section-container__content">
          <iframe src="https://twinmotion.unrealengine.com/presentation/YeAKQaIeTJV1WJty?embed"></iframe>
          {/* <div className="twinmotion-embed-wrapper">
            <iframe
              style="height: 100%; width: 100%; min-height: 375px; min-width: 375px;"
              title="Embedded presentation 'Presentation1'"
              allow="fullscreen; gyroscope; accelerometer; magnetometer; execution-while-out-of-viewport; execution-while-not-rendered;"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              src="https://twinmotion.unrealengine.com/presentation/YeAKQaIeTJV1WJty?embed"
            ></iframe>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default App;
