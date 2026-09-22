document.addEventListener('DOMContentLoaded', () => {
    // Typing effect
    const typewriter = document.querySelector('.typewriter');
    const texts = ['MD Omor Faruk Rahat', 'Software Engineering Student', 'Full-Stack Developer'];
    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typewriter.textContent = currentText.substring(0, charIndex);

        if (!deleting && charIndex === currentText.length) {
            deleting = true;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        const speed = deleting ? 50 : 150;
        setTimeout(type, speed);
    }

    // Initialize typing after DOM is ready
    setTimeout(type, 1000);

    // Cursor effect
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';

        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Scroll reveal
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.querySelector('.projects-grid');
    const projectsEmpty = document.querySelector('.projects-empty');

    // Must stay in sync with the .project-card transition duration in styles.css
    const FILTER_TRANSITION_MS = 300;

    // Timer that collapses the hidden cards once they have finished fading out.
    // It is always cancelled before a new filter pass, otherwise a stale timer
    // would collapse cards that the latest filter just brought back.
    let collapseTimer = null;

    function cardMatchesFilter(card, filter) {
        if (filter === 'all') {
            return true;
        }
        // data-category accepts several space separated categories per card
        const categories = (card.dataset.category || '').split(/\s+/);
        return categories.includes(filter);
    }

    function applyFilter(filter) {
        if (collapseTimer !== null) {
            clearTimeout(collapseTimer);
            collapseTimer = null;
        }

        // Step 1: put the matching cards back into the layout while they are
        // still transparent, so their fade-in can be transitioned
        projectCards.forEach(card => {
            if (cardMatchesFilter(card, filter)) {
                card.classList.remove('filter-collapsed');
            }
        });

        // Step 2: force a reflow so the browser registers the display change
        // before the opacity/transform values are toggled
        if (projectsGrid) {
            void projectsGrid.offsetWidth;
        }

        // Step 3: fade the matching cards in and the remaining ones out
        let visibleCount = 0;

        projectCards.forEach(card => {
            const matches = cardMatchesFilter(card, filter);
            card.classList.toggle('filter-hidden', !matches);
            if (matches) {
                visibleCount++;
            }
        });

        if (projectsEmpty) {
            projectsEmpty.hidden = visibleCount > 0;
        }

        // Step 4: take the faded out cards out of the grid flow
        collapseTimer = setTimeout(() => {
            collapseTimer = null;
            projectCards.forEach(card => {
                if (card.classList.contains('filter-hidden')) {
                    card.classList.add('filter-collapsed');
                }
            });
        }, FILTER_TRANSITION_MS);
    }

    filterBtns.forEach(btn => {
        // Expose the initial state to assistive technology
        btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');

        btn.addEventListener('click', () => {
            // Nothing to do when the already active filter is clicked again
            if (btn.classList.contains('active')) {
                return;
            }

            filterBtns.forEach(other => {
                const isActive = other === btn;
                other.classList.toggle('active', isActive);
                other.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });

            applyFilter(btn.dataset.filter);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simple validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Show success message (replace with actual form handling)
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Profile photo with a graceful fallback while profile-photo.jpg is missing
    const profilePhoto = document.querySelector('.about-image img');

    if (profilePhoto) {
        const avatarPlaceholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
            '<circle cx="100" cy="76" r="34" fill="#00f5d4"/>' +
            '<path d="M30 190c9-40 35-60 70-60s61 20 70 60z" fill="#00f5d4"/>' +
            '</svg>'
        );

        const showAvatarPlaceholder = () => {
            if (profilePhoto.classList.contains('is-placeholder')) {
                return;
            }
            profilePhoto.classList.add('is-placeholder');
            profilePhoto.src = avatarPlaceholder;
        };

        profilePhoto.addEventListener('error', showAvatarPlaceholder);

        // The error event can already have fired before this listener was attached
        if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
            showAvatarPlaceholder();
        }
    }

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});