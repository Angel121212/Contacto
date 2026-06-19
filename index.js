(function () {
  "use strict";

  const STACK = [
    { name: "React", icon: "fab fa-react" },
    { name: "Angular", icon: "fab fa-angular" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "Java", icon: "fab fa-java" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "GitHub", icon: "fab fa-github" },
    {
      name: "Azure",
      icon: "custom-azure",
      type: "image",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    { name: "Office 365", icon: "fab fa-microsoft" },
    {
      name: "Firebase",
      icon: "fab fa-firebase",
      type: "image",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    { name: "Chart.js", icon: "fas fa-chart-bar" },
    { name: "Spring Boot", icon: "fas fa-leaf" },
    {
      name: "MySQL",
      icon: "fas fa-database",
      type: "image",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "SQL Server",
      icon: "fas fa-database",
      type: "image",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    },
    { name: "CCNA", icon: "fas fa-network-wired" },
  ];

  const PROJECTS = [
    {
      title: "Videojuego educativo",
      desc: "Juego sobre historia de Lima desarrollado netamente en Java. Con finalidad de enseñar datos historicos de la capital del Perú.",
      tags: ["Java"],
      icon: "fa-gamepad",
      image: "/Contacto/juego_2D_background.png",
      size: "medium",
    },
    {
      title: "Web Educativa (QHAPAC)",
      desc: "Aplicación web desarrollada para enseñar historia del Perú a niños de entre 8 - 20 años. Arquitectura full-stack.",
      tags: [
        "Spring Boot",
        "React",
        "Bootstrap",
        "MySQL",
        "JS",
        "HTML5",
        "css3",
        "Java",
        "más...",
      ],
      icon: "fa-keyboard",
      image: "/Contacto/juego_qhapac_background.png",
      size: "medium",
    },
    {
      title: "Aplicacion Web para pastelería J´Julia (ecommerce)",
      desc: "Aplicación web que permite ver información de la empresa, productos y detalles de lis mismos. Además, cuenta con sección de compra/venta con actualizaciones por parte del administrador.",
      tags: ["JS", "HTML5", "CSS3", "PHP", "más..."],
      icon: "fa-shop",
      image: "/Contacto/cafeteria_djulia_background.png",
      size: "medium",
    },
    {
      title: "Aplicación web para cafetería Nosalgia",
      desc: "Aplicación web informativo de la cafetería Nostalgia, la aplicación permite realizar ventas y modificaciones por parte del administrador.",
      tags: ["js", "HTML5", "CSS3", "JAVA", "Spring Boot", "PHP", "h2"],
      icon: "fa-shop",
      image: "/Contacto/cafeteria_nostalgia_background.png",
      size: "medium",
    },
    {
      title: "Servicios en Cisco (DNS, HTTP, DHCP)",
      desc: "Configuración de servidores DNS, HTTP y DHCP en routers Cisco mediante Packet Tracer. Implementación de redes empresariales con servicios integrados y resolución de nombres.",
      tags: ["Cisco", "DNS", "HTTP", "DHCP", "Packet Tracer"],
      icon: "fa-network-wired",
      image:
        "https://newsroom.cisco.com/c/dam/r/newsroom/en/us/images/Cisco-Logo-Blue_1200x675.jpg",
      size: "small",
    },
    {
      title: "Testing con JMeter",
      desc: "Pruebas de software con JMeter y Mockito.",
      tags: ["JMeter", "Mockito"],
      icon: "fa-bug",
      image:
        "data:image/png;base64,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",
      size: "small",
    },
    {
      title: "Análisis y Documentación de Software",
      desc: "Elaboración de especificación de requisitos (SRS), diagramas UML (casos de uso, clases, secuencia), modelado de bases de datos (ERD), planificación con diagramas Gantt y creación de manuales técnicos y de usuario.",
      tags: ["SRS", "UML", "ERD", "Gantt", "Documentación Técnica"],
      icon: "fa-diagram-project",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600",
      size: "medium",
    },
  ];

  const CERTIFICATES = [
    {
      name: "CCNA: Introducción a redes",
      issuer: "Cisco",
      icon: "fa-network-wired",
      link: "https://1drv.ms/f/c/9a3a788053cc4829/IgAV7-gV2KuqRIoECYW9vVDGAYQzhJBJ3YyE3vNaDtRjf7A?e=tckGzf",
    },
    {
      name: "CCNA: Conmutación y enrutamiento",
      issuer: "Cisco",
      icon: "fa-wifi",
      link: "https://1drv.ms/f/c/9a3a788053cc4829/IgDsvOTKoIvyTroN03Mj_VskAZ4iWSSR44ud8NlCzPmUzAc?e=zy5H0t",
    },
    {
      name: "Introducción al IoT",
      issuer: "Cisco",
      icon: "fa-microchip",
      link: "https://1drv.ms/f/c/9a3a788053cc4829/IgDQIIS6GZm0QKxmlcrLj8HHAT8UV54zEU8VO_HKcPkBBPA?e=ApE5IZ",
    },
    {
      name: "Defensa de la Red",
      issuer: "Cisco",
      icon: "fa-shield-alt",
      link: "https://1drv.ms/b/c/9a3a788053cc4829/IQBf_AacyTAJR5axlCH5AvkfAQlWkOxeRQs_utL33po-xE8?e=ETEftM",
    },
    {
      name: "Introducción a la Ciberseguridad",
      issuer: "Cisco",
      icon: "fa-lock",
      link: "https://1drv.ms/b/c/9a3a788053cc4829/IQBGnchtxtrHSrD8DVHFcYZ7AecBHK5AN2qFIFGVA6JrEls?e=P8YLHK",
    },
    {
      name: "Seguridad de Terminales",
      issuer: "Cisco",
      icon: "fa-lock",
      link: "https://1drv.ms/b/c/9a3a788053cc4829/IQBwSHSP-UVsQbehBUpd90FQAQYAfAPjzgjTjYC4k0NJnH4?e=U83ZZF",
    },
    {
      name: "Programa de Inglés",
      issuer: "ICPNA",
      icon: "fa-language",
      link: "https://1drv.ms/f/c/9a3a788053cc4829/IgAmxQXTkhzxQaefKFBAkpATAeuFgWBkgAt15Ex5f24_T18?e=iIoS2h",
    },
    {
      name: "TOEFL",
      issuer: "ICPNA",
      icon: "fa-certificate",
      link: "https://1drv.ms/t/c/9a3a788053cc4829/IQCF_6MC8lMST6LiRBXYV0poAamQZY80K8B6X6NY_F2Xees?e=oQfghK",
    },
    {
      name: "Excel Intermedio",
      issuer: "UTP",
      icon: "fa-table",
      link: "https://1drv.ms/b/c/9a3a788053cc4829/IQC4vK4YEQT-SaJEmmbmsDzfAVHiTsv3BJ86SEmKR4Zwz_k?e=hyZAX8",
    },
  ];

  const ALL_NOTES = [
    {
      id: 1,
      title: "Generación Top - Orgullo UTP",
      excerpt:
        "Ser parte de la Generación Top de mi universidad es un reconocimiento al esfuerzo colectivo.",
      content: `<p>Ser parte de la <strong>Generación Top</strong> de la Universidad Tecnológica del Perú es un honor que comparto con mis compañeros. Es el reconocimiento a un esfuerzo colectivo y a una cultura de excelencia.</p>
  <h4>¿Qué significa para mí?</h4>
  <ul>
      <li><strong>Reconocimiento:</strong> Saber que el esfuerzo vale la pena.</li>
      <li><strong>Compromiso:</strong> Mantener el nivel y seguir creciendo.</li>
      <li><strong>Inspiración:</strong> Motivar a otros a dar lo mejor de sí.</li>
  </ul>
  <p>La Generación Top no es solo un grupo de estudiantes, es una mentalidad. Es entender que la excelencia académica y profesional van de la mano.</p>
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> Generación Top, UTP, Excelencia</span>
      <span><i class="far fa-calendar-alt"></i> 2026</span>
  </div>`,
      date: "17/06/2026",
      category: " 📌Logros",
      icon: "fa-star",
      tags: ["Generación Top", "UTP", "Excelencia"],
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQH1hGi7CVBQYg/feedshare-shrink_800/B4DZ7YMRcIHQAc-/0/1781743557774?e=1783555200&v=beta&t=p9NRmFaocqZkx5CLUgXU7piaR8EKVH9Qm33-PKrCypU",
      type: "image",
    },
    {
      id: 2,
      title: "🚀 Nueva versión de mi portafolio web - 2026",
      excerpt:
        "He renovado completamente mi portafolio con un diseño moderno, nuevas secciones y mejor experiencia de usuario.",
      content: `<p>¡Mi portafolio web tiene una nueva versión! 🎉</p>
  
  <p>He trabajado en una renovación completa del sitio, con un diseño inspirado en la estética de Apple, nuevas funcionalidades y una experiencia más fluida para los visitantes.</p>
  
  <h4>✨ Novedades de esta versión</h4>
  <ul>
      <li><strong>🎨 Diseño renovado:</strong> Estilo Apple con glassmorphism y tipografía SF Pro.</li>
      <li><strong>📱 Responsive mejorado:</strong> Experiencia optimizada en todos los dispositivos.</li>
      <li><strong>📝 Sección de publicaciones:</strong> Artículos y reflexiones sobre mi camino en ingeniería.</li>
      <li><strong>🔗 Botón de compartir:</strong> Comparte publicaciones con un solo clic.</li>
      <li><strong>🌓 Modo oscuro/claro:</strong> Tema dinámico con persistencia en localStorage.</li>
      <li><strong>🖼️ Imagen de perfil:</strong> Nueva forma ovalada con efecto orgánico.</li>
  </ul>
  
  <h4>🛠️ Tecnologías utilizadas</h4>
  <ul>
      <li><strong>HTML5 & CSS3:</strong> Estructura y estilos modernos.</li>
      <li><strong>JavaScript:</strong> Interactividad y dinamismo.</li>
      <li><strong>FontAwesome & Simple Icons:</strong> Iconografía profesional.</li>
      <li><strong>Google Fonts:</strong> Tipografía Inter.</li>
      <li><strong>Glassmorphism:</strong> Estilo visual moderno y elegante.</li>
  </ul>
  
  <p>🌐 <strong>Visita mi portafolio:</strong> <a class = "a_link"  href="https://angelbecerratello.me/" target="_blank" rel="noopener">angelbecerratello.me</a></p>
  
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> Portafolio, Actualización, Diseño</span>
      <span><i class="far fa-calendar-alt"></i> 18/06/2025</span>
  </div>`,
      date: "18/06/2025",
      category: "Actualización",
      icon: "fa-rocket",
      tags: ["Portafolio", "Actualización", "Diseño"],
      image: "/Contacto/cover_2.png",
      type: "image",
    },
    {
      id: 3,
      title: "Network Defense - Certificación Cisco",
      excerpt:
        "Certificación en defensa de redes, fortaleciendo mis habilidades en ciberseguridad y detección de amenazas.",
      content: `<p>He completado el curso de <strong>Network Defense</strong> de Cisco Networking Academy, una certificación que ha fortalecido mis conocimientos en seguridad de redes, detección de amenazas y estrategias defensivas en entornos TI modernos.</p>
  
  <h4>Habilidades y conocimientos clave</h4>
  <ul>
      <li><strong>Seguridad de redes:</strong> Configuración de firewalls y políticas de acceso.</li>
      <li><strong>Detección de amenazas:</strong> Identificación y mitigación de ataques comunes.</li>
      <li><strong>Estrategias defensivas:</strong> Implementación de capas de seguridad y hardening de sistemas.</li>
      <li><strong>Monitorización:</strong> Análisis de logs y sistemas de detección de intrusiones (IDS/IPS).</li>
  </ul>
  
  <p>Esta certificación complementa mi perfil como <strong>Full Stack Developer</strong>, permitiéndome integrar principios de ciberseguridad en cada etapa del ciclo de vida del desarrollo de software.</p>
  
  <p>📎 <strong>Credencial verificable:</strong> <a class = "a_link" href="https://www.linkedin.com/posts/angel-emilio-becerra-t_im-happy-to-share-that-ive-completed-the-share-7473408667732697088-wyLS/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvJgDABvT_U9j7mIE4wNkVh8i2QoeGFXgI" target="_blank" rel="noopener">Ver en LinkedIn</a></p>
  
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> Cisco, Ciberseguridad, Defensa de Red</span>
      <span><i class="far fa-calendar-alt"></i> 2026</span>
  </div>`,
      date: "17/06/2026",
      category: "Certificaciones",
      icon: "fa-shield-alt",
      tags: ["Cisco", "Ciberseguridad", "Defensa de Red"],
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQEFCZdz2v65dQ/feedshare-shrink_1280/B4DZ7bhlO1HEAM-/0/1781799474482?e=1783555200&v=beta&t=57jqg2dYfibZbm9uvfJb83F8rNV5ki_mycymiL78r0w",
      type: "image",
    },
    {
      id: 4,
      title: "🔗 LinkedIn Actualizado - Nuevos proyectos y certificaciones",
      excerpt:
        "He renovado mi perfil de LinkedIn con mis proyectos más recientes, certificaciones y experiencia profesional.",
      content: `<p>¡Mi perfil de LinkedIn está completamente actualizado! 🚀</p>
  
  <p>He agregado mis proyectos más recientes, certificaciones y experiencia para reflejar mi crecimiento como desarrollador full-stack.</p>
  
  <h4>📋 Novedades en mi perfil</h4>
  <ul>
      <li><strong>📚 Nuevos proyectos:</strong> QHAPAC, Cafetería Nostalgia y más.</li>
      <li><strong>🏆 Certificaciones actualizadas:</strong> Network Defense de Cisco.</li>
      <li><strong>💼 Experiencia:</strong> Desarrollo de aplicaciones web con Spring Boot, Java y PHP.</li>
      <li><strong>🛠️ Habilidades técnicas:</strong> React, Java, Spring Boot, MySQL, PHP, Git, GitHub, Azure.</li>
  </ul>
  
  <h4>📊 Estadísticas</h4>
  <ul>
      <li><strong>+6</strong> proyectos publicados</li>
      <li><strong>+6</strong> certificaciones Cisco</li>
      <li><strong>8°</strong> ciclo de Ingeniería de Software</li>
  </ul>
  
  <p>🔗 <strong>Conéctate conmigo:</strong> <a class = "a_link" href="https://linkedin.com/in/angel-emilio-becerra-t" target="_blank" rel="noopener">linkedin.com/in/angel-emilio-becerra-t</a></p>
  
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> LinkedIn, Actualización, Perfil</span>
      <span><i class="far fa-calendar-alt"></i> 2026</span>
  </div>`,
      date: "16/06/2026",
      category: "Actualización",
      icon: "fa-linkedin-in",
      tags: ["LinkedIn", "Actualización", "Perfil"],
      image: "/Contacto/linkedin_profile.png",
      type: "image",
    },
    {
      id: 5,
      title: "📄 README del Portafolio Web - Ya disponible",
      excerpt:
        "El README de mi portafolio web ya está subido con toda la información del proyecto.",
      content: `<p>¡El README de mi <strong>portafolio web</strong> ya está disponible! 🚀</p>
  
  <p>He subido la documentación completa del sitio web que desarrollé para presentar mi perfil profesional como Ingeniero de Software.</p>
  
  <h4>🌐 Sitio web</h4>
  <p>🔗 <strong>Visita mi portafolio:</strong> <a class="a_link" href="https://angelbecerratello.me/" target="_blank" rel="noopener">angelbecerratello.me</a></p>
  
  <h4>📋 Contenido del sitio</h4>
  <ul>
      <li><strong>👤 Presentación personal:</strong> Mi perfil y experiencia.</li>
      <li><strong>📚 Proyectos:</strong> Trabajos académicos y profesionales.</li>
      <li><strong>🛠️ Habilidades técnicas:</strong> Stack tecnológico y herramientas.</li>
      <li><strong>💼 Experiencia:</strong> Trayectoria y logros.</li>
      <li><strong>📬 Contacto:</strong> Canales de comunicación.</li>
  </ul>
  
  <h4>🛠️ Tecnologías utilizadas</h4>
  <ul>
      <li><strong>HTML5 & CSS3:</strong> Estructura y estilos modernos.</li>
      <li><strong>JavaScript:</strong> Interactividad y dinamismo.</li>
      <li><strong>Diseño responsivo:</strong> Adaptado a todos los dispositivos.</li>
      <li><strong>Glassmorphism:</strong> Estilo visual moderno y elegante.</li>
  </ul>
  
  <h4>📂 Repositorio</h4>
  <p>El código fuente está disponible en GitHub: <a class="a_link" href="https://github.com/Angel121212/Contacto" target="_blank" rel="noopener">github.com/Angel121212/Contacto</a></p>
  
  <p>📌 <strong>Autor:</strong> Angel E. Becerra Tello - Ingeniero de Software</p>
  
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> Portafolio, README, Web</span>
      <span><i class="far fa-calendar-alt"></i> 2026</span>
  </div>`,
      date: "24/04/2026",
      category: "Proyectos",
      icon: "fa-globe",
      tags: ["Portafolio", "README", "Web"],
      image: "/Contacto/cover.png",
      type: "image",
    },
    {
      id: 6,
      title: "📄 README de GitHub - Mi perfil renovado",
      excerpt:
        "He renovado mi perfil de GitHub con un README que refleja mi identidad como desarrollador full-stack.",
      content: `<p>¡Mi perfil de GitHub tiene un nuevo README! 🎉</p>
  
  <p>He actualizado mi presentación para reflejar quién soy como desarrollador, mis tecnologías y lo que estoy construyendo.</p>
  
  <h4>📋 Sobre mí</h4>
  <p>Soy <strong>Angel Emilio Becerra Tello</strong>, un desarrollador web de Perú 🇵🇪 enfocado en crear herramientas digitales para educación, plataformas académicas y sistemas IT. Me apasiona transformar ideas en aplicaciones intuitivas con código limpio y UI fluida.</p>
  
  <h4>🔥 Mi filosofía de desarrollo</h4>
  <ul>
      <li><strong>Start simple — scale when needed:</strong> Comenzar simple, escalar cuando sea necesario.</li>
      <li><strong>Code must be readable:</strong> El código debe ser legible.</li>
      <li><strong>UI should feel alive:</strong> La interfaz debe sentirse viva.</li>
      <li><strong>Every project is a chance to learn:</strong> Cada proyecto es una oportunidad para aprender.</li>
  </ul>
  
  <h4>🔭 Lo que estoy construyendo</h4>
  <ul>
      <li><strong>React:</strong> Componentes reutilizables y optimización.</li>
      <li><strong>Full-stack:</strong> Java, Spring Boot y Flask.</li>
      <li><strong>Animaciones:</strong> UI con GSAP.</li>
      <li><strong>Educación:</strong> Herramientas para universidades.</li>
  </ul>
  
  <h4>🌱 Aprendiendo actualmente</h4>
  <ul>
      <li><strong>React Avanzado:</strong> Patrones de hooks, rendimiento.</li>
      <li><strong>Flask:</strong> Desarrollo de APIs.</li>
      <li><strong>UI/UX:</strong> Patrones para mejor experiencia de usuario.</li>
  </ul>
  
  <h4>📚 Proyectos destacados</h4>
  <ul>
      <li><strong>QHAPAQ:</strong> RPG educativo en pixel art sobre la historia de Lima.</li>
      <li><strong>Cafetería Nostalgia:</strong> Sistema de gestión de ventas con Spring Boot.</li>
      <li><strong>Contacto:</strong> Mi portafolio web personal.</li>
  </ul>
  
  <p>🌐 <strong>Visita mi perfil:</strong> <a class="a_link" href="https://github.com/Angel121212" target="_blank" rel="noopener">github.com/Angel121212</a></p>
  
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> GitHub, README, Perfil</span>
      <span><i class="far fa-calendar-alt"></i> 01/01/2026</span>
  </div>`,
      date: "01/01/2026",
      category: "Desarrollo",
      icon: "fa-github",
      tags: ["GitHub", "README", "Perfil"],
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
      type: "image",
    },

    {
      id: 7,
      title: "Cisco Labs - Configuración de servicios en red",
      excerpt:
        "Configurar DNS, DHCP y HTTP en Packet Tracer fue una experiencia increíble.",
      content: `<p>Una de las prácticas más gratificantes en mi camino CCNA fue configurar <strong>servidores DNS, HTTP y DHCP</strong> en routers Cisco utilizando Packet Tracer.</p>
  <h4>Lo que aprendí</h4>
  <ul>
      <li><strong>DNS:</strong> Resolución de nombres en una red local.</li>
      <li><strong>HTTP:</strong> Servir contenido web desde un router.</li>
      <li><strong>DHCP:</strong> Asignación dinámica de IPs.</li>
  </ul>
  <p>Ver todos los servicios funcionando en conjunto me dio una comprensión más profunda de cómo funciona Internet a nivel fundamental.</p>
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> Cisco, DNS, DHCP</span>
      <span><i class="far fa-calendar-alt"></i> 2025</span>
  </div>`,
      date: "20/12/2025",
      category: "Redes",
      icon: "fa-server",
      tags: ["Cisco", "DNS", "DHCP"],
      image: "/Contacto/profile_cisco.png",
      type: "image",
    },
    {
      id: 8,
      title: "Cafetería Nostalgia - Sistema de Gestión de Ventas y Facturación",
      excerpt:
        "Plataforma web para la automatización de procesos comerciales en establecimientos gastronómicos.",
      content: `<p><strong>Cafetería Nostalgia</strong> es un sistema de información web diseñado para la automatización de procesos comerciales en establecimientos gastronómicos. La plataforma permite la administración centralizada de inventarios, el procesamiento de transacciones en tiempo real y la generación de comprobantes de pago electrónicos.</p>
  
  <h4>Arquitectura del Sistema</h4>
  <p>La aplicación está construida bajo el patrón de arquitectura <strong>Model-View-Controller (MVC)</strong>, lo que permite una separación clara entre la lógica de negocio, el manejo de datos y la interfaz de usuario, facilitando la escalabilidad y el mantenimiento.</p>
  
  <h4>Módulos del Sistema</h4>
  <ul>
      <li><strong>Experiencia del Cliente:</strong> Panel principal, servicios, información institucional y vitrina de productos destacados.</li>
      <li><strong>Gestión de Ventas y Checkout:</strong> Carrito de compras, validación de stock, cálculo de importes y simulación de pago.</li>
      <li><strong>Seguridad y Perfiles:</strong> Autenticación basada en roles (Administrador/Cliente) y panel de usuario.</li>
      <li><strong>Módulo Administrativo:</strong> Panel de control, mantenimiento de inventario (CRUD) y monitoreo de operaciones.</li>
      <li><strong>Analítica y Persistencia:</strong> Dashboard estratégico para análisis de rendimiento comercial.</li>
  </ul>
  
  <h4>Especificaciones Técnicas</h4>
  <ul>
      <li><strong>Backend:</strong> Java 17, Spring Boot, Spring MVC, Spring Data JPA.</li>
      <li><strong>Frontend:</strong> JSP, JSTL, Bootstrap, CSS3, HTML5.</li>
      <li><strong>Base de Datos:</strong> MySQL 8.0 / H2 Database (Runtime).</li>
      <li><strong>Servidor:</strong> Apache Tomcat (Embebido).</li>
      <li><strong>Gestión:</strong> Maven.</li>
  </ul>
  
  <p>Este proyecto me permitió profundizar en arquitectura MVC, manejo de sesiones y autenticación de usuarios, creando una experiencia completa para el negocio y sus clientes.</p>
  
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> Spring Boot, Java, MVC, Cafetería</span>
      <span><i class="far fa-calendar-alt"></i> 2025</span>
  </div>`,
      date: "01/12/2025",
      category: "Proyectos",
      icon: "fa-coffee",
      tags: ["Spring Boot", "Java", "MVC", "Cafetería"],
      image: "/Contacto/cafeteria_nostalgia_background.png",
      type: "image",
    },
    {
      id: 9,
      title: "Mi primer videojuego en Java",
      excerpt:
        "Crear un juego sobre historia de Lima en Java fue todo un desafío.",
      content: `<p>Desarrollar un <strong>videojuego educativo</strong> en Java sobre la historia de Lima fue uno de los proyectos más divertidos que he realizado. Aprendí que la programación puede ser creativa y educativa al mismo tiempo.</p>
  <h4>Lo que aprendí</h4>
  <ul>
      <li><strong>Java 2D:</strong> Gráficos, animaciones y detección de colisiones.</li>
      <li><strong>Game Loop:</strong> El corazón de cualquier videojuego.</li>
      <li><strong>Diseño educativo:</strong> Hacer que aprender sea divertido.</li>
  </ul>
  <p>Ver a los jugadores aprender historia mientras se divierten fue la mejor recompensa.</p>
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> Java, Videojuego, Educación</span>
      <span><i class="far fa-calendar-alt"></i> 2025</span>
  </div>`,
      date: "22/10/2025",
      category: "Proyectos",
      icon: "fa-gamepad",
      tags: ["Java", "Videojuego", "Educación"],
      image: "/Contacto/juego_2D_background.png",
      type: "video",
      videoId: "csayM97q4m8",
    },
    {
      id: 10,
      title: "Mis inicios en la programación",
      excerpt:
        "Desde mi primer 'Hola Mundo' hasta proyectos full-stack. Así comenzó mi viaje.",
      content: `<p>Mi primer contacto con la programación fue en el colegio, con un curso de <strong>Visual Basic</strong>. No sabía que ese momento cambiaría mi vida para siempre.</p>
  <h4>Mi evolución</h4>
  <ul>
      <li><strong>Visual Basic:</strong> Mi primer lenguaje, donde aprendí la lógica.</li>
      <li><strong>Java:</strong> El lenguaje que me enseñó programación orientada a objetos.</li>
      <li><strong>PHP y MySQL:</strong> Mi primer contacto con desarrollo web.</li>
      <li><strong>Spring Boot:</strong> Donde encontré mi pasión por el backend.</li>
  </ul>
  <p>Hoy, como estudiante de quinto ciclo de Ingeniería de Software, sigo aprendiendo y disfrutando cada línea de código.</p>
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> Programación, Java, Desarrollo</span>
      <span><i class="far fa-calendar-alt"></i> 2025</span>
  </div>`,
      date: "15/09/2025",
      category: "Personal",
      icon: "fa-code",
      tags: ["Programación", "Java", "Desarrollo"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      type: "image",
    },
    {
      id: 11,
      title: "Puesto 13 en la facultad de Ingeniería - Decimo Superior",
      excerpt:
        "Alcanzar el puesto 13 entre 327 estudiantes de la facultad de Ingeniería es un honor y una responsabilidad.",
      content: `<p>Alcanzar el <strong>puesto 13</strong> en el ranking general de la facultad de Ingeniería es uno de los logros que más orgullo me da. No es solo un número, es el reflejo de horas de estudio y dedicación.</p>
  
  <h4>📊 Mi rendimiento académico</h4>
  <ul>
      <li><strong>🏆 Mérito - Orden:</strong> 13 de 327 estudiantes</li>
      <li><strong>📚 Campus:</strong> Lima Norte</li>
      <li><strong>📈 Promedio:</strong> 18.36</li>
      <li><strong>🔄 Ciclo relativo:</strong> 06</li>
      <li><strong>📝 Créditos:</strong> 14</li>
      <li><strong>⏰ Horas semanales:</strong> 17</li>
  </ul>
  
  <h4>💡 ¿Cómo lo logré?</h4>
  <ul>
      <li><strong>Disciplina:</strong> Estudiar todos los días, aunque sean 30 minutos.</li>
      <li><strong>Curiosidad:</strong> No conformarme con lo que enseñan en clase, investigar por mi cuenta.</li>
      <li><strong>Resiliencia:</strong> Aprender de los fracasos y verlos como oportunidades de crecimiento.</li>
      <li><strong>Networking:</strong> Rodearme de personas que me impulsan a mejorar.</li>
  </ul>
  
  <p>Este ranking no es un punto final, sino un recordatorio de que el esfuerzo constante da frutos. Y lo mejor está por venir. 🚀</p>
  
  <div class="note-meta-footer">
      <span><i class="fas fa-tag"></i> Decimo Superior, Ranking, UTP</span>
      <span><i class="far fa-calendar-alt"></i> 2025</span>
  </div>`,
      date: "20/07/2025",
      category: "Logros",
      icon: "fa-medal",
      tags: ["Decimo Superior", "Ranking", "UTP"],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      type: "image",
    },
  ];

  const NOTES_PER_PAGE = 3;
  let currentNoteIndex = 0;
  let allNotesLoaded = false;

  const $ = (id) => document.getElementById(id);
  const render = (id, html) => {
    const el = $(id);
    if (el) el.innerHTML = html;
  };

  function renderStack() {
    const grid = document.getElementById("stackGrid");
    if (!grid) return;
    grid.innerHTML = STACK.map((s) => {
      if (s.type === "image" && s.imageUrl) {
        return `
          <div class="stack-card">
            <div class="stack-icon-image">
              <img src="${s.imageUrl}" alt="${s.name}" width="32" height="32" />
            </div>
            <span>${s.name}</span>
          </div>
        `;
      }
      return `
        <div class="stack-card">
          <i class="${s.icon}"></i>
          <span>${s.name}</span>
        </div>
      `;
    }).join("");
  }

  function renderProjects() {
    render(
      "projectsGrid",
      PROJECTS.map(
        (p) => `
      <a href="" class="project-card ${p.size}" onclick="return false;">
        <div class="project-image" style="background-image: url('${p.image}')">
          <i class="fas ${p.icon}"></i>
        </div>
        <div class="project-info">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
          </div>
        </div>
      </a>
    `,
      ).join(""),
    );
  }

  function renderCertificates() {
    render(
      "certGrid",
      CERTIFICATES.map(
        (c) => `
      <a href="${c.link}" target="_blank">
        <div class="cert-card">
          <i class="fas ${c.icon}"></i>
          <div class="cert-info">
            <h4>${c.name}</h4>
            <p>${c.issuer}</p>
          </div>
        </div>
      </a>
    `,
      ).join(""),
    );
  }

  function createNoteHTML(n) {
    const isVideo = n.type === "video";
    return `
      <article class="note-card" data-id="${n.id}">
        <div class="note-image-wrapper">
          <img src="${n.image}" alt="${n.title}" loading="lazy" 
               onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'" />
          <span class="note-media-badge">
            <i class="fas ${isVideo ? "fa-play" : "fa-image"}"></i> 
            ${isVideo ? "Video" : "Imagen"}
          </span>
          ${isVideo ? `<div class="note-play-icon"><i class="fas fa-play-circle"></i></div>` : ""}
        </div>
        <div class="note-body">
          <div class="note-header">
            <span class="note-category">${n.category}</span>
          </div>
          <h3 class="note-title">${n.title}</h3>
          <p class="note-excerpt">${n.excerpt}</p>
          <div class="note-tags">${n.tags.map((t) => `<span class="note-tag">${t}</span>`).join("")}</div>
          <div class="note-footer">
            <span class="note-date"><i class="far fa-calendar-alt"></i> ${n.date}</span>
            <span class="note-read-more">Leer más <i class="fas fa-arrow-right"></i></span>
          </div>
        </div>
      </article>
    `;
  }

  function renderNotes(append = false) {
    const grid = $("notesGrid");
    if (!grid) return;
    const nextIndex = Math.min(
      currentNoteIndex + NOTES_PER_PAGE,
      ALL_NOTES.length,
    );
    const notesToShow = ALL_NOTES.slice(currentNoteIndex, nextIndex);
    if (notesToShow.length === 0) return;
    const html = notesToShow.map((n) => createNoteHTML(n)).join("");
    if (append) {
      grid.insertAdjacentHTML("beforeend", html);
    } else {
      grid.innerHTML = html;
    }
    currentNoteIndex = nextIndex;
    allNotesLoaded = currentNoteIndex >= ALL_NOTES.length;
    updateLoadMoreButton();
    grid.querySelectorAll(".note-card").forEach((card) => {
      card.removeEventListener("click", card._clickHandler);
      card._clickHandler = () => openNoteModal(parseInt(card.dataset.id));
      card.addEventListener("click", card._clickHandler);
    });
  }

  function updateLoadMoreButton() {
    const cta = document.querySelector(".notes-cta");
    if (!cta) return;
    cta.innerHTML = "";
    if (allNotesLoaded) {
      const msg = document.createElement("span");
      msg.className = "notes-all-loaded";
      msg.innerHTML =
        '<i class="fas fa-check-circle"></i> Todas las notas cargadas';
      cta.appendChild(msg);
      return;
    }
    const loadMoreBtn = document.createElement("button");
    loadMoreBtn.id = "loadMoreBtn";
    loadMoreBtn.className = "btn btn-outline";
    const remaining = ALL_NOTES.length - currentNoteIndex;
    loadMoreBtn.innerHTML = `<i class="fas fa-plus-circle"></i> Ver más (${remaining} restantes)`;
    loadMoreBtn.addEventListener("click", () => {
      renderNotes(true);
      const grid = $("notesGrid");
      if (grid) {
        const newNotes = grid.querySelectorAll(".note-card");
        if (newNotes.length > 0) {
          newNotes[newNotes.length - 1].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }
    });
    cta.appendChild(loadMoreBtn);
    const loadAllBtn = document.createElement("button");
    loadAllBtn.id = "loadAllBtn";
    loadAllBtn.className = "btn btn-primary";
    loadAllBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Ver todas las entradas`;
    loadAllBtn.addEventListener("click", () => {
      const remainingNotes = ALL_NOTES.slice(currentNoteIndex);
      if (remainingNotes.length === 0) return;
      const grid = $("notesGrid");
      if (!grid) return;
      const html = remainingNotes.map((n) => createNoteHTML(n)).join("");
      grid.insertAdjacentHTML("beforeend", html);
      currentNoteIndex = ALL_NOTES.length;
      allNotesLoaded = true;
      updateLoadMoreButton();
      grid.querySelectorAll(".note-card").forEach((card) => {
        card.removeEventListener("click", card._clickHandler);
        card._clickHandler = () => openNoteModal(parseInt(card.dataset.id));
        card.addEventListener("click", card._clickHandler);
      });
      const newNotes = grid.querySelectorAll(".note-card");
      if (newNotes.length > 0) {
        const firstNew = newNotes[newNotes.length - remainingNotes.length];
        if (firstNew)
          firstNew.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    cta.appendChild(loadAllBtn);
  }

  function openNoteModal(id) {
    const note = ALL_NOTES.find((n) => n.id === id);
    if (!note) return;
    const modal = $("noteModal");
    const content = $("noteModalContent");
    const media =
      note.type === "video" && note.videoId
        ? `<div class="note-modal-video"><iframe src="https://www.youtube.com/embed/${note.videoId}" 
           title="${note.title}" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowfullscreen></iframe></div>`
        : `<div class="note-modal-image"><img src="${note.image}" alt="${note.title}" 
           onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'" /></div>`;
    content.innerHTML = `
      ${media}
      <div class="note-modal-body">
        <div class="note-modal-header">
          <span class="note-modal-category">${note.category}</span>
          <h2>${note.title}</h2>
          <div class="note-modal-meta">
            <span><i class="far fa-calendar-alt"></i> ${note.date}</span>
            ${note.type === "video" ? `<span><i class="fas fa-play"></i> Video</span>` : ""}
          </div>
        </div>
        <div class="note-modal-content-text">${note.content}</div>
        <div class="note-modal-actions">
          <button class="btn btn-secondary" onclick="closeNoteModal()">
            <i class="fas fa-times"></i> Cerrar
          </button>
         <button class="btn btn-primary" onclick="copiarEnlace(${note.id})">
            <i class="fas fa-share-alt"></i> Compartir
          </button>
        </div>
      </div>
    `;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  window.openNoteModal = openNoteModal;

  function closeNoteModal() {
    const modal = $("noteModal");
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "";
  }
  window.closeNoteModal = closeNoteModal;

  function copiarEnlace(noteId) {
    const note = ALL_NOTES.find((n) => n.id === noteId);
    if (!note) return;
    const url = `https://angelbecerratello.me/?publicacion=${noteId}`;
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          const btn = document.querySelector(
            ".note-modal-actions .btn-primary",
          );
          if (btn) {
            const original = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
            setTimeout(() => {
              btn.innerHTML = original;
            }, 2000);
          }
        })
        .catch(() => {
          alert(`📤 Comparte: ${url}`);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        const btn = document.querySelector(".note-modal-actions .btn-primary");
        if (btn) {
          const original = btn.innerHTML;
          btn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
          setTimeout(() => {
            btn.innerHTML = original;
          }, 2000);
        }
      } catch (err) {
        alert(`📤 Comparte: ${url}`);
      }
      document.body.removeChild(textarea);
    }
  }
  window.copiarEnlace = copiarEnlace;

  function initCvModal() {
    const modal = $("cvModal");
    const downloadBtn = $("downloadCvBtn");
    const closeBtn = $("closeModal");
    const form = $("cvForm");
    if (!modal || !downloadBtn || !closeBtn || !form) return;
    const openModal = () => (modal.style.display = "flex");
    const closeModal = () => (modal.style.display = "none");
    downloadBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nombre = $("nombre").value;
      const email = $("email").value;
      const empresa = $("empresa").value;
      window.open(
        "https://1drv.ms/b/c/9a3a788053cc4829/IQAQnjGIVIPBQLx1O7-XpURXAfZsDIQ3cqwOwtb0OjuAJrU?e=ofvezJ",
        "_blank",
      );
      const fd = new FormData();
      fd.append("Nombre", nombre);
      fd.append("Email", email);
      fd.append("Empresa", empresa || "No especificada");
      fd.append("Fecha", new Date().toLocaleString());
      fd.append("_subject", "📥 Alguien descargó tu CV");
      fd.append("_captcha", "false");
      try {
        await fetch("https://formsubmit.co/emilio_becerra_tello@hotmail.com", {
          method: "POST",
          body: fd,
        });
        alert("✅ Gracias. El CV se abrirá y te llegará una copia.");
      } catch {
        alert("✅ El CV se abrirá, pero hubo un problema al enviar el correo.");
      }
      closeModal();
      form.reset();
    });
  }

  function initNoteModalEvents() {
    const modal = $("noteModal");
    const closeBtn = $("closeNoteModal");
    if (closeBtn) closeBtn.addEventListener("click", closeNoteModal);
    if (modal)
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeNoteModal();
      });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNoteModal();
    });
  }

  function initHamburgerMenu() {
    const hamburger = $("hamburgerBtn");
    const navLinks = $("navLinks");
    const body = document.body;
    if (!hamburger || !navLinks) return;
    const toggle = () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
      body.classList.toggle("menu-open");
    };
    const close = () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      body.classList.remove("menu-open");
    };
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle();
    });
    navLinks
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", close));
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target))
        close();
    });
    navLinks.addEventListener("click", (e) => e.stopPropagation());
    window.addEventListener("scroll", close);
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) close();
    });
  }

  function initTheme() {
    const toggle = $("themeToggle");
    const icon = $("themeIcon");
    const html = document.documentElement;
    const updateFavicon = (theme) => {
      const fav = $("dynamicFavicon");
      if (fav)
        fav.href =
          theme === "dark"
            ? "https://img.icons8.com/ios-filled/50/e0e0e0/source-code.png"
            : "https://img.icons8.com/ios-filled/50/2a2a2a/source-code.png";
    };
    const setTheme = (theme) => {
      html.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
      updateFavicon(theme);
    };
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    if (toggle)
      toggle.addEventListener("click", () => {
        const current = html.getAttribute("data-theme");
        setTheme(current === "dark" ? "light" : "dark");
      });
  }

  function renderContact() {
    render(
      "contactGrid",
      `
      <a href="mailto:emilio_becerra_tello@hotmail.com" class="contact-card">
        <i class="far fa-envelope"></i>
        <h3>Email</h3>
        <p>emilio_becerra_tello@hotmail.com</p>
      </a>
      <a href="https://linkedin.com/in/angel-emilio-becerra-t" target="_blank" class="contact-card">
        <i class="fab fa-linkedin-in"></i>
        <h3>LinkedIn</h3>
        <p>angel-emilio-becerra-t</p>
      </a>
      <a href="https://github.com/Angel121212" target="_blank" class="contact-card">
        <i class="fab fa-github"></i>
        <h3>GitHub</h3>
        <p>Angel121212</p>
      </a>
    `,
    );
  }

  function initAll() {
    renderStack();
    renderProjects();
    renderCertificates();
    renderNotes(false);
    renderContact();
    initCvModal();
    initNoteModalEvents();
    initHamburgerMenu();
    initTheme();
  }

  document.addEventListener("DOMContentLoaded", initAll);
})();
