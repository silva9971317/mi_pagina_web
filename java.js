    const style = document.createElement('style');
    style.textContent = `
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Montserrat', sans-serif;
        background-color: #f2f2f2;
        color: #333;
      }
      header {
        background-color: #2e2e2e;
        color: white;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      header h1 {
        font-family: 'Fahkwang', sans-serif;
        font-size: 2rem;
      }
      nav ul {
        list-style: none;
        display: flex;
        gap: 1rem;
      }
      nav a {
        color: white;
        text-decoration: none;
        font-weight: 500;
      }
      .hero {
        background: linear-gradient(rgba(46,46,46,0.6), rgba(46,46,46,0.6)), url('hero.jpg') center/cover no-repeat;
        color: white;
        padding: 5rem 2rem;
        text-align: center;
      }
      .hero h2 {
        font-size: 3rem;
        font-family: 'Fahkwang', sans-serif;
      }
      .catalogo {
        padding: 3rem 2rem;
        max-width: 1200px;
        margin: auto;
      }
      .catalogo h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
        font-family: 'Fahkwang', sans-serif;
        text-align: center;
      }
      .productos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }
      .producto {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s;
      }
      .producto:hover {
        transform: scale(1.02);
      }
      .producto img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
      .producto-info {
        padding: 1rem;
      }
      .producto-info h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
      .producto-info p {
        color: #777;
        font-size: 0.9rem;
      }
      .comprar-btn {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.6rem 1.2rem;
        background-color: #444;
        color: white;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.3s;
      }
      .comprar-btn:hover {
        background-color: #2e2e2e;
      }
      footer {
        background-color: #2e2e2e;
        color: white;
        text-align: center;
        padding: 2rem;
        margin-top: 3rem;
      }
    `;
    document.head.appendChild(style);

    // Contenido HTML dinámico
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
        <p>Diseños en cuero hechos a mano</p>
      </section>

      <section id="catalogo" class="catalogo">
        <h2>Catálogo Visual</h2>
        <div class="productos">
          ${[
            {
              img: "imagenes/chaqueta_aviador.jpg",
              alt: "Chaqueta de cuero 1",
              nombre: "Chaqueta Aviador",
              desc: "Cuero vacuno envejecido gris grafito"
            },
            {
              img: "imagenes/blazer_femenino.jpg",
              alt: "Chaqueta de cuero 2",
              nombre: "Blazer Femenino",
              desc: "Estilo moderno, corte slim fit"
            },
            {
              img: "imagenes/casaca_urbana.jpg",
              alt: "Chaqueta de cuero 3",
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
                  <button class="comprar-btn" onclick="location.reload()">Comprar</button>
                </div>
              </div>
            `)
            .join("")}
        </div>
      </section>

      <footer id="contacto">
        <p>&copy; 2025 Angelique Leather. Todos los derechos reservados.</p>
        <p>Email: contacto@angeliqueleather.com | Tel: +591 73378968</p>
      </footer>
    `;