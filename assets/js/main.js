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

    // 3. Active Nav Link on Scroll (for index.html)
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

    // 4. Contact Form Handling
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
