
(function () {
    const STACK = [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'PHP', icon: 'fab fa-php' },
        { name: 'Figma', icon: 'fab fa-figma' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'Google Cloud', icon: 'fab fa-google' },
        { name: 'Office 365', icon: 'fab fa-microsoft' },
        { name: 'Firebase', icon: 'fab fa-firebase' },

        { name: 'Chart.js', icon: 'fas fa-chart-bar' },
        { name: 'Spring Boot', icon: 'fas fa-leaf' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'SQL Server', icon: 'fas fa-database' },
        { name: 'CCNA', icon: 'fas fa-network-wired' }
    ];

    const PROJECTS = [
        /*   {
title: 'Sistema de Gestión Eclesiástica - Iglesia Alianza',
desc: 'Plataforma web integral para la administración y comunicación de la iglesia. Módulos implementados: Gestión de miembros (registro, roles, permisos), calendario interactivo con Google Calendar para cultos y eventos, mapas de ubicación con Google Maps para todas las sedes, sistema de ofrendas y diezmos con registro histórico, biblioteca de sermones (audio/video/texto), blog de devocionales diarios, galería multimedia, sistema de notificaciones por correo, panel administrativo con estadísticas, gestión de usuarios y contenido dinámico. Desarrollado con arquitectura MVC, base de datos relacional y despliegue en hosting compartido.',
tags: ['Google APIs', 'HTML5', 'CSS3', 'js', 'PHP', 'MySQL', 'AJAX', 'Hostinger'],
icon: 'fa-place-of-worship',
image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600',
size: 'large'
           },*/
        {
            title: 'Videojuego educativo',
            desc: 'Juego sobre historia de Lima desarrollado netamente en Java. Con finalidad de enseñar datos historicos de la capital del Perú.',
            tags: ['Java'],
            icon: 'fa-gamepad',
            image: 'juego_2D_background.png',
            size: 'medium'
        },
        {
            title: 'Web Educativa (QHAPAC)',
            desc: 'Aplicación web desarrollada para enseñar historia del Perú a niños de entre 8 - 20 años. Arquitectura full-stack.',
            tags: ['Spring Boot', 'React', 'Bootstrap', 'MySQL', 'JS', 'HTML5', 'css3', 'Java', 'más...'],
            icon: 'fa-keyboard',
            image: 'juego_qhapac_background.png',
            size: 'medium'
        },
        {
            title: 'Aplicacion Web para pastelería J´Julia (ecommerce)',
            desc: 'Aplicación web que permite ver información de la empresa, productos y detalles de lis mismos. Además, cuenta con sección de compra/venta con actualizaciones por parte del administrador.',
            tags: ['JS', 'HTML5', 'CSS3', 'PHP', 'más...'],
            icon: 'fa-shop',
            image: 'cafeteria_djulia_background.png',
            size: 'medium'
        },
        {
            title: 'Aplicación web para cafetería Nosalgia',
            desc: 'Aplicación web informativo de la cafetería Nostalgia, la aplicación permite realizar ventas y modificaciones por parte del administrador.',
            tags: ['js', 'HTML5', 'CSS3', 'JAVA', 'Spring Boot', 'PHP', 'h2'],
            icon: 'fa-shop',
            image: 'cafeteria_nostalgia_background.png',
            size: 'medium'
        },
        {
            title: 'Servicios en Cisco (DNS, HTTP, DHCP)',
            desc: 'Configuración de servidores DNS, HTTP y DHCP en routers Cisco mediante Packet Tracer. Implementación de redes empresariales con servicios integrados y resolución de nombres.',
            tags: ['Cisco', 'DNS', 'HTTP', 'DHCP', 'Packet Tracer'],
            icon: 'fa-network-wired',
            image: 'https://newsroom.cisco.com/c/dam/r/newsroom/en/us/images/Cisco-Logo-Blue_1200x675.jpg',
            size: 'small'
        },
        {
            title: 'Testing con JMeter',
            desc: 'Pruebas de software con JMeter y Mockito.',
            tags: ['JMeter', 'Mockito'],
            icon: 'fa-bug',
            image: 'data:image/png;base64,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',
            size: 'small'
        },
        {
            title: 'Análisis y Documentación de Software',
            desc: 'Elaboración de especificación de requisitos (SRS), diagramas UML (casos de uso, clases, secuencia), modelado de bases de datos (ERD), planificación con diagramas Gantt y creación de manuales técnicos y de usuario.',
            tags: ['SRS', 'UML', 'ERD', 'Gantt', 'Documentación Técnica'],
            icon: 'fa-diagram-project',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600',
            size: 'medium'
        },

    ];

    const CERTIFICATES = [
        { name: 'CCNA: Introducción a redes', issuer: 'Cisco', icon: 'fa-network-wired', link: 'https://1drv.ms/f/c/9a3a788053cc4829/IgAV7-gV2KuqRIoECYW9vVDGAYQzhJBJ3YyE3vNaDtRjf7A?e=tckGzf' },
        { name: 'CCNA: Conmutación y enrutamiento', issuer: 'Cisco', icon: 'fa-wifi', link: 'https://1drv.ms/f/c/9a3a788053cc4829/IgDsvOTKoIvyTroN03Mj_VskAZ4iWSSR44ud8NlCzPmUzAc?e=zy5H0t' },
        { name: 'Introducción al IoT', issuer: 'Cisco', icon: 'fa-microchip', link: 'https://1drv.ms/f/c/9a3a788053cc4829/IgDQIIS6GZm0QKxmlcrLj8HHAT8UV54zEU8VO_HKcPkBBPA?e=ApE5IZ' },
        { name: 'Excel Intermedio', issuer: 'UTP', icon: 'fa-table', link: 'https://1drv.ms/b/c/9a3a788053cc4829/IQC4vK4YEQT-SaJEmmbmsDzfAVHiTsv3BJ86SEmKR4Zwz_k?e=hyZAX8' },
        { name: 'Programa de Inglés', issuer: 'ICPNA', icon: 'fa-language', link: 'https://1drv.ms/f/c/9a3a788053cc4829/IgAmxQXTkhzxQaefKFBAkpATAeuFgWBkgAt15Ex5f24_T18?e=iIoS2h' },
        { name: 'TOEFL', issuer: 'ICPNA', icon: 'fa-certificate', link: 'https://1drv.ms/t/c/9a3a788053cc4829/IQCF_6MC8lMST6LiRBXYV0poAamQZY80K8B6X6NY_F2Xees?e=oQfghK' }

    ];

    const NOTES = [
        { quote: 'Un buen SRS ahorra más tiempo que cualquier sprint.', date: '2025' },
        { quote: 'Documentar no es perder tiempo, es ganar claridad.', date: '2025' },
        { quote: 'CCNA me enseñó que las redes son como el software: todo conecta.', date: '2025' },
        { quote: 'Décimo superior por segundo semestre consecutivo en la universidad. La constancia da resultados. 😎 ', date: '2025' },
        { quote: '9° puesto en el ranking general de mi facultad. Orgulloso de representar a mi universidad.', date: '2025' },
        { quote: 'Primera versión de QHAPAC funcionando. Ver cómo los niños aprenden historia inca con mi app no tiene precio.', date: '2025' },
        { quote: 'Configuré DNS, HTTP y DHCP en routers Cisco. PD: estuvo increible hahaha', date: '2025' },
        /* {quote: 'Mi proyecto web para la iglesia ya tiene más de 100 usuarios activos. La tecnología también sirve a Dios.', date: '2024' }*/
    ];

    function renderStack() {
        const grid = document.getElementById('stackGrid');
        if (!grid) return;
        grid.innerHTML = STACK.map(s => `
    <div class="stack-card">
        <i class="fab ${s.icon}"></i>
        <span>${s.name}</span>
    </div>
    `).join('');
    }

    function renderProjects() {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;

        const projectElements = PROJECTS.map(p => `
    <a href="" class="project-card ${p.size}" onclick="return false;">
        <div class="project-image" style="background-image: url('${p.image}')">
            <i class="fas ${p.icon}"></i>
        </div>
        <div class="project-info">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="project-tags">
                ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
        </div>
    </a>
    `).join('');

        grid.innerHTML = projectElements;
    }

    function renderCertificates() {
        const grid = document.getElementById('certGrid');
        if (!grid) return;
        grid.innerHTML = CERTIFICATES.map(c => `
    <a href="${c.link}" target="_blank"> <div class="cert-card">
        <i class="fas ${c.icon}"></i>
        <div class="cert-info">
            <h4>${c.name}</h4>
            <p>${c.issuer}</p>
        </div>
    </div></a>
    `).join('');
    }

    function renderNotes() {
        const grid = document.getElementById('notesGrid');
        if (!grid) return;
        grid.innerHTML = NOTES.map(n => `
    <div class="note-card">
        <div class="note-quote">“${n.quote}”</div>
        <div class="note-date">${n.date}</div>
    </div>
    `).join('');
    }

    function renderContact() {
        const grid = document.getElementById('contactGrid');
        if (!grid) return;
        grid.innerHTML = `
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
    `;
    }

    const modal = document.getElementById('cvModal');
    const downloadBtn = document.getElementById('downloadCvBtn');
    const closeBtn = document.getElementById('closeModal');
    const cvForm = document.getElementById('cvForm');

    downloadBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    cvForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const empresa = document.getElementById('empresa').value;

        window.open('https://1drv.ms/b/c/9a3a788053cc4829/IQAQnjGIVIPBQLx1O7-XpURXAfZsDIQ3cqwOwtb0OjuAJrU?e=ofvezJ', '_blank');

        const formData = new FormData();
        formData.append('Nombre', nombre);
        formData.append('Email', email);
        formData.append('Empresa', empresa || 'No especificada');
        formData.append('Fecha', new Date().toLocaleString());
        formData.append('_subject', '📥 Alguien descargó tu CV');
        formData.append('_captcha', 'false');

        try {
            await fetch('https://formsubmit.co/emilio_becerra_tello@hotmail.com', {
                method: 'POST',
                body: formData
            });
            alert('✅ Gracias. El CV se abrirá y te llegará una copia.');
        } catch (error) {
            console.error('Error:', error);
            alert('✅ El CV se abrirá, pero hubo un problema al enviar el correo.');
        }

        modal.style.display = 'none';
        cvForm.reset();
    });

    function initHamburgerMenu() {
        const hamburger = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');
        const body = document.body;

        if (!hamburger || !navLinks) return;

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });

        navLinks.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        window.addEventListener('scroll', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 800) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
    function initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const html = document.documentElement;

        function updateFavicon(theme) {
            const favicon = document.getElementById('dynamicFavicon');
            if (favicon) {
                favicon.href = theme === 'dark'
                    ? 'https://img.icons8.com/ios-filled/50/e0e0e0/source-code.png'
                    : 'https://img.icons8.com/ios-filled/50/2a2a2a/source-code.png';
            }
        }

        let savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        themeIcon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        updateFavicon(savedTheme);

        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeIcon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            updateFavicon(newTheme);
        });
    }

    function initAll() {
        renderStack();
        renderProjects();
        renderCertificates();
        renderNotes();
        renderContact();
        initTheme();
        initHamburgerMenu();
    }
    initAll();
})();


