/**
 * Portfolio Application Script
 * Production-ready frontend logic for MD Omor Faruk Rahat's personal portfolio.
 *
 * SECURITY: This file is public. No Telegram Bot Tokens, API keys, or chat IDs
 * are hardcoded here. All runtime configuration lives in the top-level CONFIG
 * object below, which you must populate with your own endpoint values before
 * deploying.
 */

// ============================================================================
// TOP-LEVEL CONFIGURATION (Update placeholders before deployment)
// ============================================================================
const CONFIG = {
    formspree: {
        endpoint: 'https://formspree.io/f/YOUR_FORMSPREE_ID'
    },
    chatProxy: {
        endpoint: 'https://YOUR_WORKER_SUBDOMAIN.workers.dev/chat',
        enabled: true
    },
    profile: {
        name: 'MD Omor Faruk Rahat',
        title: 'Software Engineering Undergraduate | Systems, AI & Mobile Developer',
        email: 'rahatmdomorfaruk@gmail.com',
        phone: '(+86) 16696171024',
        wechat: 'omorfarukra',
        github: 'https://github.com/mdomorfarukrahat',
        linkedin: 'https://linkedin.com/in/omor-faruk-rahat',
        cv: 'CV v2.pdf',
        resume: 'resume.pdf'
    }
};

// ============================================================================
// STATIC DATA (decoupled from presentation for future native-client reuse)
// ============================================================================
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
        github: CONFIG.profile.github,
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
        github: CONFIG.profile.github,
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
        github: CONFIG.profile.github,
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
        github: CONFIG.profile.github,
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
        github: CONFIG.profile.github,
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

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Expose config for debugging or future integrations
    window.PORTFOLIO_CONFIG = CONFIG;

    // ------------------------------------------------------------------
    // UI RENDERING
    // ------------------------------------------------------------------
    function renderCourses() {
        const container = document.getElementById('courseGrid');
        if (!container) return;
        container.innerHTML = courseData.map(course => `
            <div class="course-card reveal">
                <h4>${escapeHtml(course.name)}</h4>
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
                <h3>${escapeHtml(category.category)}</h3>
                <div class="skill-bars">
                    ${category.skills.map(skill => `
                        <div class="skill-bar">
                            <span>${escapeHtml(skill.name)}</span>
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
                            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View ${escapeHtml(project.title)} on GitHub"><i class="fab fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${escapeHtml(project.title)}</h3>
                    <div class="project-role">${escapeHtml(project.role)} · ${escapeHtml(project.date)}</div>
                    <p>${escapeHtml(project.summary)}</p>
                    <div class="project-tags">
                        ${project.tech.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}
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
                <h3>${escapeHtml(service.title)}</h3>
                <p>${escapeHtml(service.description)}</p>
            </div>
        `).join('');
    }

    // ------------------------------------------------------------------
    // TYPING EFFECT
    // ------------------------------------------------------------------
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

    // ------------------------------------------------------------------
    // CUSTOM CURSOR
    // ------------------------------------------------------------------
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

    // ------------------------------------------------------------------
    // SCROLL REVEAL
    // ------------------------------------------------------------------
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

    // ------------------------------------------------------------------
    // NAVBAR SCROLL + MOBILE MENU
    // ------------------------------------------------------------------
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

    // ------------------------------------------------------------------
    // SMOOTH NAVIGATION & ACCESSIBILITY
    // ------------------------------------------------------------------
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

    // ------------------------------------------------------------------
    // SKILL BAR ANIMATION
    // ------------------------------------------------------------------
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.bar-fill div[data-width]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = `${width}%`;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    // ------------------------------------------------------------------
    // HERO CANVAS PARTICLE CONSTELLATION
    // ------------------------------------------------------------------
    function initHeroCanvas() {
        const canvas = document.getElementById('heroCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animationId;

        const isMobile = window.matchMedia('(pointer: coarse)').matches;
        const particleCount = isMobile ? 35 : 70;
        const connectionDistance = 110;
        const mouseDistance = 160;

        let mouse = { x: null, y: null };

        function resize() {
            const parent = canvas.parentElement;
            width = parent.clientWidth;
            height = parent.clientHeight;
            canvas.width = width;
            canvas.height = height;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouseDistance) {
                        const force = (mouseDistance - distance) / mouseDistance;
                        this.x -= dx * force * 0.02;
                        this.y -= dy * force * 0.02;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 245, 212, 0.6)';
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - distance / connectionDistance;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 245, 212, ${opacity * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            drawConnections();
            animationId = requestAnimationFrame(animate);
        }

        resize();
        initParticles();
        animate();

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        canvas.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        const visibilityObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!animationId) animate();
                } else {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
            });
        }, { threshold: 0.1 });

        visibilityObserver.observe(canvas);
    }

    // ------------------------------------------------------------------
    // PROJECT FILTERING
    // ------------------------------------------------------------------
    const FILTER_TRANSITION_MS = 300;
    let collapseTimer = null;

    function cardMatchesFilter(card, filter) {
        if (filter === 'all') return true;
        const categories = (card.dataset.category || '').split(/\s+/);
        return categories.includes(filter);
    }

    function applyFilter(projectCards, projectsEmpty, filter) {
        if (collapseTimer !== null) {
            clearTimeout(collapseTimer);
            collapseTimer = null;
        }

        projectCards.forEach(card => {
            if (cardMatchesFilter(card, filter)) {
                card.classList.remove('filter-collapsed');
            }
        });

        const grid = document.querySelector('.projects-grid');
        if (grid) void grid.offsetWidth;

        let visibleCount = 0;
        projectCards.forEach(card => {
            const matches = cardMatchesFilter(card, filter);
            card.classList.toggle('filter-hidden', !matches);
            if (matches) visibleCount++;
        });

        if (projectsEmpty) projectsEmpty.hidden = visibleCount > 0;

        collapseTimer = setTimeout(() => {
            collapseTimer = null;
            projectCards.forEach(card => {
                if (card.classList.contains('filter-hidden')) {
                    card.classList.add('filter-collapsed');
                }
            });
        }, FILTER_TRANSITION_MS);
    }

    function initProjectFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        const projectsEmpty = document.querySelector('.projects-empty');

        filterBtns.forEach(btn => {
            btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) return;

                filterBtns.forEach(other => {
                    const active = other === btn;
                    other.classList.toggle('active', active);
                    other.setAttribute('aria-pressed', active ? 'true' : 'false');
                });

                applyFilter(projectCards, projectsEmpty, btn.dataset.filter);
            });
        });
    }

    // ------------------------------------------------------------------
    // CONTACT FORM (Formspree)
    // ------------------------------------------------------------------
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        const status = form.querySelector('.form-status');
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get('name')?.toString().trim();
            const email = formData.get('email')?.toString().trim();
            const subject = formData.get('subject')?.toString().trim();
            const message = formData.get('message')?.toString().trim();

            if (!name || !email || !subject || !message) {
                showStatus(status, 'Please fill in all required fields.', 'error');
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }

            try {
                const response = await fetch(CONFIG.formspree.endpoint, {
                    method: 'POST',
                    body: formData,
                    headers: { Accept: 'application/json' }
                });

                if (response.ok) {
                    showStatus(status, 'Thanks for reaching out! I will get back to you soon.', 'success');
                    form.reset();
                } else {
                    const data = await response.json().catch(() => ({}));
                    showStatus(status, data.error || 'Something went wrong. Please try again.', 'error');
                }
            } catch (err) {
                showStatus(status, 'Network error. Please check your connection and try again.', 'error');
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            }
        });
    }

    function showStatus(element, message, type) {
        if (!element) return;
        element.textContent = message;
        element.className = `form-status ${type}`;
        setTimeout(() => {
            element.className = 'form-status';
        }, 6000);
    }

    // ------------------------------------------------------------------
    // CHAT WIDGET + PROXY (No secrets stored here)
    // ------------------------------------------------------------------
    function initChatWidget() {
        const chatToggle = document.getElementById('chatToggle');
        const chatClose = document.getElementById('chatClose');
        const chatBox = document.getElementById('chatBox');
        const chatForm = document.getElementById('chatForm');
        const chatBody = document.getElementById('chatBody');
        const chatUnread = document.getElementById('chatUnread');

        if (!chatToggle || !chatBox || !chatForm || !chatBody) return;

        function openChat() {
            chatBox.hidden = false;
            requestAnimationFrame(() => chatBox.classList.add('open'));
            chatToggle.setAttribute('aria-expanded', 'true');
            if (chatUnread) {
                chatUnread.classList.remove('visible');
                chatUnread.textContent = '0';
            }
        }

        function closeChat() {
            chatBox.classList.remove('open');
            setTimeout(() => {
                if (!chatBox.classList.contains('open')) chatBox.hidden = true;
            }, 300);
            chatToggle.setAttribute('aria-expanded', 'false');
        }

        chatToggle.addEventListener('click', () => {
            if (chatBox.classList.contains('open')) closeChat();
            else openChat();
        });

        chatClose.addEventListener('click', closeChat);

        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('chatName');
            const messageInput = document.getElementById('chatMessage');
            const name = nameInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !message) return;

            appendMessage('user', message);
            nameInput.value = '';
            messageInput.value = '';

            const payload = {
                name,
                message,
                page: window.location.href,
                timestamp: new Date().toISOString()
            };

            if (CONFIG.chatProxy.enabled && CONFIG.chatProxy.endpoint) {
                try {
                    const response = await fetch(CONFIG.chatProxy.endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (!response.ok) {
                        console.error('Chat proxy returned non-OK:', response.status);
                    }
                } catch (err) {
                    console.error('Chat proxy request failed:', err);
                }
            } else {
                console.info('Chat proxy disabled. Payload would be sent to:', CONFIG.chatProxy.endpoint, payload);
            }

            setTimeout(() => {
                appendMessage('bot', 'Message received. I will be notified and reply as soon as possible.');
            }, 800);
        });
    }

    function appendMessage(sender, text) {
        const chatBody = document.getElementById('chatBody');
        if (!chatBody) return;
        const message = document.createElement('div');
        message.className = `chat-message ${sender}`;
        message.textContent = text;
        chatBody.appendChild(message);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // ------------------------------------------------------------------
    // SCHEDULE MODAL
    // ------------------------------------------------------------------
    function initScheduleModal() {
        const scheduleBtn = document.getElementById('scheduleBtn');
        const scheduleModal = document.getElementById('scheduleModal');
        const scheduleClose = document.getElementById('scheduleClose');
        const scheduleBackdrop = document.getElementById('scheduleBackdrop');

        if (!scheduleBtn || !scheduleModal) return;

        function open() {
            scheduleModal.hidden = false;
            requestAnimationFrame(() => scheduleModal.classList.add('open'));
        }

        function close() {
            scheduleModal.classList.remove('open');
            setTimeout(() => {
                if (!scheduleModal.classList.contains('open')) scheduleModal.hidden = true;
            }, 300);
        }

        scheduleBtn.addEventListener('click', open);
        scheduleClose.addEventListener('click', close);
        scheduleBackdrop.addEventListener('click', close);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && scheduleModal.classList.contains('open')) close();
        });
    }

    // ------------------------------------------------------------------
    // METRIC COUNTERS
    // ------------------------------------------------------------------
    function initMetricCounters() {
        const counters = document.querySelectorAll('.metric-value[data-target]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseFloat(el.dataset.target);
                    const suffix = el.dataset.suffix || '';
                    const isDecimal = target % 1 !== 0;
                    const duration = 1500;
                    const startTime = performance.now();

                    function update(now) {
                        const progress = Math.min((now - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const value = target * eased;
                        el.textContent = isDecimal ? value.toFixed(2) + suffix : Math.round(value) + suffix;
                        if (progress < 1) requestAnimationFrame(update);
                    }

                    requestAnimationFrame(update);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    // ------------------------------------------------------------------
    // PROFILE PHOTO FALLBACK
    // ------------------------------------------------------------------
    function initProfilePhotoFallback() {
        const profilePhoto = document.querySelector('.about-image img');
        if (!profilePhoto) return;

        const avatarPlaceholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
            '<circle cx="100" cy="76" r="34" fill="#00f5d4"/>' +
            '<path d="M30 190c9-40 35-60 70-60s61 20 70 60z" fill="#00f5d4"/>' +
            '</svg>'
        );

        const showAvatarPlaceholder = () => {
            if (profilePhoto.classList.contains('is-placeholder')) return;
            profilePhoto.classList.add('is-placeholder');
            profilePhoto.src = avatarPlaceholder;
        };

        profilePhoto.addEventListener('error', showAvatarPlaceholder);
        if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
            showAvatarPlaceholder();
        }
    }

    // ------------------------------------------------------------------
    // FOOTER YEAR
    // ------------------------------------------------------------------
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // ------------------------------------------------------------------
    // ESCAPE HELPER
    // ------------------------------------------------------------------
    function escapeHtml(text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // ------------------------------------------------------------------
    // BOOT
    // ------------------------------------------------------------------
    renderCourses();
    renderSkills();
    renderProjects();
    renderServices();
    observeReveals();
    animateSkillBars();
    initHeroCanvas();
    initProjectFilter();
    initContactForm();
    initChatWidget();
    initScheduleModal();
    initMetricCounters();
    initProfilePhotoFallback();
});
