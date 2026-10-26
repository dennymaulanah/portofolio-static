/**
 * Main JavaScript for Azeria Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Copyright Year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 3. Clean URL Manager: Remove '#' (hash) and '.html' from address bar
    const cleanAddressBar = () => {
        try {
            // Remove hash (#) from URL bar without reloading
            if (window.location.hash) {
                const cleanUrl = window.location.pathname + window.location.search;
                window.history.replaceState(null, document.title, cleanUrl);
            }
            // If running on HTTP/HTTPS (e.g. localhost or azeria.web.id), also strip index.html or .html
            if (window.location.protocol.startsWith('http')) {
                const currentPath = window.location.pathname;
                let cleanPath = currentPath
                    .replace(/\/index\.html$/, '/')
                    .replace(/\.html$/, '');
                if (cleanPath !== currentPath) {
                    window.history.replaceState(null, document.title, cleanPath + window.location.search);
                }
            }
        } catch (e) {
            // Gracefully handled if browser policy restricts
        }
    };

    // If page was loaded with a hash fragment (e.g. #home or #projects), scroll to it and immediately strip the '#'
    if (window.location.hash) {
        const initialTargetId = window.location.hash.substring(1);
        const initialTarget = document.getElementById(initialTargetId);
        if (initialTarget) {
            setTimeout(() => {
                initialTarget.scrollIntoView({ behavior: 'smooth' });
                cleanAddressBar();
            }, 60);
        } else {
            cleanAddressBar();
        }
    } else {
        cleanAddressBar();
    }

    // 4. Intercept Internal Section Anchor Clicks: Smooth Scroll without leaving '#' in URL bar
    const internalAnchors = document.querySelectorAll('a[href^="#"]');
    internalAnchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
                cleanAddressBar();
            }
        });
    });

    // 5. Active Nav Link on Scroll (for index.html)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');

    if (sections.length > 0 && navLinks.length > 0) {
        const updateActiveNav = () => {
            const scrollY = window.pageYOffset;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 120;
                const sectionId = current.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href === `#${sectionId}`) {
                            link.classList.add('text-primary', 'dark:text-primary-fixed', 'font-bold', 'border-b-2', 'border-primary');
                            link.classList.remove('text-on-surface-variant', 'dark:text-on-secondary-fixed-variant');
                        } else {
                            link.classList.remove('text-primary', 'dark:text-primary-fixed', 'font-bold', 'border-b-2', 'border-primary');
                            link.classList.add('text-on-surface-variant', 'dark:text-on-secondary-fixed-variant');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', updateActiveNav, { passive: true });
        updateActiveNav();
    }

    // 6. Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalContent = submitBtn ? submitBtn.innerHTML : 'Send Message';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `Message Sent! <span class="material-symbols-outlined text-sm">check_circle</span>`;
                submitBtn.classList.add('bg-green-600');
            }

            setTimeout(() => {
                contactForm.reset();
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalContent;
                    submitBtn.classList.remove('bg-green-600');
                }
            }, 3000);
        });
    }
});
