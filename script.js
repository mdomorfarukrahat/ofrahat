document.addEventListener('DOMContentLoaded', () => {
    // ============================================================
    // CONFIGURATION
    // ============================================================
    const CONFIG = {
        formspree: {
            endpoint: 'https://formspree.io/f/YOUR_FORMSPREE_ID' // Replace with your Formspree ID when ready
        },
        telegram: {
            botToken: '8367966368:AAGpWLiNnQjwL7545Smdy843cYFzreWgsVs',
            chatId: '6436808555',
            enabled: true,
            pollIntervalMs: 3000 // Polls every 3 seconds for your Telegram replies
        },
        profile: {
            name: 'MD Omor Faruk Rahat',
            title: 'Software Engineering Undergraduate | Systems, AI & Mobile Developer',
            university: 'Zhengzhou University',
            location: 'Zhengzhou, Henan, China',
            email: 'rahatmdomorfaruk@gmail.com',
            phone: '(+86) 16696171024',
            wechat: 'omorfarukra',
            github: 'https://github.com/mdomorfarukrahat',
            linkedin: 'https://linkedin.com/in/omor-faruk-rahat',
            cv: 'CV v2.pdf',
            resume: 'Resume_1Page.pdf'
        },
        academics: {
            gpa: 3.08,
            average: 82,
            year3Gpa: 3.74,
            credits: 108.0
        }
    };

    // ============================================================
    // DATA OBJECTS
    // ============================================================
    const courseData = [
        { name: 'College Physics A (I)', score: 97, gp: '4.0' },
        { name: 'Mobile Programming (Android)', score: 92, gp: '4.0' },
        { name: 'Computer Organization & Architecture', score: 91, gp: '4.0' },
        { name: 'Object-Oriented Java Programming', score: 91, gp: '4.0' },
        { name: 'Computer Networks', score: 90, gp: '4.0' },
        { name: 'Introduction to Artificial Intelligence', score: 89, gp: '3.7' },
        { name: 'Discrete Mathematics', score: 88, gp: '3.7' },
        { name: 'College Physics Experiments A (I & II)', score: '87 / 86', gp: '3.7' },
        { name: 'High-Performance Computing (Parallel)', score: 86, gp: '3.7' },
        { name: 'C Programming Language', score: 87, gp: '3.7' },
        { name: 'Introduction to Embedded Systems', score: 85, gp: '3.7' },
        { name: 'Calculus A (I & II)', score: '82 / 81', gp: '3.2' }
    ];

    const skillsData = [
        {
            category: 'Programming Languages',
            skills: [
                { name: 'Python', level: 90 },
                { name: 'Java (SE & Android SDK)', level: 86 },
                { name: 'C', level: 78 },
                { name: 'SQL', level: 80 },
                { name: 'JavaScript / TypeScript', level: 82 }
            ]
        },
        {
            category: 'AI & Machine Learning',
            skills: [
                { name: 'PyTorch', level: 78 },
                { name: 'Scikit-Learn', level: 85 },
                { name: 'NumPy / Pandas / Matplotlib', level: 88 },
                { name: 'Data Preprocessing', level: 86 },
                { name: 'Model Evaluation & Gradient Descent', level: 75 }
            ]
        },
        {
            category: 'Systems & Hardware',
            skills: [
                { name: 'Linux / Unix Shell', level: 80 },
                { name: 'Android Studio / Android SDK', level: 88 },
                { name: 'STM32 Microcontrollers (ARM Cortex-M3)', level: 82 },
                { name: 'Keil uVision / Proteus', level: 76 },
                { name: 'Git / GitHub', level: 90 }
            ]
        },
        {
            category: 'Software Engineering & Authoring',
            skills: [
                { name: 'OOP & Design Patterns', level: 88 },
                { name: 'IEEE 830 SRS / System Modeling', level: 84 },
                { name: 'UML / PlantUML', level: 86 },
                { name: 'LaTeX / Overleaf', level: 92 },
                { name: 'Multithreading & Database Design', level: 80 }
            ]
        }
    ];

    const projectsData = [
        {
            id: 'p1',
            title: 'Smart Energy Meter Simulation & Embedded Telemetry System',
            role: 'Embedded Systems Lead',
            date: 'Nov 2025',
            categories: ['systems'],
            summary: 'Modeled an IoT-ready microcontroller firmware system capable of continuous 12-bit ADC voltage/current sampling, digital filtering, and real-time active power computation. Programmed hardware interrupt surge detection with serial UART telemetry and authored LaTeX specifications.',
            tech: ['STM32F103C8T6', 'Embedded C/C++', 'Keil uVision', 'Proteus', 'LaTeX'],
            github: 'https://github.com/mdomorfarukrahat',
            icon: 'fa-bolt'
        },
        {
            id: 'p2',
            title: 'Auto File Organizer Intelligent Desktop Automation Utility',
            role: 'Python Developer',
            date: 'June 2025',
            categories: ['software'],
            summary: 'Engineered an automated desktop application for rapid rule-based file categorization, batch indexing, and regex-based sorting. Implemented worker threading for non-blocking UI and collision handling.',
            tech: ['Python 3', 'Tkinter GUI', 'Multithreading', 'OOP Design Patterns'],
            github: 'https://github.com/mdomorfarukrahat',
            icon: 'fa-folder-open'
        },
        {
            id: 'p3',
            title: 'Campus Pre-Owned Market System (Software Architecture & Requirements)',
            role: 'Systems Modeler & Requirements Analyst',
            date: 'Sept 2025 – Jan 2026',
            categories: ['software'],
            summary: 'Formulated complete IEEE 830 Software Requirement Specifications for a campus trading ecosystem featuring escrow workflows, dispute arbitration, and detailed PlantUML behavioral models.',
            tech: ['IEEE 830 SRS', 'PlantUML', 'UML 2.0', 'Decision Trees'],
            github: 'https://github.com/mdomorfarukrahat',
            icon: 'fa-project-diagram'
        },
        {
            id: 'p4',
            title: 'Android Mobile Application Development Laboratory Suite',
            role: 'Mobile Application Developer',
            date: 'Oct – Dec 2025',
            categories: ['mobile'],
            summary: 'Built 7 modular Android laboratory applications exploring lifecycle management, SQLite storage, hardware sensors, and background RESTful consumption. Cohort-leading score: 92/100 (4.0 GP).',
            tech: ['Java', 'Android Studio', 'Android SDK', 'SQLite', 'XML', 'Background Services'],
            github: 'https://github.com/mdomorfarukrahat',
            icon: 'fa-mobile-alt'
        },
        {
            id: 'p5',
            title: 'Foundational Machine Learning Algorithms & Neural Network Exploration',
            role: 'Applied AI Researcher',
            date: 'July 2026',
            categories: ['ai'],
            summary: 'Implemented supervised and unsupervised algorithms from scratch. Prototyped Multi-Layer Perceptrons (MLP) and CNN architectures in PyTorch for classification benchmarks.',
            tech: ['Python 3', 'NumPy', 'Pandas', 'Scikit-Learn', 'PyTorch', 'Matplotlib', 'Jupyter'],
            github: 'https://github.com/mdomorfarukrahat',
            icon: 'fa-brain'
        }
    ];

    const servicesData = [
        {
            title: 'Full-Stack Web Development',
            description: 'Responsive, accessible frontends and structured backends — from prototype to deployment-ready code.',
            icon: 'fa-code'
        },
        {
            title: 'Desktop Automation & Python Utilities',
            description: 'Rule-based file organizers, data pipelines, scraping tools, and GUI utilities built with clean OOP.',
            icon: 'fa-robot'
        },
        {
            title: 'Embedded & IoT Prototyping',
            description: 'STM32 firmware, sensor interfacing, UART telemetry, and hardware-in-the-loop simulation.',
            icon: 'fa-microchip'
        },
        {
            title: 'Technical Documentation & System Modeling',
            description: 'IEEE 830 SRS, UML/PlantUML diagrams, LaTeX reports, and architecture decision records.',
            icon: 'fa-file-alt'
        }
    ];

    // ============================================================
    // UI RENDERING
    // ============================================================
    function renderCourses() {
        const container = document.getElementById('courseGrid');
        if (!container) return;
        container.innerHTML = courseData.map(course => `
            <div class="course-card reveal">
                <h4>${course.name}</h4>
                <div class="score">${course.score}</div>
                <div class="gp">GP: ${course.gp}</div>
            </div>
        `).join('');
    }

    function renderSkills() {
        const container = document.getElementById('skillsContainer');
        if (!container) return;
        container.innerHTML = skillsData.map(category => `
            <div class="skill-category">
                <h3>${category.category}</h3>
                <div class="skill-bars">
                    ${category.skills.map(skill => `
                        <div class="skill-bar">
                            <span>${skill.name}</span>
                            <span>${skill.level}%</span>
                            <div class="bar-fill"><div data-width="${skill.level}"></div></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    function renderProjects() {
        const container = document.getElementById('projectsGrid');
        if (!container) return;
        container.innerHTML = projectsData.map(project => `
            <div class="project-card" data-category="${project.categories.join(' ')}" data-id="${project.id}">
                <div class="project-image" aria-hidden="true">
                    <i class="fas ${project.icon} project-icon"></i>
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View ${project.title} on GitHub"><i class="fab fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <div class="project-role">${project.role} · ${project.date}</div>
                    <p>${project.summary}</p>
                    <div class="project-tags">
                        ${project.tech.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderServices() {
        const container = document.getElementById('servicesGrid');
        if (!container) return;
        container.innerHTML = servicesData.map(service => `
            <div class="service-card">
                <div class="service-icon"><i class="fas ${service.icon}" aria-hidden="true"></i></div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');
    }

    // ============================================================
    // TYPING EFFECT
    // ============================================================
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
        const texts = [CONFIG.profile.name, CONFIG.profile.title, 'Systems, AI & Mobile Developer'];
        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {
            const currentText = texts[textIndex];
            charIndex = deleting ? charIndex - 1 : charIndex + 1;
            typewriter.textContent = currentText.substring(0, charIndex);

            if (!deleting && charIndex === currentText.length) {
                deleting = true;
            } else if (deleting && charIndex === 0) {
                deleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(type, deleting ? 50 : 150);
        }

        setTimeout(type, 1000);
    }

    // ============================================================
    // CUSTOM CURSOR
    // ============================================================
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    // ============================================================
    // SCROLL REVEAL
    // ============================================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    function observeReveals() {
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    // ============================================================
    // NAVBAR SCROLL + MOBILE MENU
    // ============================================================
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', String(!expanded));
        });

        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ============================================================
    // SMOOTH NAVIGATION
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                target.focus({ preventScroll: true });
            }
        });
    });

    // ============================================================
    // SKILL BAR ANIMATION
    // ============================================================
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.bar-fill div[data-width]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersect
