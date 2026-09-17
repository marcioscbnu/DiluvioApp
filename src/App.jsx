import { useState } from 'react';
import './index.css';
import logoAmoler from './assets/logo-amoler.png';
import capaLivro from './assets/capa-livro.jpg';
import marImg from './assets/mar.png';
import grandCanyonImg from './assets/grand-canyon.jpg';
import fossilHimalayaImg from './assets/fossil-himalaya.jpg';
import megafluxosImg from './assets/megafluxos.jpg';
import gilgameshImg from './assets/gilgamesh.png';
import atrahasisImg from './assets/Atrahasis.png';
import sedimentosImg from './assets/sedimentos.jpg';
import seaImg from './assets/sea.png';
import pedrasPessoasImg from './assets/pedras-pessoas.png';
import caldosImg from './assets/caldos.png';
import falaciaImg from './assets/falacia.png';
import leituraAcademicaImg from './assets/leitura-academica.png';
import cienciaBibliaImg from './assets/ciencia-biblia.jpg';

// Importação das bandeiras (.ico)
import flagPt from './assets/flag-pt.ico';
import flagEs from './assets/flag-es.ico';
import flagEn from './assets/flag-en.ico';
import flagIt from './assets/flag-it.ico';
import flagDe from './assets/flag-de.ico';

const translations = {
  pt: {
    bookTitle: "Além Da Água",
    navSynopsis: "Sinopse",
    navScience: "Ciência x Bíblia",
    navAuthor: "O Autor",
    navReviews: "Avaliações",
    navCta: "Adquirir Livro",
    badge: "✨ Uma obra revolucionária na interseção da fé e da ciência",
    heroTitle: "E se a ciência mais avançada em geociências e astrofísica estiver, na verdade, validando o relato histórico do Dilúvio descrito há milênios na Bíblia?",
    heroDesc: "Descubra como a pesquisa contemporânea revela a veracidade física do maior evento hídrico da história humana por meio de dados empíricos.",
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
    synopsisP1: "Durante séculos, o relato do Dilúvio universal foi relegado à alegoria ou combatido pelo ceticismo moderno. Este livro quebra o molde tradicional ao conectar dados científicos rigorosos com as Escrituras.",
    synopsisP2: "Uma obra essencial que analisa reservatórios colossais de vapor cósmico e oceanos minerais profundos no manto terrestre.",
    card1Title: "As Águas de Cima",
    card1Desc: "Explore como a astrofísica moderna detecta imensos reservatórios de vapor de água cósmico bilhões de vezes superiores aos nossos oceanos.",
    card2Title: "As Águas de Baixo",
    card2Desc: "Analise a descoberta da ringwoodita na zona de transição do manto terrestre: um oceano mineral oculto capaz de abrigar volumes massivos de água.",
    card3Title: "Memória Cultural Global",
    card3Desc: "Uma análise comparativa exaustiva de tradições na Mesopotâmia, Ásia, Europa, América e Oceania que demonstram a universalidade do relato.",

    scienceTitle: "Ciência x Bíblia",
    scienceSub: "Análise Multidisciplinar Rigorosa",
    mod1Badge: "Módulo 1",
    mod1Title: "Geologia e Hidrologia",
    mod1C1: "Análise de estratos sedimentares contínuos em escala continental, sem sinais de erosão prolongada entre as camadas.",
    mod1C2: "Fósseis marinhos e conchas fossilizadas encontrados em altitudes elevadas nas maiores cordilheiras do mundo.",
    mod1C3: "Simulações de megafluxos de água baseadas em geomorfologia que explicam a escultura da topografia moderna.",
    mod1Card1: "Estratos Sedimentares", mod1Card2: "Fósseis em Cordilheiras", mod1Card3: "Megafluxos Hídricos",

    mod2Badge: "Módulo 2",
    mod2Title: "Arqueologia e Textos Antigos",
    mod2C1: "Estudo comparativo aprofundado do relato bíblico com o Épico de Gilgamesh e o Atrahasis.",
    mod2C2: "Análise crítica de tabuletas cuneiformes sumérias e sua concordância com o eixo cronológico.",
    mod2C3: "Avaliação de achados de escavações estratigráficas recentes no Oriente Médio.",
    mod2Card1: "Fragmento contendo a narrativa do dilúvio com Utnapishtim.", 
    mod2Card2: "Tabuleta relacionada à história babilônica do dilúvio", 
    mod2Card3Html: 'A imagem apresenta o comparativo entre Ur e sítios próximos como Eridu, onde o depósito de lodo esteve ausente. Escavações feitas por <a href="https://www.youtube.com/watch?v=gSXJK63uc6I&t=85s" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-primary); text-decoration: underline;">C. Leonard Woolley</a>.',

    mod3Badge: "Módulo 3",
    mod3Title: "Antropologia e Sociologia",
    mod3C1: "Exame cruzado de mais de 200 mitos de dilúvio preservados em civilizações distintas ao redor do globo.",
    mod3C2: "Investigação de tradições orais milenares em culturas asiáticas, nativas americanas e oceânicas.",
    mod3C3: "Dados genéticos modernos que apontam gargalos populacionais profundos na história humana.",
    mod3Card1Html: '<a href="https://youtube.com/shorts/27pI5zU8cz0?si=hnH3tAHun96azCGZ" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-primary); text-decoration: underline;">Mitos</a> sobre dilúvios aparecem na Mesopotâmia, Grécia, Índia, Mesoamérica e em outros lugares. Uma análise comparativa de fontes primárias, padrões e o que eles revelam.', 
    mod3Card2Text: "Aborígenes australianos contam que ilhas hoje submersas eram colinas onde caçavam, e que o mar avançou devagar e de forma implacável. A batimetria do pós-último máximo glacial (18.000–7.000 a.P.) prova a inundação de mais de 1,5 milhão de km² de plataformas costeiras.",
    mod3Card3Text: "O DNA Humano Responde (O Fim do Mito do Funil de 4.500 Anos) Árvore de Haplogrupos do Cromossomo Y (Padrão Global / Filogenia de Alta Resolução)",

    mod4Badge: "Módulo 4",
    mod4Title: "Teologia e Síntese Multidisciplinar",
    mod4C1: "Integração final entre as geociências contemporâneas e a exegese bíblica filológica.",
    mod4C2: "Demonstração sólida da confiabilidade histórica do texto sagrado frente aos questionamentos.",
    mod4C3: "Síntese acessível e transformadora, dialogando de igual para igual com crentes e céticos.",
    mod4Card1: "Exegese Bíblica", mod4Card2: "Geociências Integradas", mod4Card3: "Síntese Histórica",

    reviewsHeaderSub: "Avalizado pela Academia e Teologia",
    reviewsHeaderTitle: "O que dizem os especialistas",
    review1Text: "O que vemos é um cientista buscando caminhos racionais em paralelo com os atos de Deus. Quem é cristão ou judeu não se decepcionará ao observar diferentes ângulos do evento bíblico com rigor técnico.",
    review1Author: "Dr. Marcelo Hermes Lima",
    review1Role: "Professor de Bioquímica na Universidade de Brasília (UnB)",
    review2Text: "O valor do livro reside nesta tentativa corajosa de colocar a Escritura e a pesquisa científica em diálogo, sem submeter a Bíblia ao tribunal instável de modas intelectuais.",
    review2Author: "Dr. Isaias Lobão Pereira Junior",
    review2Role: "Teólogo, Historiador e Professor/Pesquisador (IFTO)",
    review3Text: "Oferece ao leitor um material sólido, referenciado e metodologicamente transparente, capaz de dar margem a novas pesquisas e revisar os grandes temas bíblicos.",
    review3Author: "Dr. Pedro Zany Caldeira",
    review3Role: "Professor Adjunto na Universidade Federal do Triângulo Mineiro (UFTM)",
    review4Text: "A ciência confirma os dados. A Bíblia dá o significado. E entre ambas está a possibilidade de entender o maior evento da água nas Escrituras sem renunciar à razão.",
    review4Author: "Rev. Prof. Francisco A. C. Pinho",
    review4Role: "Bispo anglicano, antropólogo e cientista da religião",
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
    rights: "Todos os direitos reservados."
  },
  es: {
    bookTitle: "Más Allá Del Agua",
    navSynopsis: "Sinopsis",
    navScience: "Ciencia x Biblia",
    navAuthor: "El Autor",
    navReviews: "Reseñas",
    navCta: "Adquirir Libro",
    badge: "✨ Una obra revolucionaria en la intersección de la fe y la ciencia",
    heroTitle: "¿Y si la ciencia más avanzada en geociências y astrofísica estuviera, en realidad, validando el relato histórico del Diluvio descrito hace milenios en la Biblia?",
    heroDesc: "Descubre cómo la investigación contemporánea revela la veracidad física del mayor evento hídrico de la historia humana mediante datos empíricos.",
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
    synopsisP1: "Durante siglos, el relato del Diluvio universal ha sido confinado al terreno de la alegoría o combatido por el escepticismo moderno. Este libro rompe el molde tradicional conectando datos científicos rigurosos con las Escrituras.",
    synopsisP2: "Una obra indispensable que analiza reservorios colosales de vapor cósmico y océanos minerales profundos en el manto terrestre.",
    card1Title: "Las Aguas de Arriba",
    card1Desc: "Explora cómo la astrofísica moderna detecta inmensos reservorios de vapor de agua cósmico miles de millones de veces superiores a nuestros océanos.",
    card2Title: "Las Aguas de Abajo",
    card2Desc: "Analiza el descubrimiento de la ringwoodita en la zona de transición del manto terrestre: un océano mineral oculto capaz de albergar agua masiva.",
    card3Title: "Memoria Cultural Global",
    card3Desc: "Un exhaustivo análisis comparativo de tradiciones en Mesopotamia, Asia, Europa, América y Oceanía que demuestran la universalidad del relato.",
    
    scienceTitle: "Ciencia x Biblia",
    scienceSub: "Análisis Multidisciplinar Rigoroso",
    mod1Badge: "Módulo 1",
    mod1Title: "Geología e Hidrología",
    mod1C1: "Análisis exhaustivo de estratos sedimentares contínuos en escala continental sin evidencias de erosión prolongada.",
    mod1C2: "Estudio de fósiles marinos y conchas encontrados en la cima de grandes cadenas montañosas del planeta.",
    mod1C3: "Simulaciones geomorfológicas avanzadas de megafluxos hídricos que explican la topografía actual.",
    mod1Card1: "Estratos Continentales", mod1Card2: "Fósiles en Montañas", mod1Card3: "Megafluxos Hídricos",

    mod2Badge: "Módulo 2",
    mod2Title: "Arqueología y Textos Antigos",
    mod2C1: "Estudio comparativo detallado entre el relato bíblico, el Épico de Gilgamesh y el Atrahasis.",
    mod2C2: "Análisis crítico de tabuletas cuneiformes sumerias y su concordancia cronológica.",
    mod2C3: "Evaluación de hallazgos recientes de excavaciones estratigráficas en el Oriente Medio.",
    mod2Card1: "Fragmento contendo a narrativa do dilúvio com Utnapishtim.", 
    mod2Card2: "Tabuleta relacionada à história babilônica do dilúvio", 
    mod2Card3Html: 'A imagem apresenta o comparativo entre Ur e sítios próximos como Eridu, onde o depósito de lodo esteve ausente. Escavações feitas por <a href="https://www.youtube.com/watch?v=gSXJK63uc6I&t=85s" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-primary); text-decoration: underline;">C. Leonard Woolley</a>.',

    mod3Badge: "Módulo 3",
    mod3Title: "Antropologia y Sociología",
    mod3C1: "Examen cruzado de más de 200 mitos de diluvio en civilizaciones aisladas de todo el mundo.",
    mod3C2: "Evaluación de tradiciones orales en culturas asiáticas, nativas americanas y oceánicas.",
    mod3C3: "Datos genéticos modernos sobre cuellos de botella poblacionales en la historia humana.",
    mod3Card1Html: '<a href="https://youtube.com/shorts/27pI5zU8cz0?si=hnH3tAHun96azCGZ" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-primary); text-decoration: underline;">Mitos</a> sobre dilúvios aparecem na Mesopotâmia, Grécia, Índia, Mesoamérica e em outros lugares. Uma análise comparativa de fontes primárias, padrões e o que eles revelam.', 
    mod3Card2Text: "Aborígenes australianos contam que ilhas hoje submersas eram colinas onde caçavam, e que o mar avançou devagar e de forma implacável. A batimetria do pós-último máximo glacial (18.000–7.000 a.P.) prova a inundação de mais de 1,5 milhão de km² de plataformas costeiras.", 
    mod3Card3Text: "O DNA Humano Responde (O Fim do Mito do Funil de 4.500 Anos) Árvore de Haplogrupos do Cromossomo Y (Padrão Global / Filogenia de Alta Resolução)",

    mod4Badge: "Module 4",
    mod4Title: "Teología y Síntese Multidisciplinar",
    mod4C1: "Integración final entre las ciencias de la Tierra y la exegesis filológica rigurosa.",
    mod4C2: "Demostración de la confiabilidad histórica del texto sagrado frente al escepticismo.",
    mod4C3: "Síntesis accesible y profunda tanto para lectores creyentes como para investigadores escépticos.",
    mod4Card1: "Exégesis Bíblica", mod4Card2: "Geociencias Unidas", mod4Card3: "Síntesis Histórica",

    reviewsHeaderSub: "Avalado por la Academia y la Teología",
    reviewsHeaderTitle: "Lo que dicen los especialistas",
    review1Text: "Lo que vemos es a un científico buscando caminos racionales en paralelo con los actos de Dios. Quienes son cristianos o judíos no se decepcionarán al observar diferentes ángulos del evento bíblico con rigor técnico.",
    review1Author: "Dr. Marcelo Hermes Lima",
    review1Role: "Profesor de Bioquímica en la Universidad de Brasilia (UnB)",
    review2Text: "El valor del libro radica en este valiente intento de poner en diálogo la Escritura y la investigación científica, sin someter la Biblia al tribunal inestable de modas intelectuales.",
    review2Author: "Dr. Isaias Lobão Pereira Junior",
    review2Role: "Teólogo, Historiador y Profesor/Investigador (IFTO)",
    review3Text: "Ofrece al lector un material sólido, referenciado y metodologicamente transparente, capaz de dar lugar a nuevas investigaciones y de revisar los grandes temas bíblicos.",
    review3Author: "Dr. Pedro Zany Caldeira",
    review3Role: "Profesor Adjunto en la Universidad Federal de Triângulo Mineiro (UFTM)",
    review4Text: "La ciencia confirma los datos. La Biblia da el significado. Y entre ambos está la posibilidad de entender el mayor evento del agua en las Escrituras sin renunciar a la razón.",
    review4Author: "Rev. Prof. Francisco A. C. Pinho",
    review4Role: "Obispo anglicano, antropólogo y científico de la religión",
    authorSectionSub: "Conoce al Autor",
    authorTitle: "Dr. Frederico Fonseca da Silva",
    authorBio1: "Ingeniero Agrónomo por la UFPB, con especializaciones en el Instituto Volcani e Israel, Máster y Doctorado en Agronomia (UEM), Postdoctorados en la UFPR y en la Universidad Complutense de Madrid.",
    authorBio2: "Cuenta con más de 42 años de trayectoria profesional trabajando directamente con la gestión, conservación, calidad e ingeniería del agua. Catedrático e investigador en el IFPR.",
    authorBoxTitle: "¿Qué encontrarás en este libro?",
    authorList1: "Metodologia Rigorosa: Más de 30 páginas de referencias científicas actualizadas.",
    authorList2: "Exégesis Filológica: Análisis profundo de los términos hebreos originales.",
    authorList3: "Tabla Comparativa Mundial: Síntesis detallada de relatos de inundación globales.",
    ctaBoxTitle: "Adquiere tu ejemplar",
    ctaBoxDesc: "Disponible en formato impreso y digital a través de los canales oficiales de la editorial.",
    ctaButton: "Contactar con Distribución Oficial",
    rights: "Todos los derechos reservados."
  },
  en: {
    bookTitle: "Beyond The Water",
    navSynopsis: "Synopsis",
    navScience: "Science x Bible",
    navAuthor: "The Author",
    navReviews: "Reviews",
    navCta: "Get the Book",
    badge: "✨ A revolutionary work at the intersection of faith and science",
    heroTitle: "What if cutting-edge geosciences and astrophysics were actually validating the historical account of the Flood described millennia ago in the Bible?",
    heroDesc: "Discover how contemporary research reveals the physical truth of history's greatest water event through empirical data.",
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
    synopsisP1: "For centuries, the account of the universal Flood has been relegated to allegory or challenged by modern skepticism. This book breaks the traditional mold by connecting rigorous scientific data with Scripture.",
    synopsisP2: "An essential work analyzing colossal cosmic vapor reservoirs and deep mineral oceans within the Earth's mantle.",
    card1Title: "The Waters Above",
    card1Desc: "Explore how modern astrophysics detects immense reservoirs of cosmic water vapor billions of times larger than our oceans.",
    card2Title: "The Waters Below",
    card2Desc: "Analyze the discovery of ringwoodite in the Earth's mantle transition zone: a hidden mineral ocean capable of holding massive water volumes.",
    card3Title: "Global Cultural Memory",
    card3Desc: "An exhaustive comparative analysis of traditions across Mesopotamia, Asia, Europe, America, and Oceania proving the narrative's universality.",
    
    scienceTitle: "Science x Bible",
    scienceSub: "Rigorous Multidisciplinary Analysis",
    mod1Badge: "Module 1",
    mod1Title: "Geology and Hydrology",
    mod1C1: "Exhaustive analysis of continuous sedimentary strata on a continental scale without prolonged erosion.",
    mod1C2: "Study of marine fossils and seashells found atop major mountain ranges worldwide.",
    mod1C3: "Advanced geomorphological simulations of mega-water flows explaining current topography.",
    mod1Card1: "Continental Strata", mod1Card2: "Mountain Fossils", mod1Card3: "Water Mega-flows",

    mod2Badge: "Module 2",
    mod2Title: "Archaeology and Ancient Texts",
    mod2C1: "Detailed comparative study between the biblical account, the Epic of Gilgamesh, and Atrahasis.",
    mod2C2: "Critical analysis of Sumerian cuneiform tablets and their chronological alignment.",
    mod2C3: "Evaluation of recent stratigraphic excavation findings in the Middle East.",
    mod2Card1: "Fragmento contendo a narrativa do dilúvio com Utnapishtim.", 
    mod2Card2: "Tabuleta relacionada à história babilônica do dilúvio", 
    mod2Card3Html: 'A imagem apresenta o comparativo entre Ur e sítios próximos como Eridu, onde o depósito de lodo esteve ausente. Escavações feitas por <a href="https://www.youtube.com/watch?v=gSXJK63uc6I&t=85s" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-primary); text-decoration: underline;">C. Leonard Woolley</a>.',

    mod3Badge: "Module 3",
    mod3Title: "Anthropology and Sociology",
    mod3C1: "Cross-examination of over 200 flood myths in isolated civilizations worldwide.",
    mod3C2: "Evaluation of oral traditions across Asian, Native American, and Oceanic cultures.",
    mod3C3: "Modern genetic data regarding population bottlenecks in human history.",
    mod3Card1Html: '<a href="https://youtube.com/shorts/27pI5zU8cz0?si=hnH3tAHun96azCGZ" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-primary); text-decoration: underline;">Mitos</a> sobre dilúvios aparecem na Mesopotâmia, Grécia, Índia, Mesoamérica e em outros lugares. Uma análise comparativa de fontes primárias, padrões e o que eles revelam.', 
    mod3Card2Text: "Aborígenes australianos contam que ilhas hoje submersas eram colinas onde caçavam, e que o mar avançou devagar e de forma implacável. A batimetria do pós-último máximo glacial (18.000–7.000 a.P.) prova a inundação de mais de 1,5 milhão de km² de plataformas costeiras.", 
    mod3Card3Text: "O DNA Humano Responde (O Fim do Mito do Funil de 4.500 Anos) Árvore de Haplogrupos do Cromossomo Y (Padrão Global / Filogenia de Alta Resolução)",

    mod4Badge: "Module 4",
    mod4Title: "Theology and Multidisciplinary Synthesis",
    mod4C1: "Final integration between Earth sciences and rigorous philological exegesis.",
    mod4C2: "Demonstration of the historical reliability of the sacred text against skepticism.",
    mod4C3: "Accessible and profound synthesis for both believing readers and skeptical researchers.",
    mod4Card1: "Biblical Exegesis", mod4Card2: "United Geosciences", mod4Card3: "Historical Synthesis",

    reviewsHeaderSub: "Endorsed by Academia and Theology",
    reviewsHeaderTitle: "What Specialists Say",
    review1Text: "What we see is a scientist seeking rational paths in parallel with the acts of God. Christians and Jews will not be disappointed observing different angles of the biblical event with technical rigor.",
    review1Author: "Dr. Marcelo Hermes Lima",
    review1Role: "Professor of Biochemistry at the University of Brasília (UnB)",
    review2Text: "The book's value lies in this courageous attempt to put Scripture and scientific research into dialogue, without subjecting the Bible to the unstable tribunal of intellectual fashions.",
    review2Author: "Dr. Isaias Lobão Pereira Junior",
    review2Role: "Theologian, Historian, and Professor/Researcher (IFTO)",
    review3Text: "It offers the reader solid, referenced, and methodologically transparent material capable of inspiring new research and reviewing major biblical themes.",
    review3Author: "Dr. Pedro Zany Caldeira",
    review3Role: "Adjunct Professor at the Federal University of Triângulo Mineiro (UFTM)",
    review4Text: "Science confirms the data. The Bible gives the meaning. And between them lies the possibility of understanding the greatest water event in Scripture without renouncing reason.",
    review4Author: "Rev. Prof. Francisco A. C. Pinho",
    review4Role: "Anglican Bishop, Anthropologist, and Scientist of Religion",
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
    rights: "All rights reserved."
  },
  it: {
    bookTitle: "Oltre L'Acqua",
    navSynopsis: "Sinossi",
    navScience: "Scienza x Bibbia",
    navAuthor: "L'Autore",
    navReviews: "Recensioni",
    navCta: "Acquista Libro",
    badge: "✨ Un'opera rivoluzionaria all'intersezione tra fede e scienza",
    heroTitle: "E se la scienza più avanzata in geoscienze e astrofisica stesse, in realtà, validando il racconto storico del Diluvio descritto millenni fa nella Bibbia?",
    heroDesc: "Scopri come la ricerca contemporanea rivela la veridicità fisica del più grande evento idrico della storia umana attraverso dati empirici.",
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
    synopsisP1: "Per secoli, il racconto del Diluvio universale è stato relegato all'allegoria o sfidato dallo scetticismo moderno. Questo libro rompe lo stampo tradizionale collegando rigorosi dati scientifici alle Scritture.",
    synopsisP2: "Un'opera essenziale che analizza colossali serbatoi di vapore cosmico e oceani minerali profondi nel mantello terrestre.",
    card1Title: "Le Acque di Sopra",
    card1Desc: "Esplora come l'astrofisica moderna rilevi immensi serbatoi di vapor d'acqua cosmico miliardi di volte superiori ai nostri oceani.",
    card2Title: "Le Acque di Sotto",
    card2Desc: "Analizza la scoperta della ringwoodite nella zona di transizione del mantello terrestre: un oceano minerale nascosto.",
    card3Title: "Memoria Culturale Globale",
    card3Desc: "Un'analisi comparativa esaustiva delle tradizioni in Mesopotamia, Asia, Europa, America e Oceania.",

    scienceTitle: "Scienza x Bibbia",
    scienceSub: "Analisi Multidisciplinare Rigorosa",
    mod1Badge: "Modulo 1",
    mod1Title: "Geologia e Idrologia",
    mod1C1: "Analisi di strati sedimentari continui su scala continentale senza segni di erosione prolungata.",
    mod1C2: "Studio di fossili marini e conchiglie trovati sulle cime di grandi catene montuose.",
    mod1C3: "Simulazioni di megaflussi d'acqua basate sulla geomorfologia.",
    mod1Card1: "Strati Sedimentari", mod1Card2: "Fossili Montani", mod1Card3: "Megaflussi Idrici",

    mod2Badge: "Modulo 2",
    mod2Title: "Archeologia e Testi Antichi",
    mod2C1: "Studio comparativo tra il racconto biblico, l'Epopea di Gilgamesh e Atrahasis.",
    mod2C2: "Analisi critica di tavolette cuneiformi sumere.",
    mod2C3: "Valutazione dei recenti scavi stratigrafici in Medio Oriente.",
    mod2Card1: "Fragmento contendo a narrativa do dilúvio com Utnapishtim.", 
    mod2Card2: "Tabuleta relacionada à história babilônica do dilúvio", 
    mod2Card3Html: 'A imagem apresenta o comparativo entre Ur e sítios próximos como Eridu, onde o depósito de lodo esteve ausente. Escavações feitas por <a href="https://www.youtube.com/watch?v=gSXJK63uc6I&t=85s" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-primary); text-decoration: underline;">C. Leonard Woolley</a>.',

    mod3Badge: "Module 3",
    mod3Title: "Antropologia e Sociologia",
    mod3C1: "Esame incrociato di oltre 200 miti del diluvio in civiltà distinte.",
    mod3C2: "Valutazione delle tradizioni orali nelle culture asiatiche e indigene.",
    mod3C3: "Dati genetici moderni sui colli di bottiglia della popolazione umana.",
    mod3Card1Html: '<a href="https://youtube.com/shorts/27pI5zU8cz0?si=hnH3tAHun96azCGZ" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-primary); text-decoration: underline;">Mitos</a> sobre dilúvios aparecem na Mesopotâmia, Grécia, Índia, Mesoamérica e em outros lugares. Uma análise comparativa de fontes primárias, padrões e o que eles revelam.', 
    mod3Card2Text: "Aborígenes australianos contam que ilhas hoje submersas eram colinas onde caçavam, e que o mar avançou devagar e de forma implacável. A batimetria do pós-último máximo glacial (18.000–7.000 a.P.) prova a inundação de mais de 1,5 milhão de km² de plataformas costeiras.", 
    mod3Card3Text: "O DNA Humano Responde (O Fim do Mito do Funil de 4.500 Anos) Árvore de Haplogrupos do Cromossomo Y (Padrão Global / Filogenia de Alta Resolução)",

    mod4Badge: "Module 4",
    mod4Title: "Teologia e Sintesi",
    mod4C1: "Integrazione finale tra geoscienze ed esegesi biblica.",
    mod4C2: "Dimostrazione dell'affidabilità storica del testo sacro.",
    mod4C3: "Sintesi accessibile per credenti e scettici.",
    mod4Card1: "Esegesi Biblica", mod4Card2: "Geoscienze Unite", mod4Card3: "Sintesi Storica",

    reviewsHeaderSub: "Approvato da Accademia e Teologia",
    reviewsHeaderTitle: "Cosa dicono gli specialisti",
    review1Text: "Ciò che vediamo è uno scienziato che cerca percorsi razionali in parallelo con le azioni di Dio. I cristiani e gli ebrei non rimarranno delusi osservando diversi angoli dell'evento biblico.",
    review1Author: "Dr. Marcelo Hermes Lima",
    review1Role: "Professore di Biochimica presso l'Università di Brasilia (UnB)",
    review2Text: "Il valore del libro risiede in questo coraggioso tentativo di mettere in dialogo la Scrittura e la ricerca scientifica senza sottomettere la Bibbia alle mode intellettuali.",
    review2Author: "Dr. Isaias Lobão Pereira Junior",
    review2Role: "Teologo, Storico e Professore/Ricercatore (IFTO)",
    review3Text: "Offre al lettore materiale solido, referenziato e metodologicamente trasparente, capace di ispirare nuove ricerche e riesaminare i grandi temi biblici.",
    review3Author: "Dr. Pedro Zany Caldeira",
    review3Role: "Professore Associato presso l'Università Federale del Triângulo Mineiro (UFTM)",
    review4Text: "La scienza conferma i dati. La Bibbia dà il significato. E tra di essi c'è la possibilità di comprendere il più grande evento d'acqua nelle Scritture.",
    review4Author: "Rev. Prof. Francisco A. C. Pinho",
    review4Role: "Vescovo anglicano, antropologo e scienziato della religione",
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
    rights: "Tutti i diritti riservati."
  },
  de: {
    bookTitle: "Jenseits Des Wassers",
    navSynopsis: "Inhaltsangabe",
    navScience: "Wissenschaft x Bibel",
    navAuthor: "Der Autor",
    navReviews: "Rezensionen",
    navCta: "Buch Erwerben",
    badge: "✨ Ein revolutionäres Werk an der Schnittstelle von Glaube und Wissenschaft",
    heroTitle: "Was wäre, wenn die fortschrittlichste Geowissenschaft und Astrophysik tatsächlich den historischen Bericht der Sintflut validieren würden, der vor Jahrtausenden in der Bibel beschrieben wurde?",
    heroDesc: "Entdecken Sie, wie zeitgenössische Forschung die physische Wahrheit des größten Wasserereignisses der Menschheitsgeschichte durch empirische Daten enthüllt.",
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
    synopsisP1: "Jahrhundertelang wurde der Bericht über die Sintflut als Allegorie abgetan oder von moderner Skepsis angefochten. Dieses Buch bricht mit dem traditionellen Schema.",
    synopsisP2: "Ein unverzichtbares Werk, das kolossale kosmische Wasserdampfreservoirs und tiefe Mineralozeane im Erdmantel analysiert.",
    card1Title: "Die Gewässer oben",
    card1Desc: "Erforschen Sie, wie die moderne Astrophysik riesige Reservoirs kosmischen Wasserdampfs entdeckt.",
    card2Title: "Die Gewässer unten",
    card2Desc: "Analysieren Sie die Entdeckung von Ringwoodit in der Übergangszone des Erdmantels: ein versteckter mineralischer Ozean.",
    card3Title: "Globales kulturelles Gedächtnis",
    card3Desc: "Eine umfassende vergleichende Analyse von Traditionen in Mesopotamien, Asien, Europa, Amerika und Ozeanien.",

    scienceTitle: "Wissenschaft x Bibel",
    scienceSub: "Streng Multidisziplinäre Analyse",
    mod1Badge: "Modul 1",
    mod1Title: "Geologie und Hydrologie",
    mod1C1: "Analyse kontinuierlicher Sedimentschichten im kontinentalen Maßstab.",
    mod1C2: "Studie von Meeresfossilien auf großen Gebirgszügen.",
    mod1C3: "Geomorphologische Simulationen von Mega-Wasserströmen.",
    mod1Card1: "Sedimentschichten", mod1Card2: "Bergfossilien", mod1Card3: "Wasser-Megaströme",

    mod2Badge: "Modul 2",
    mod2Title: "Archäologie und Alte Texte",
    mod2C1: "Vergleichende Studie des biblischen Berichts mit dem Gilgamesch-Epos.",
    mod2C2: "Kritische Analyse sumerischer Keilschrifttafeln.",
    mod2C3: "Auswertung jüngster stratigraphischer Ausgrabungen im Nahen Osten.",
    mod2Card1: "Fragmento contendo a narrativa do dilúvio com Utnapishtim.", 
    mod2Card2: "Tabuleta relacionada à história babilônica do dilúvio", 
    mod2Card3Html: 'A imagem apresenta o comparativo entre Ur e sítios próximos como Eridu, onde o depósito de lodo esteve ausente. Escavações feitas por <a href="https://www.youtube.com/watch?v=gSXJK63uc6I&t=85s" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-primary); text-decoration: underline;">C. Leonard Woolley</a>.',

    mod3Badge: "Module 3",
    mod3Title: "Anthropologie und Soziologie",
    mod3C1: "Kreuzuntersuchung von über 200 Sintflutmythen in verschiedenen Zivilisationen.",
    mod3C2: "Auswertung mündlicher Überlieferungen in indigenen Kulturen.",
    mod3C3: "Moderne genetische Daten zu Bevölkerungsengpässen.",
    mod3Card1Html: '<a href="https://youtube.com/shorts/27pI5zU8cz0?si=hnH3tAHun96azCGZ" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-primary); text-decoration: underline;">Mitos</a> sobre dilúvios aparecem na Mesopotâmia, Grécia, Índia, Mesoamérica e em outros lugares. Uma análise comparativa de fontes primárias, padrões e o que eles revelam.', 
    mod3Card2Text: "Aborígenes australianos contam que ilhas hoje submersas eram colinas onde caçavam, e que o mar avançou devagar e de forma implacável. A batimetria do pós-último máximo glacial (18.000–7.000 a.P.) prova a inundação de mais de 1,5 milhão de km² de plataformas costeiras.", 
    mod3Card3Text: "O DNA Humano Responde (O Fim do Mito do Funil de 4.500 Anos) Árvore de Haplogrupos do Cromossomo Y (Padrão Global / Filogenia de Alta Resolução)",

    mod4Badge: "Module 4",
    mod4Title: "Theologie und Synthese",
    mod4C1: "Integration zwischen Erdwissenschaften und biblischer Exegese.",
    mod4C2: "Nachweis der historischen Zuverlässigkeit des heiligen Textes.",
    mod4C3: "Zugängliche Synthese für Gläubige und Skeptiker.",
    mod4Card1: "Biblische Exegese", mod4Card2: "Vereinte Geowissenschaften", mod4Card3: "Historische Synthese",

    reviewsHeaderSub: "Unterstützt von Wissenschaft und Theologie",
    reviewsHeaderTitle: "Was Spezialisten sagen",
    review1Text: "Was wir sehen, ist ein Wissenschaftler, der rationale Wege parallel zu den Taten Gottes sucht. Christen und Juden werden nicht enttäuscht sein.",
    review1Author: "Dr. Marcelo Hermes Lima",
    review1Role: "Professor für Biochemie an der Universität Brasília (UnB)",
    review2Text: "Der Wert des Buches liegt in diesem mutigen Versuch, Schrift und wissenschaftliche Forschung in einen Dialog zu bringen, ohne die Bibel modischen intellektuellen Strömungen zu unterwerfen.",
    review2Author: "Dr. Isaias Lobão Pereira Junior",
    review2Role: "Theologe, Historiker und Professor/Forscher (IFTO)",
    review3Text: "Es bietet dem Leser ein solides, referenziertes und methodisch transparentes Material, das neue Forschungen anregen und biblische Hauptthemen überprüfen kann.",
    review3Author: "Dr. Pedro Zany Caldeira",
    review3Role: "Außerordentlicher Professor an der Bundesuniversität von Triângulo Mineiro (UFTM)",
    review4Text: "Die Wissenschaft bestätigt die Daten. Die Bibel gibt den Sinn. Und dazwischen liegt die Möglichkeit, das größte Wasserereignis der Schrift zu verstehen.",
    review4Author: "Rev. Prof. Francisco A. C. Pinho",
    review4Role: "Anglikanischer Bischof, Anthropologe und Religionswissenschaftler",
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
    rights: "Alle Rechte vorbehalten."
  }
};

const languagesList = [
  { code: 'pt', label: 'Português', flag: flagPt },
  { code: 'es', label: 'Español', flag: flagEs },
  { code: 'en', label: 'English', flag: flagEn },
  { code: 'it', label: 'Italiano', flag: flagIt },
  { code: 'de', label: 'Deutsch', flag: flagDe }
];

export default function App() {
  const [lang, setLang] = useState('pt');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[lang];

  const currentFlag = languagesList.find((l) => l.code === lang)?.flag || flagPt;
  const currentLabel = languagesList.find((l) => l.code === lang)?.label || 'Português';

  return (
    <div className="app-container">
      
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-brand">
          <span className="brand-text-title">{t.bookTitle}</span>
          <img src={logoAmoler} alt="Logo AmoLer Editora" className="nav-logo-img" />
        </div>
        
        <ul className="nav-links">
          <li><a href="#sobre">{t.navSynopsis}</a></li>
          <li><a href="#ciencia-biblia">{t.navScience}</a></li>
          <li><a href="#autor">{t.navAuthor}</a></li>
          <li><a href="#criticas">{t.navReviews}</a></li>
        </ul>

        <div className="nav-right">
          <div className="custom-lang-selector">
            <button 
              className="lang-selector-btn"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              type="button"
            >
              <img src={currentFlag} alt={currentLabel} className="lang-flag-icon" />
              <span>{currentLabel}</span>
            </button>

            {langMenuOpen && (
              <div className="lang-dropdown-menu">
                {languagesList.map((item) => (
                  <div 
                    key={item.code}
                    className={`lang-dropdown-item ${lang === item.code ? 'active' : ''}`}
                    onClick={() => {
                      setLang(item.code);
                      setLangMenuOpen(false);
                    }}
                  >
                    <img src={item.flag} alt={item.label} className="lang-flag-icon" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="#comprar" className="btn-nav">{t.navCta}</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">{t.badge}</div>
          
          <h2>
            <span>{t.heroTitle}</span>
          </h2>

          <p>{t.heroDesc}</p>

          <div className="hero-buttons">
            <a href="#comprar" className="btn-primary">{t.btnBuy}</a>
            <a href="#sobre" className="btn-secondary">{t.btnExplore}</a>
          </div>

          <div className="hero-meta">
            <div><strong>{t.authorLabel}</strong> Dr. Frederico Fonseca da Silva</div>
            <div><strong>{t.editorialLabel}</strong> AmoLer (2026)</div>
            <div><strong>ISBN:</strong> 978-85-7172-265-1</div>
          </div>
        </div>

        <div>
          <div className="flood-visual-card">
            <img src={marImg} alt="Evidencia Científica Diluvio" className="flood-bg-img" />
            <div className="flood-card-overlay"></div>
            <div className="flood-card-content">
              <div className="flood-visual-badge">EVIDENCIA CIENTÍFICA</div>
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
            <p>{t.stat1Text}</p>
          </div>
          <div className="stat-item">
            <h3>{t.stat2Val}</h3>
            <p>{t.stat2Text}</p>
          </div>
          <div className="stat-item">
            <h3>{t.stat3Val}</h3>
            <p>{t.stat3Text}</p>
          </div>
          <div className="stat-item">
            <h3>{t.stat4Val}</h3>
            <p>{t.stat4Text}</p>
          </div>
        </div>
      </section>

      {/* SINOPSIS COM CAPA DO LIVRO */}
      <section id="sobre" className="section-container">
        <div className="section-header">
          <h4>{t.section1Sub}</h4>
          <h3>{t.section1Title}</h3>
        </div>

        <div className="synopsis-grid">
          <div className="book-cover-container">
            <img src={capaLivro} alt="Capa do Livro" className="book-cover-img" />
          </div>
          <div className="synopsis-content">
            <h3>{t.bookTitle}</h3>
            <p>{t.synopsisP1}</p>
            <p>{t.synopsisP2}</p>
          </div>
        </div>

        <div className="grid-3">
          <div className="info-card">
            <div className="card-icon">⚛️</div>
            <h4>{t.card1Title}</h4>
            <p>{t.card1Desc}</p>
          </div>

          <div className="info-card">
            <div className="card-icon">🌍</div>
            <h4>{t.card2Title}</h4>
            <p>{t.card2Desc}</p>
          </div>

          <div className="info-card">
            <div className="card-icon">🧭</div>
            <h4>{t.card3Title}</h4>
            <p>{t.card3Desc}</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO CIÊNCIA X BÍBLIA (OS 4 MÓDULOS) */}
      <section id="ciencia-biblia" className="science-bible-section">
        <div className="section-header">
          <h4>{t.scienceSub}</h4>
          <h3>{t.scienceTitle}</h3>
        </div>

        <div className="science-modules-grid">
          
          {/* MÓDULO 1 */}
          <div className="module-card">
            <div>
              <div className="module-header">
                <span className="module-badge">{t.mod1Badge}</span>
              </div>
              <h4>{t.mod1Title}</h4>
              <ul className="module-comment-list">
                <li>{t.mod1C1}</li>
                <li>{t.mod1C2}</li>
                <li>{t.mod1C3}</li>
              </ul>
            </div>
            
            <div className="module-evidence-grid">
              <a 
                href="https://www.usgs.gov/media/images/grand-canyon-john-wesley-powell-1875" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card"
                title="Abrir imagem oficial do USGS"
              >
                <img src={grandCanyonImg} alt="Grand Canyon Camadas Sedimentares" />
                <span>{t.mod1Card1}</span>
              </a>

              <a 
                href="https://www.iflscience.com/people-are-confused-why-there-are-marine-fossils-at-the-top-of-mount-everest-72096" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card"
                title="Abrir artigo da IFLScience sobre fósseis marinhos no Everest"
              >
                <img src={fossilHimalayaImg} alt="Fóssil Marinho no Himalaia" />
                <span>{t.mod1Card2}</span>
              </a>

              <a 
                href="https://ipolcore.ipol.im/demo/clientApp/demo.html?id=205" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card"
                title="Abrir simulação de megafluxos"
              >
                <img src={megafluxosImg} alt="Simulação de Megafluxos Hídricos" />
                <span>{t.mod1Card3}</span>
              </a>
            </div>
          </div>

          {/* MÓDULO 2 */}
          <div className="module-card">
            <div>
              <div className="module-header">
                <span className="module-badge">{t.mod2Badge}</span>
              </div>
              <h4>{t.mod2Title}</h4>
              <ul className="module-comment-list">
                <li>{t.mod2C1}</li>
                <li>{t.mod2C2}</li>
                <li>{t.mod2C3}</li>
              </ul>
            </div>
            
            <div className="module-evidence-grid">
              <a 
                href="https://www.britishmuseum.org/collection/object/W_K-3375" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card"
                title="Abrir fragmento no British Museum"
              >
                <img src={gilgameshImg} alt="Fragmento do dilúvio com Utnapishtim" />
                <span>{t.mod2Card1}</span>
              </a>

              <a 
                href="https://www.britishmuseum.org/collection/object/W_1889-0426-236" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card"
                title="Abrir tabuleta relacionada à história babilônica do dilúvio"
              >
                <img src={atrahasisImg} alt="Tabuleta relacionada à história babilônica do dilúvio" />
                <span>{t.mod2Card2}</span>
              </a>

              <a 
                href="https://www.livius.org/articles/misc/great-flood/flood5/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card"
                title="Abrir artigo em Livius"
              >
                <img src={sedimentosImg} alt="Comparativo estratigráfico Ur e Eridu" />
                <span dangerouslySetInnerHTML={{ __html: t.mod2Card3Html }}></span>
              </a>
            </div>
          </div>

          {/* MÓDULO 3 */}
          <div className="module-card">
            <div>
              <div className="module-header">
                <span className="module-badge">{t.mod3Badge}</span>
              </div>
              <h4>{t.mod3Title}</h4>
              <ul className="module-comment-list">
                <li>{t.mod3C1}</li>
                <li>{t.mod3C2}</li>
                <li>{t.mod3C3}</li>
              </ul>
            </div>
            <div className="module-evidence-grid">
              <a 
                href="https://mythologis.com/comparative/flood-myths-across-cultures" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card"
                title="Abrir análise comparativa de mitos"
              >
                <img src={pedrasPessoasImg} alt="Mitos sobre dilúvios em várias culturas" />
                <span dangerouslySetInnerHTML={{ __html: t.mod3Card1Html }}></span>
              </a>

              <a 
                href="NunnandReid2016Aboriginalmemoriesofcoastaldrowningprintversion.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card"
                title="Abrir artigo sobre memória de inundação costeira"
              >
                <img src={seaImg} alt="Batimetria e plataformas costeiras" />
                <span>{t.mod3Card2Text}</span>
              </a>

              <a 
                href="https://itol.embl.de/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card"
                title="Abrir árvore de haplogrupos no iTOL"
              >
                <img src={caldosImg} alt="Árvore de Haplogrupos do Cromossomo Y" />
                <span>{t.mod3Card3Text}</span>
              </a>
            </div>
          </div>

          {/* MÓDULO 4 */}
          <div className="module-card">
            <div>
              <div className="module-header">
                <span className="module-badge">{t.mod4Badge}</span>
              </div>
              <h4>{t.mod4Title}</h4>
              <ul className="module-comment-list">
                <li>{t.mod4C1}</li>
                <li>{t.mod4C2}</li>
                <li>{t.mod4C3}</li>
              </ul>
            </div>
            <div className="module-evidence-grid">
              <a 
                href="https://www.faraday.cam.ac.uk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card detailed-text-card"
                title="Abrir Faraday Institute Cambridge"
              >
                <img src={falaciaImg} alt="O Divórcio Metodológico" />
                <div className="compact-desc">
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>O Divórcio Metodológico</strong>
                  <span style={{ color: '#ef4444', display: 'block' }}>❌ <strong>A falácia:</strong> Estratigrafia global de 4.500 anos (rejeitado USGS/Geoscience).</span>
                  <span style={{ color: '#10b981', display: 'block' }}>✅ <strong>O acerto:</strong> Óculos do Bronze Médio (eretz = bacia/região; kol = totalidade idiomática).</span>
                  <span style={{ color: 'var(--cyan-primary)', display: 'block' }}>🎓 <strong>Apoio:</strong> Faraday Institute Cambridge & STEPBible Lexicon.</span>
                </div>
              </a>
              {/* CARTÃO 2: Resistência Histórica e Gênero */}
              <a 
                href="https://www.deadseascrolls.org.il/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card detailed-text-card"
                title="Abrir Digital Dead Sea Scrolls"
              >
                <img src={leituraAcademicaImg} alt="Leitura Acadêmica e Manuscritos" />
                <div className="compact-desc">
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>Resistência ao Ceticismo Moderno</strong>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>
                    Resiste sem concordismo geológico anacrônico ao dissociar e integrar três eixos:
                  </span>
                  <span style={{ color: '#38bdf8', display: 'block' }}>📜 <strong>Transmissão textual:</strong> estabilidade filológica comprovada.</span>
                  <span style={{ color: '#38bdf8', display: 'block' }}>🏺 <strong>Arqueologia de proveniência:</strong> contexto material de origem.</span>
                  <span style={{ color: '#38bdf8', display: 'block' }}>📚 <strong>Gênero literário:</strong> intenção historiográfica/antiga real.</span>
                </div>
              </a>

              {/* CARTÃO 3: Rastro Físico e Grito Humano */}
              <a 
                href="https://biologos.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="evidence-subcard compact-card detailed-text-card"
                title="Abrir BioLogos"
              >
                <img src={cienciaBibliaImg} alt="Ciência e Bíblia" />
                <div className="compact-desc">
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '2px' }}>Medida e Sentido</strong>
                  <span style={{ color: 'var(--cyan-primary)', display: 'block' }}>🌊 <strong>Ciência:</strong> mede o rastro físico da água que recuou.</span>
                  <span style={{ color: 'var(--gold-accent)', display: 'block' }}>✍️ <strong>Filologia & Teologia:</strong> lêem o grito humano que sobreviveu à lama.</span>
                </div>
              </a>
            </div>
          </div>

        </div>
        <blockquote className="modules-footer-quote">
          "A ciência mede o rastro físico da água que recuou; a filologia lê o grito humano que sobreviveu à lama. 
           O erro apologético é pedir para a rocha assinar um atestado que ela não emitiu, perdendo de vista o 
           milagre moral de que alguém abriu a porta de um barco em meio ao caos"
        </blockquote>
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
            <p>"{t.review1Text}"</p>
            <div className="testimonial-author">
              <strong>{t.review1Author}</strong>
              <span>{t.review1Role}</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>"{t.review2Text}"</p>
            <div className="testimonial-author">
              <strong>{t.review2Author}</strong>
              <span>{t.review2Role}</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>"{t.review3Text}"</p>
            <div className="testimonial-author">
              <strong>{t.review3Author}</strong>
              <span>{t.review3Role}</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-mark">“</div>
            <p>"{t.review4Text}"</p>
            <div className="testimonial-author">
              <strong>{t.review4Author}</strong>
              <span>{t.review4Role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section id="autor" className="section-container">
        <div className="author-grid">
          <div className="author-info">
            <h4 style={{ color: '#f59e0b', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}>{t.authorSectionSub}</h4>
            <h3>{t.authorTitle}</h3>
            <p>{t.authorBio1}</p>
            <p>{t.authorBio2}</p>
          </div>
          
          <div className="author-box">
            <h4>{t.authorBoxTitle}</h4>
            <ul>
              <li><span>1.</span> <strong>{t.authorList1}</strong></li>
              <li><span>2.</span> <strong>{t.authorList2}</strong></li>
              <li><span>3.</span> <strong>{t.authorList3}</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="comprar" className="cta-section">
        <div className="cta-box">
          <h3>{t.ctaBoxTitle}</h3>
          <p>{t.ctaBoxDesc}</p>
          <div style={{ background: '#07090e', padding: '15px', borderRadius: '8px', marginBottom: '24px', fontSize: '0.85rem', color: '#94a3b8' }}>
            ISBN: <strong style={{ color: '#f59e0b' }}>978-85-7172-265-1</strong> • AmoLer Editora
          </div>
          <a href="#comprar" className="btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
            {t.ctaButton}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src={logoAmoler} alt="Editora AmoLer" className="footer-logo-img" />
          <span>© 2026 Frederico Fonseca da Silva. {t.rights}</span>
        </div>
        <div className="footer-links">
          <a href="#sobre">{t.navSynopsis}</a>
          <a href="#ciencia-biblia">{t.navScience}</a>
          <a href="#autor">{t.navAuthor}</a>
          <a href="#criticas">{t.navReviews}</a>
        </div>
      </footer>

    </div>
  );
}