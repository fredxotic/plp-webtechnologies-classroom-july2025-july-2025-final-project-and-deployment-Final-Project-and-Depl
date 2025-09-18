document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Elements
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('main section');
    const nav = document.querySelector('nav');
    const skillsSection = document.getElementById('skills');
    const loadingScreen = document.getElementById('loading');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const backToTop = document.getElementById('backToTop');
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const downloadResume = document.getElementById('downloadResume');
    const counters = document.querySelectorAll('.counter');
    const faqItems = document.querySelectorAll('.faq-item');
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Hide loading screen after page loads
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);

    // Theme toggle functionality
    let isDarkMode = true;
    
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        themeIcon.setAttribute('data-lucide', isDarkMode ? 'sun' : 'moon');
        lucide.createIcons();
        
        // Save theme preference to localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkMode = savedTheme === 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeIcon.setAttribute('data-lucide', isDarkMode ? 'sun' : 'moon');
        lucide.createIcons();
    }

    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.remove('opacity-0', 'invisible');
            backToTop.classList.add('opacity-100', 'visible');
        } else {
            backToTop.classList.remove('opacity-100', 'visible');
            backToTop.classList.add('opacity-0', 'invisible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile menu functionality
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Project modals
    const projectData = {
        portfolio: {
            title: "Personal Portfolio Website",
            content: `
                <p class="mb-4">This project involves designing and building a personal portfolio website to showcase my education, skills, and career journey. The website is built using HTML, CSS, and JavaScript, with plans to integrate Python for backend functionality in the future.</p>
                <p class="mb-4"><strong>Technologies Used:</strong> HTML, CSS, JavaScript, Tailwind CSS, Lucide Icons</p>
                <p class="mb-4"><strong>Key Features:</strong></p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Responsive design that works on all devices</li>
                    <li>Dark/light mode toggle</li>
                    <li>Animated skill progress bars</li>
                    <li>Interactive project cards with modals</li>
                    <li>Contact form with validation</li>
                </ul>
                <p><strong>Status:</strong> In Progress</p>
            `
        },
        'data-analysis': {
            title: "Data Analysis Mini-Project",
            content: `
                <p class="mb-4">This project explores data analysis with Python (Pandas, Matplotlib) and Excel. The goal is to analyze financial or business datasets to extract meaningful insights and demonstrate practical application of analytical tools.</p>
                <p class="mb-4"><strong>Technologies Used:</strong> Python, Pandas, NumPy, Matplotlib, Seaborn, Excel</p>
                <p class="mb-4"><strong>Key Features:</strong></p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Data cleaning and preprocessing</li>
                    <li>Exploratory data analysis (EDA)</li>
                    <li>Data visualization with charts and graphs</li>
                    <li>Statistical analysis and insights generation</li>
                    <li>Report generation with key findings</li>
                </ul>
                <p><strong>Status:</strong> Planned</p>
            `
        },
        plp: {
            title: "PLP Academy Collaborative Project",
            content: `
                <p class="mb-4">This is a collaborative project with peers from the PLP Academy program. The focus is on solving a real-world problem using programming and digital tools, with expected outcomes including enhanced teamwork, problem-solving, and coding skills.</p>
                <p class="mb-4"><strong>Technologies Used:</strong> To be determined based on project requirements</p>
                <p class="mb-4"><strong>Key Features:</strong></p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Team collaboration and version control with Git</li>
                    <li>Problem-solving through code</li>
                    <li>Agile development methodology</li>
                    <li>Presentation of final project to peers and instructors</li>
                </ul>
                <p><strong>Status:</strong> Upcoming</p>
            `
        },
        'web-dev': {
            title: "Web Development Practice Projects",
            content: `
                <p class="mb-4">This category includes various small applications and websites built to strengthen frontend and backend knowledge. Examples include a task manager app, a personal blog, and a finance tracker.</p>
                <p class="mb-4"><strong>Technologies Used:</strong> HTML, CSS, JavaScript, React (planned), Node.js (planned)</p>
                <p class="mb-4"><strong>Key Features:</strong></p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Responsive web design principles</li>
                    <li>Interactive user interfaces</li>
                    <li>Form validation and user input handling</li>
                    <li>API integration (for some projects)</li>
                    <li>Deployment to web servers</li>
                </ul>
                <p><strong>Status:</strong> Ongoing</p>
            `
        },
        finance: {
            title: "Financial Accounting Simulation",
            content: `
                <p class="mb-4">This project involves developing a mock project that simulates bookkeeping and financial reporting using Excel and Python. The goal is to integrate business knowledge from BCom/CPA with technical tools to automate accounting processes.</p>
                <p class="mb-4"><strong>Technologies Used:</strong> Excel, Python, Pandas, possibly a database system</p>
                <p class="mb-4"><strong>Key Features:</strong></p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Automated data entry and validation</li>
                    <li>Financial statement generation</li>
                    <li>Budget tracking and forecasting</li>
                    <li>Data visualization for financial metrics</li>
                    <li>Report generation for accounting purposes</li>
                </ul>
                <p><strong>Status:</strong> Planned</p>
            `
        },
        'case-study': {
            title: "Business Case Study Analysis",
            content: `
                <p class="mb-4">This project involves analyzing real-world business cases to understand financial decision-making, market strategies, and operational challenges. Applying theoretical knowledge from BCom studies to practical business scenarios.</p>
                <p class="mb-4"><strong>Technologies Used:</strong> Excel, Business Analysis Frameworks, Financial Modeling</p>
                <p class="mb-4"><strong>Key Features:</strong></p>
                <ul class="list-disc pl-6 mb-4">
                    <li>Financial ratio analysis</li>
                    <li>Market research and competitive analysis</li>
                    <li>Strategic recommendations</li>
                    <li>Presentation of findings</li>
                </ul>
                <p><strong>Status:</strong> Ongoing</p>
            `
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalContent.innerHTML = project.content;
                
                projectModal.classList.add('active');
                projectModal.classList.remove('invisible');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            projectModal.classList.remove('active');
            setTimeout(() => {
                projectModal.classList.add('invisible');
                document.body.style.overflow = 'auto';
            }, 300);
        });
    }

    // Close modal when clicking outside
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeModal.click();
            }
        });
    }

    // Contact form validation
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Name validation
            if (!nameInput.value.trim()) {
                nameError.classList.remove('hidden');
                isValid = false;
            } else {
                nameError.classList.add('hidden');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.classList.remove('hidden');
                isValid = false;
            } else {
                emailError.classList.add('hidden');
            }

            // Message validation
            if (!messageInput.value.trim()) {
                messageError.classList.remove('hidden');
                isValid = false;
            } else {
                messageError.classList.add('hidden');
            }

            if (isValid) {
                // Here you would typically send the form data to a server
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    // Download resume functionality
    if (downloadResume) {
        downloadResume.addEventListener('click', () => {
            // In a real implementation, this would download your actual resume
            alert('Resume download functionality would be implemented here. For now, please contact me directly for my resume.');
        });
    }

    // Counter animation
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(() => animateCounters(), 20);
            } else {
                counter.innerText = target;
            }
        });
    };
    
    // Function to activate the navigation item based on the current page
    const activateNavItem = () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                item.classList.add('bg-[var(--accent)]', 'text-white', 'shadow-lg');
                item.classList.remove('text-[var(--text-secondary)]', 'hover:bg-[var(--bg-secondary)]', 'hover:text-[var(--text-primary)]');
            } else {
                item.classList.remove('bg-[var(--accent)]', 'text-white', 'shadow-lg');
                item.classList.add('text-[var(--text-secondary)]', 'hover:bg-[var(--bg-secondary)]', 'hover:text-[var(--text-primary)]');
            }
        });
    };

    // Function to animate skill bars when the skills section is in view
    const animateSkills = () => {
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;

        const skillBars = skillsSection.querySelectorAll('.animate-progress');

        const applyWidths = () => {
            skillBars.forEach((bar) => {
                const level = bar.getAttribute('data-skill-level');
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = level;
                }, 50);
            });
        };
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        applyWidths();
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            observer.observe(skillsSection);
        } else {
            // Fallback for older browsers
            applyWidths();
        }
    };

    // Function to check if counters should be animated
    const checkCounters = () => {
        const aboutSection = document.getElementById('about') || document.getElementById('about-preview');
        if (aboutSection) {
            const aboutInView = aboutSection.getBoundingClientRect().top < (window.innerHeight / 1.5) && aboutSection.getBoundingClientRect().bottom > 0;

            if (aboutInView) {
                animateCounters();
                window.removeEventListener('scroll', checkCounters);
            }
        }
    };
    
    // FAQ accordion functionality
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't already active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    // Handle active navigation item and animations on scroll
    const handleScroll = () => {
        activateNavItem();
        // The IntersectionObserver will handle the skills animation, so we don't need to call it here
        checkCounters();
    };

    // Initialize page
    activateNavItem();
    animateSkills();
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the active nav item and check for animations on load

    // Close mobile menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (mobileMenu.classList.contains('active')) {
                closeMenu.click();
            }
            if (projectModal && projectModal.classList.contains('active')) {
                closeModal.click();
            }
        }
    });
});