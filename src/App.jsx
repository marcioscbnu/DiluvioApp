import { useState } from 'react';

const translations = {
  es: {
    navSynopsis: "Sinopsis",
    navScience: "Ciencia & Biblia",
    navAuthor: "El Autor",
    navReviews: "Reseñas",
    navCta: "Adquirir Libro",
    badge: "✨ Una obra revolucionaria en la intersección de la fe y la ciencia",
    heroTitle1: "Cuando el rigor científico",
    heroTitle2: "confirma la historia del Diluvio.",
    heroDesc: "Descubre cómo la astrofísica moderna, la hidrología profunda, la ringwoodita del manto terrestre y el análisis comparativo de más de 200 culturas revelan la veracidad física del mayor evento hídrico de las Escrituras.",
    btnBuy: "Comprar Ejemplar Impreso o Digital",
    btnExplore: "Explorar el Contenido",
    authorLabel: "Autor:",
    editorialLabel: "Editorial:",
    visualCardTitle: "El Mayor Cataclismo Planetario",
    visualCardDesc: "Evidencias geológicas e hídricas globales bajo el microscopio científico.",
    stat1Val: "42+", stat1Text: "Años de experiencia en ingeniería hídrica",
    stat2Val: "200+", stat2Text: "Culturas con mitos de inundación analizados",
    stat3Val: "6x", stat3Text: "Más agua en el interior de la Tierra que en la superficie",
    stat4Val: "100%", stat4Text: "Fundamentado en literatura científica de vanguardia",
    section1Sub: "Un viaje intelectual sin precedentes",
    section1Title: "¿mito religioso o cataclismo físico real?",
    card1Title: "Las Aguas de Arriba",
    card1Desc: "Explora cómo la astrofísica moderna detecta inmensos reservorios de vapor de agua cósmico miles de millones de veces superiores a nuestros océanos.",
    card2Title: "Las Aguas de Abajo",
    card2Desc: "Analiza el descubrimiento de la ringwoodita en la zona de transición del manto terrestre: un océano mineral oculto capaz de albergar agua masiva.",
    card3Title: "Memoria Cultural Global",
    card3Desc: "Un exhaustivo análisis comparativo de tradiciones en Mesopotamia, Asia, Europa, América y Oceanía que demuestran la universalidad del relato.",
    reviewsHeaderSub: "Avalado por la Academia y la Teología",
    reviewsHeaderTitle: "Lo que dicen los especialistas",
    authorSectionSub: "Conoce al Autor",
    authorTitle: "Dr. Frederico Fonseca da Silva",
    authorBio1: "Ingeniero Agrónomo por la UFPB, con especializaciones en el Instituto Volcani e Israel, Máster y Doctorado en Agronomía (UEM), Postdoctorados en la UFPR y en la Universidad Complutense de Madrid.",
    authorBio2: "Cuenta con más de 42 años de trayectoria profesional trabajando directamente con la gestión, conservación, calidad e ingeniería del agua. Catedrático e investigador en el IFPR.",
    authorBoxTitle: "¿Qué encontrarás en este libro?",
    authorList1: "Metodología Rigurosa: Más de 30 páginas de referencias científicas actualizadas.",
    authorList2: "Exégesis Filológica: Análisis profundo de los términos hebreos originales.",
    authorList3: "Tabla Comparativa Mundial: Síntesis detallada de relatos de inundación globales.",
    ctaBoxTitle: "Adquiere tu ejemplar",
    ctaBoxDesc: "Disponible en formato impreso y digital a través de los canales oficiales de la editorial.",
    ctaButton: "Contactar con Distribución Oficial",
    rights: "Todos los derechos reservados. AmoLer Editora."
  },
  en: {
    navSynopsis: "Synopsis",
    navScience: "Science & Bible",
    navAuthor: "The Author",
    navReviews: "Reviews",
    navCta: "Get the Book",
    badge: "✨ A revolutionary work at the intersection of faith and science",
    heroTitle1: "When scientific rigor",
    heroTitle2: "confirms the history of the Flood.",
    heroDesc: "Discover how modern astrophysics, deep hydrology, mantle ringwoodite, and comparative analysis of over 200 cultures reveal the physical truth of history's greatest water event.",
    btnBuy: "Buy Print or Digital Copy",
    btnExplore: "Explore Content",
    authorLabel: "Author:",
    editorialLabel: "Publisher:",
    visualCardTitle: "The Greatest Planetary Cataclysm",
    visualCardDesc: "Global geological and hydrological evidence under scientific scrutiny.",
    stat1Val: "42+", stat1Text: "Years of experience in water engineering",
    stat2Val: "200+", stat2Text: "Cultures with analyzed flood myths",
    stat3Val: "6x", stat3Text: "More water inside the Earth than on the surface",
    stat4Val: "100%", stat4Text: "Grounded in cutting-edge scientific literature",
    section1Sub: "An unprecedented intellectual journey",
    section1Title: "Religious myth or real physical cataclysm?",
    card1Title: "The Waters Above",
    card1Desc: "Explore how modern astrophysics detects immense reservoirs of cosmic water vapor billions of times larger than our oceans.",
    card2Title: "The Waters Below",
    card2Desc: "Analyze the discovery of ringwoodite in the Earth's mantle transition zone: a hidden mineral ocean capable of holding massive water volumes.",
    card3Title: "Global Cultural Memory",
    card3Desc: "An exhaustive comparative analysis of traditions across Mesopotamia, Asia, Europe, America, and Oceania proving the narrative's universality.",
    reviewsHeaderSub: "Endorsed by Academia and Theology",
    reviewsHeaderTitle: "What Specialists Say",
    authorSectionSub: "Meet the Author",
    authorTitle: "Dr. Frederico Fonseca da Silva",
    authorBio1: "Agronomic Engineer from UFPB, with specializations at the Volcani Institute in Israel, Master's and Ph.D. in Agronomy (UEM), Post-doctorates at UFPR and the Complutense University of Madrid.",
    authorBio2: "Over 42 years of professional experience working directly with water management, conservation, and engineering. Professor and researcher at IFPR.",
    authorBoxTitle: "What will you find in this book?",
    authorList1: "Rigorous Methodology: Over 30 pages of updated scientific references.",
    authorList2: "Philological Exegesis: Deep analysis of original Hebrew terms.",
    authorList3: "Global Comparative Table: Detailed synthesis of global flood accounts.",
    ctaBoxTitle: "Get Your Copy",
    ctaBoxDesc: "Available in print and digital format through official publishing channels.",
    ctaButton: "Contact Official Distribution",
    rights: "All rights reserved. AmoLer Editora."
  },
  pt: {
    navSynopsis: "Sinopse",
    navScience: "Ciência & Bíblia",
    navAuthor: "O Autor",
    navReviews: "Avaliações",
    navCta: "Adquirir Livro",
    badge: "✨ Uma obra revolucionária na interseção da fé e da ciência",
    heroTitle1: "Quando o rigor científico",
    heroTitle2: "confirma a história do Dilúvio.",
    heroDesc: "Descubra como a astrofísica moderna, a hidrologia profunda, a ringwoodita do manto terrestre e a análise comparativa de mais de 200 culturas revelam a veracidade física do maior evento hídrico das Escrituras.",
    btnBuy: "Comprar Exemplar Impresso ou Digital",
    btnExplore: "Explorar o Conteúdo",
    authorLabel: "Autor:",
    editorialLabel: "Editora:",
    visualCardTitle: "O Maior Cataclismo Planetário",
    visualCardDesc: "Evidências geológicas e hídricas globais sob o crivo científico.",
    stat1Val: "42+", stat1Text: "Anos de experiência em engenharia hídrica",
    stat2Val: "200+", stat2Text: "Culturas com mitos de inundação analisados",
    stat3Val: "6x", stat3Text: "Mais água no interior da Terra do que na superfície",
    stat4Val: "100%", stat4Text: "Fundamentado em literatura científica de ponta",
    section1Sub: "Uma jornada intelectual sem precedentes",
    section1Title: "Mito religioso ou cataclismo físico real?",
    card1Title: "As Águas de Cima",
    card1Desc: "Explore como a astrofísica moderna detecta imensos reservatórios de vapor de água cósmico bilhões de vezes superiores aos nossos oceanos.",
    card2Title: "As Águas de Baixo",
    card2Desc: "Analise a descoberta da ringwoodita na zona de transição do manto terrestre: um oceano mineral oculto capaz de abrigar água em volumes massivos.",
    card3Title: "Memória Cultural Global",
    card3Desc: "Uma análise comparativa exaustiva de tradições na Mesopotâmia, Ásia, Europa, América e Oceania que demonstram a universalidade do relato.",
    reviewsHeaderSub: "Avalizado pela Academia e Teologia",
    reviewsHeaderTitle: "O que dizem os especialistas",
    authorSectionSub: "Conheça o Autor",
    authorTitle: "Dr. Frederico Fonseca da Silva",
    authorBio1: "Engenheiro Agrônomo pela UFPB, com especializações no Instituto Volcani e Israel, Mestrado e Doutorado em Agronomia (UEM), Pós-doutorados na UFPR e na Universidade Complutense de Madrid.",
    authorBio2: "Possui mais de 42 anos de trajetória profissional atuando diretamente com gestão, conservação, qualidade e engenharia hídrica. Professor e pesquisador no IFPR.",
    authorBoxTitle: "O que você encontrará neste livro?",
    authorList1: "Metodologia Rigorosa: Mais de 30 páginas de referências científicas atualizadas.",
    authorList2: "Exegese Filológica: Análise profunda dos termos hebraicos originais.",
    authorList3: "Tabela Comparativa Mundial: Síntese detalhada de relatos de inundação globais.",
    ctaBoxTitle: "Adquira seu exemplar",
    ctaBoxDesc: "Disponível em formato impresso e digital através dos canais oficiais da editora.",
    ctaButton: "Contatar Distribuição Oficial",
    rights: "Todos os direitos reservados. AmoLer Editora."
  },
  it: {
    navSynopsis: "Sinossi",
    navScience: "Scienza & Bibbia",
    navAuthor: "L'Autore",
    navReviews: "Recensioni",
    navCta: "Acquista Libro",
    badge: "✨ Un'opera rivoluzionaria all'intersezione tra fede e scienza",
    heroTitle1: "Quando il rigore scientifico",
    heroTitle2: "conferma la storia del Diluvio.",
    heroDesc: "Scopri come l'astrofisica moderna, l'idrologia profonda, la ringwoodite del mantello terrestre e l'analisi comparativa di oltre 200 culture rivelano la veridicità fisica del più grande evento idrico delle Scritture.",
    btnBuy: "Acquista Copia Cartacea o Digitale",
    btnExplore: "Esplora Contenuti",
    authorLabel: "Autore:",
    editorialLabel: "Editore:",
    visualCardTitle: "Il Più Grande Cataclisma Planetario",
    visualCardDesc: "Prove geologiche e idriche globali sotto il vaglio scientifico.",
    stat1Val: "42+", stat1Text: "Anni di esperienza in ingegneria idrica",
    stat2Val: "200+", stat2Text: "Culture con miti di inondazione analizzati",
    stat3Val: "6x", stat3Text: "Più acqua all'interno della Terra che in superficie",
    stat4Val: "100%", stat4Text: "Basato su letteratura scientifica all'avanguardia",
    section1Sub: "Un viaggio intellettuale senza precedenti",
    section1Title: "Mito religioso o reale cataclisma fisico?",
    card1Title: "Le Acque di Sopra",
    card1Desc: "Esplora come l'astrofisica moderna rilevi immensi serbatoi di vapor d'acqua cosmico miliardi di volte superiori ai nostri oceani.",
    card2Title: "Le Acque di Sotto",
    card2Desc: "Analizza la scoperta della ringwoodite nella zona di transizione del mantello terrestre: un oceano minerale nascosto.",
    card3Title: "Memoria Culturale Globale",
    card3Desc: "Un'analisi comparativa esaustiva delle tradizioni in Mesopotamia, Asia, Europa, America e Oceania.",
    reviewsHeaderSub: "Approvato da Accademia e Teologia",
    reviewsHeaderTitle: "Cosa dicono gli specialisti",
    authorSectionSub: "Conosci l'Autore",
    authorTitle: "Dr. Frederico Fonseca da Silva",
    authorBio1: "Ingegnere Agronomo presso l'UFPB, con specializzazioni presso l'Istituto Volcani in Israele, Master e Dottorato in Agronomia (UEM), Post-dottorati presso UFPR e l'Università Complutense di Madrid.",
    authorBio2: "Oltre 42 anni di esperienza professionale nella gestione e ingegneria delle risorse idriche. Professore e ricercatore presso l'IFPR.",
    authorBoxTitle: "Cosa troverai in questo libro?",
    authorList1: "Metodologia Rigorosa: Oltre 30 pagine di riferimenti scientifici aggiornati.",
    authorList2: "Esegesi Filologica: Analisi approfondita dei termini ebraici originali.",
    authorList3: "Tabella Comparativa Mondiale: Sintesi dettagliata dei racconti di inondazione.",
    ctaBoxTitle: "Acquista la tua copia",
    ctaBoxDesc: "Disponibile in formato cartaceo e digitale tramite i canali ufficiali.",
    ctaButton: "Contatta la Distribuzione Ufficiale",
    rights: "Tutti i diritti riservati. AmoLer Editora."
  },
  de: {
    navSynopsis: "Inhaltsangabe",
    navScience: "Wissenschaft & Bibel",
    navAuthor: "Der Autor",
    navReviews: "Rezensionen",
    navCta: "Buch Erwerben",
    badge: "✨ Ein revolutionäres Werk an der Schnittstelle von Glaube und Wissenschaft",
    heroTitle1: "Wenn wissenschaftliche Rigorosität",
    heroTitle2: "die Geschichte der Sintflut bestätigt.",
    heroDesc: "Entdecken Sie, wie moderne Astrophysik, tiefe Hydrologie, Ringwoodit im Erdmantel und die vergleichende Analyse von über 200 Kulturen die physikalische Wahrheit des größten Wasserereignisses enthüllen.",
    btnBuy: "Gedruckte oder digitale Kopie kaufen",
    btnExplore: "Inhalt erkunden",
    authorLabel: "Autor:",
    editorialLabel: "Verlag:",
    visualCardTitle: "Das größte planetarische Kataplysmus",
    visualCardDesc: "Globale geologische und hydrologische Beweise unter wissenschaftlicher Lupe.",
    stat1Val: "42+", stat1Text: "Jahre Erfahrung in der Wassertechnik",
    stat2Val: "200+", stat2Text: "Kulturen mit analysierten Flutmythen",
    stat3Val: "6x", stat3Text: "Mehr Wasser im Erdinneren als an der Oberfläche",
    stat4Val: "100%", stat4Text: "Basierend auf modernster wissenschaftlicher Literatur",
    section1Sub: "Eine beispiellose intellektuelle Reise",
    section1Title: "Religiöser Mythos oder reale physikalische Katastrophe?",
    card1Title: "Die Gewässer oben",
    card1Desc: "Erforschen Sie, wie die moderne Astrophysik riesige Reservoirs kosmischen Wasserdampfs entdeckt.",
    card2Title: "Die Gewässer unten",
    card2Desc: "Analysieren Sie die Entdeckung von Ringwoodit in der Übergangszone des Erdmantels: ein versteckter mineralischer Ozean.",
    card3Title: "Globales kulturelles Gedächtnis",
    card3Desc: "Eine umfassende vergleichende Analyse von Traditionen in Mesopotamien, Asien, Europa, Amerika und Ozeanien.",
    reviewsHeaderSub: "Unterstützt von Wissenschaft und Theologie",
    reviewsHeaderTitle: "Was Spezialisten sagen",
    authorSectionSub: "Über den Autor",
    authorTitle: "Dr. Frederico Fonseca da Silva",
    authorBio1: "Agraringenieur der UFPB, Spezialisierungen am Volcani-Institut in Israel, Master und Promotion in Agronomie (UEM), Postdoktorate an der UFPR und der Complutense-Universität Madrid.",
    authorBio2: "Über 42 Jahre Berufserfahrung im Bereich Wasserressourcenmanagement und -technik. Professor und Forscher am IFPR.",
    authorBoxTitle: "Was finden Sie in diesem Buch?",
    authorList1: "Strenges Methodik: Über 30 Seiten aktualisierter wissenschaftlicher Referenzen.",
    authorList2: "Philologische Exegese: Detaillierte Analyse der hebräischen Originalbegriffe.",
    authorList3: "Globale Vergleichstabelle: Detaillierte Synthese weltweiter Flutberichte.",
    ctaBoxTitle: "Sichern Sie sich Ihr Exemplar",
    ctaBoxDesc: "Erhältlich als Print- und Digitalausgabe über die offiziellen Kanäle.",
    ctaButton: "Offiziellen Vertrieb kontaktieren",
    rights: "Alle Rechte vorbehalten. AmoLer Editora."
  }
};

export default function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  return (
    <div className="app-container">
      
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-brand">
          <div className="brand-icon">💧</div>
          <div className="brand-text">
            <h1>Más Allá Del Agua</h1>
            <span>AmoLer Editora</span>
          </div>
        </div>
        
        <ul className="nav-links">
          <li><a href="#sobre">{t.navSynopsis}</a></li>
          <li><a href="#ciencia">{t.navScience}</a></li>
          <li><a href="#autor">{t.navAuthor}</a></li>
          <li><a href="#criticas">{t.navReviews}</a></li>
        </ul>

        <div className="nav-right">
          {/* SELETOR DE IDIOMAS */}
          <select 
            className="lang-selector" 
            value={lang} 
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="es">🇪🇸 Español</option>
            <option value="en">🇬🇧 English</option>
            <option value="pt">🇧🇷 Português</option>
            <option value="it">🇮🇹 Italiano</option>
            <option value="de">🇩🇪 Deutsch</option>
          </select>

          <a href="#comprar" className="btn-nav">{t.navCta}</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            {t.badge}
          </div>
          
          <h2>
            {t.heroTitle1} <br />
            <span>{t.heroTitle2}</span>
          </h2>

          <p>{t.heroDesc}</p>

          <div className="hero-buttons">
            <a href="#comprar" className="btn-primary">{t.btnBuy}</a>
            <a href="#sobre" className="btn-secondary">{t.btnExplore}</a>
          </div>

          <div className="hero-meta">
            <div><strong>{t.authorLabel}</strong> Dr. Frederico Fonseca da Silva[cite: 1]</div>
            <div><strong>{t.editorialLabel}</strong> AmoLer (2026)[cite: 1]</div>
            <div><strong>ISBN:</strong> 978-85-7172-265-1[cite: 1]</div>
          </div>
        </div>

        {/* IMAGEM IMPACTANTE DO DILÚVIO (BANNER VISUAL) */}
        <div>
          <div className="flood-visual-card">
            <div className="flood-visual-badge">Evidencia Científica</div>
            <div>
              <h3>{t.visualCardTitle}</h3>
              <p>{t.visualCardDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>{t.stat1Val}</h3>
            <p>{t.stat1Text}[cite: 1]</p>
          </div>
          <div className="stat-item">
            <h3>{t.stat2Val}</h3>
            <p>{t.stat2Text}</p>
          </div>
          <div className="stat-item">
            <h3>{t.stat3Val}</h3>
            <p>{t.stat3Text}[cite: 1]</p>
          </div>
          <div className="stat-item">
            <h3>{t.stat4Val}</h3>
            <p>{t.stat4Text}</p>
          </div>
        </div>
      </section>

      {/* SINOPSIS */}
      <section id="sobre" className="section-container">
        <div className="section-header">
          <h4>{t.section1Sub}</h4>
          <h3>{t.section1Title}</h3>
        </div>

        <div className="grid-3">
          <div className="info-card">
            <div className="card-icon">⚛️</div>
            <h4>{t.card1Title}</h4>
            <p>{t.card1Desc}[cite: 1]</p>
          </div>

          <div className="info-card">
            <div className="card-icon">🌍</div>
            <h4>{t.card2Title}</h4>
            <p>{t.card2Desc}[cite: 1]</p>
          </div>

          <div className="info-card">
            <div className="card-icon">🧭</div>
            <h4>{t.card3Title}</h4>
            <p>{t.card3Desc}[cite: 1]</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="criticas" className="testimonials-section">
        <div className="section-header">
          <h4>{t.reviewsHeaderSub}</h4>
          <h3>{t.reviewsHeaderTitle}</h3>
        </div>

        <div className="grid-2">
          <div className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>"Lo que vemos es a un científico buscando caminos racionales en paralelo con los actos de Dios. Quienes son cristianos o judíos no se decepcionarán."</p>
            <div className="testimonial-author">
              <strong>Dr. Marcelo Hermes Lima</strong>
              <span>Profesor de Bioquímica en la Universidad de Brasilia (UnB)[cite: 1]</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>"El valor del libro radica en este valiente intento de poner en diálogo la Escritura y la investigación científica con rigor técnico y metodológico."</p>
            <div className="testimonial-author">
              <strong>Dr. Isaias Lobão Pereira Junior</strong>
              <span>Teólogo, Historiador y Profesor/Investigador (IFTO)[cite: 1]</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>"Ofrece al lector un material sólido, referenciado y metodológicamente transparente, capaz de dar lugar a nuevas investigaciones en las fronteras de la ciencia."</p>
            <div className="testimonial-author">
              <strong>Dr. Pedro Zany Caldeira</strong>
              <span>Profesor Adjunto en la Universidad Federal de Triângulo Mineiro (UFTM)[cite: 1]</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>"La ciencia confirma los datos. La Biblia da el significado. Y entre ambos está la posibilidad de entender el mayor evento del agua en las Escrituras."</p>
            <div className="testimonial-author">
              <strong>Rev. Prof. Francisco A. C. Pinho</strong>
              <span>Obispo anglicano, antropólogo y científico de la religión[cite: 1]</span>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section id="autor" className="section-container">
        <div className="author-grid">
          <div className="author-info">
            <h4 style={{ color: '#06b6d4', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}>{t.authorSectionSub}[cite: 1]</h4>
            <h3>{t.authorTitle}</h3>
            <p>{t.authorBio1}[cite: 1]</p>
            <p>{t.authorBio2}[cite: 1]</p>
          </div>
          
          <div className="author-box">
            <h4>{t.authorBoxTitle}</h4>
            <ul>
              <li><span>1.</span> <strong>{t.authorList1}</strong>[cite: 1]</li>
              <li><span>2.</span> <strong>{t.authorList2}</strong>[cite: 1]</li>
              <li><span>3.</span> <strong>{t.authorList3}</strong>[cite: 1]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="comprar" className="cta-section">
        <div className="cta-box">
          <h3>{t.ctaBoxTitle}</h3>
          <p>{t.ctaBoxDesc}[cite: 1]</p>
          <div style={{ background: '#07090e', padding: '15px', borderRadius: '8px', marginBottom: '24px', fontSize: '0.85rem', color: '#94a3b8' }}>
            ISBN: <strong style={{ color: '#06b6d4' }}>978-85-7172-265-1</strong> • AmoLer Editora[cite: 1]
          </div>
          <a href="#comprar" className="btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
            {t.ctaButton}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <span>© 2026 Frederico Fonseca da Silva. {t.rights}[cite: 1]</span>
        </div>
        <div className="footer-links">
          <a href="#sobre">{t.navSynopsis}</a>
          <a href="#ciencia">{t.navScience}</a>
          <a href="#autor">{t.navAuthor}</a>
        </div>
      </footer>

    </div>
  );
}