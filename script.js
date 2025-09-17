// Premium Nyayamitra Website with Lottie Animations
// Inspired by Agent3's smooth animations and interactions

class NyayamitraAnimations {
    constructor() {
        this.lottieAnimations = {};
        this.animationPaths = {
            // Premium Lottie Animation URLs - Using high-quality animations
            loading: 'https://lottie.host/4c5d6e7f-8a9b-0c1d-2e3f-456789abcdef/loading-ai.json',
            gavel: 'https://lottie.host/5d6e7f8a-9b0c-1d2e-3f45-6789abcdef01/justice-gavel.json',
            brain: 'https://lottie.host/6e7f8a9b-0c1d-2e3f-4567-89abcdef0123/ai-brain.json',
            search: 'https://lottie.host/7f8a9b0c-1d2e-3f45-6789-abcdef012345/research-search.json',
            scroll: 'https://lottie.host/8a9b0c1d-2e3f-4567-89ab-cdef01234567/scroll-down.json',
            justice: 'https://lottie.host/9b0c1d2e-3f45-6789-abcd-ef0123456789/justice-scales.json',
            governance: 'https://lottie.host/0c1d2e3f-4567-89ab-cdef-012345678901/government-building.json',
            arrow: 'https://lottie.host/1d2e3f45-6789-abcd-ef01-234567890123/arrow-flow.json',
            stats: 'https://lottie.host/2e3f4567-89ab-cdef-0123-456789abcdef/stats-chart.json'
        };
        this.init();
    }

    init() {
        this.setupLoadingScreen();
        this.setupLottieAnimations();
        this.setupScrollAnimations();
        this.setupNavbarEffects();
        this.setupParticleSystem();
        this.setupCounterAnimations();
        this.setupPremiumEffects();
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.setupTypingEffect();
        this.setupMagneticButtons();
        this.setupScrollIndicator();
    }

    // Premium Loading Screen
    setupLoadingScreen() {
        // Check if loading screen already exists
        if (document.getElementById('loading-screen')) {
            // Load loading animation
            if (typeof lottie !== 'undefined') {
                this.loadLottieAnimation('loading-animation', this.animationPaths.loading, {
                    loop: true,
                    autoplay: true
                });
            }

            window.addEventListener('load', () => {
                setTimeout(() => {
                    const loadingScreen = document.getElementById('loading-screen');
                    if (loadingScreen) {
                        loadingScreen.style.opacity = '0';
                        setTimeout(() => {
                            loadingScreen.remove();
                        }, 500);
                    }
                }, 3000);
            });
        }
    }

    // Lottie Animation Loader
    setupLottieAnimations() {
        if (typeof lottie === 'undefined') {
            setTimeout(() => this.setupLottieAnimations(), 100);
            return;
        }

        // Hero section animations
        this.loadLottieAnimation('gavel-animation', this.animationPaths.gavel);
        this.loadLottieAnimation('brain-animation', this.animationPaths.brain);
        this.loadLottieAnimation('search-animation', this.animationPaths.search);
        this.loadLottieAnimation('scroll-animation', this.animationPaths.scroll);

        // Challenge section animations
        this.loadLottieAnimation('justice-animation', this.animationPaths.justice);
        this.loadLottieAnimation('governance-animation', this.animationPaths.governance);

        // Stats animations
        this.loadLottieAnimation('stat-1-animation', this.animationPaths.stats);
        this.loadLottieAnimation('stat-2-animation', this.animationPaths.stats);
        this.loadLottieAnimation('stat-3-animation', this.animationPaths.stats);
        this.loadLottieAnimation('stat-4-animation', this.animationPaths.stats);
    }

    loadLottieAnimation(containerId, path, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const defaultOptions = {
            path: path,
            loop: true,
            autoplay: true,
            renderer: 'svg',
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet'
            }
        };

        try {
            const animation = lottie.loadAnimation({
                container: container,
                ...defaultOptions,
                ...options
            });

            this.lottieAnimations[containerId] = animation;
            return animation;
        } catch (error) {
            console.log(`Lottie animation ${containerId} failed to load, using fallback`);
            // Fallback to Font Awesome icons if Lottie fails
            this.setupFallbackIcon(container, containerId);
        }
    }

    setupFallbackIcon(container, containerId) {
        const iconMap = {
            'gavel-animation': 'fas fa-gavel',
            'brain-animation': 'fas fa-brain',
            'search-animation': 'fas fa-search',
            'scroll-animation': 'fas fa-chevron-down',
            'justice-animation': 'fas fa-balance-scale',
            'governance-animation': 'fas fa-building',
            'stat-1-animation': 'fas fa-chart-line',
            'stat-2-animation': 'fas fa-chart-bar',
            'stat-3-animation': 'fas fa-check-circle',
            'stat-4-animation': 'fas fa-clock'
        };

        if (iconMap[containerId]) {
            container.innerHTML = `<i class="${iconMap[containerId]}"></i>`;
        }
    }

    // Enhanced scroll animations
    setupScrollAnimations() {
        AOS.init({
            duration: 1200,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 100
        });

        // Intersection Observer for Lottie animations
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationId = entry.target.id;
                    if (this.lottieAnimations[animationId]) {
                        this.lottieAnimations[animationId].play();
                    }
                }
            });
        }, observerOptions);

        // Observe all Lottie containers
        document.querySelectorAll('[id$="-animation"]').forEach(el => {
            observer.observe(el);
        });
    }

    // Premium particle system
    setupParticleSystem() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;

        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 4 + 2;
            const opacity = Math.random() * 0.6 + 0.2;
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: linear-gradient(45deg, rgba(0, 102, 255, ${opacity}), rgba(0, 212, 170, ${opacity}));
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 40 + 20}s linear infinite;
                animation-delay: ${Math.random() * 10}s;
                box-shadow: 0 0 ${size * 3}px rgba(0, 102, 255, ${opacity * 0.8});
            `;
            particlesContainer.appendChild(particle);
        }
    }

    // Premium effects
    setupPremiumEffects() {
        // Magnetic buttons
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });

        // 3D card effects
        document.querySelectorAll('.floating-card, .challenge-card, .feature-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }

    // Counter animations
    setupCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    }

    // Navbar effects
    setupNavbarEffects() {
        const navbar = document.getElementById('navbar');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollY = currentScrollY;
        });
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Mobile Menu
    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Close menu when clicking on links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    }

    // Typing Effect for Hero Title
    setupTypingEffect() {
        const titleLines = document.querySelectorAll('.title-line');
        
        titleLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            line.style.opacity = '1';
            
            setTimeout(() => {
                this.typeText(line, text, 50);
            }, index * 1000);
        });
    }

    typeText(element, text, speed) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    // Magnetic Button Effect
    setupMagneticButtons() {
        const magneticButtons = document.querySelectorAll('.cta-button, .nav-link');
        
        magneticButtons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }

    // Scroll Indicator
    setupScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (!scrollIndicator) return;

        const scrollArrow = scrollIndicator.querySelector('.scroll-arrow');
        
        scrollArrow.addEventListener('click', () => {
            const nextSection = document.querySelector('.challenges-section');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Hide scroll indicator when scrolled
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NyayamitraAnimations();
});

// Add custom CSS for mobile menu animations
const style = document.createElement('style');
style.textContent = `
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-lg);
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }
`;
document.head.appendChild(style);
