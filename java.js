const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Fahkwang:wght@300;600&family=Montserrat:wght@400;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    scroll-behavior: smooth;
  }

  header {
    background: #1a1a1a;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }

  header h1 {
    font-family: 'Fahkwang', sans-serif;
    font-size: 1.8rem;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  nav a:hover {
    color: #ffcc70;
  }

  .hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('hero.jpg') center/cover no-repeat;
    color: white;
    padding: 6rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .hero h2 {
    font-size: 3rem;
    font-family: 'Fahkwang', sans-serif;
    animation: fadeInDown 1s ease-in-out;
  }

  .hero p {
    font-size: 1.2rem;
    color: #ddd;
    animation: fadeInUp 1s ease-in-out;
  }

  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .catalogo {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: auto;
  }

  .catalogo h2 {
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Fahkwang', sans-serif;
    margin-bottom: 2rem;
    color: #222;
  }

  .productos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .producto {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .producto:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 24px rgba(0,0,0,0.2);
  }

  .producto img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .producto-info {
    padding: 1rem;
  }

  .producto-info h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #111;
  }

  .producto-info p {
    font-size: 0.95rem;
    color: #666;
  }

  .comprar-btn {
    margin-top: 1rem;
    padding: 0.6rem 1.4rem;
    background-color: #1a1a1a;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .comprar-btn:hover {
    background-color: #ffcc70;
    color: #1a1a1a;
  }

  footer {
    background-color: #1a1a1a;
    color: white;
    padding: 3rem 2rem;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 4rem;
  }

  footer p {
    margin: 0.4rem 0;
  }
`;
document.head.appendChild(style);

// HTML dinámico
document.body.innerHTML = `
  <header>
    <h1>Angelique Leather</h1>
    <nav>
      <ul>
        <li><a href="#catalogo">Catálogo</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <h2>Elegancia y Resistencia en Cada Costura</h2>
    <p>Diseños en cuero hechos a mano con pasión y precisión</p>
  </section>

  <section id="catalogo" class="catalogo">
    <h2>Nuestro Catálogo</h2>
    <div class="productos">
      ${[
        {
          img: "chaqueta_aviador.jpg",
          alt: "Chaqueta Aviador",
          nombre: "Chaqueta Aviador",
          desc: "Cuero vacuno envejecido gris grafito"
        },
        {
          img: "blazer_femenino.jpg",
          alt: "Blazer Femenino",
          nombre: "Blazer Femenino",
          desc: "Estilo moderno, corte slim fit"
        },
        {
          img: "casaca_urbana.jpg",
          alt: "Casaca Urbana",
          nombre: "Casaca Urbana",
          desc: "Diseño minimalista en gris perla"
        }
      ]
        .map(p => `
          <div class="producto">
            <img src="${p.img}" alt="${p.alt}">
            <div class="producto-info">
              <h3>${p.nombre}</h3>
              <p>${p.desc}</p>
              <button class="comprar-btn" onclick="alert('Gracias por su interés en ${p.nombre}!')">Comprar</button>
            </div>
          </div>
        `)
        .join("")}
    </div>
  </section>

  <footer id="contacto">
    <p>&copy; 2025 Angelique Leather. Todos los derechos reservados.</p>
    <p>Email: <a href="mailto:contacto@angeliqueleather.com" style="color:#ffcc70">contacto@angeliqueleather.com</a></p>
    <p>Tel: +591 73378968</p>
  </footer>
`;
