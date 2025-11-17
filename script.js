// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
const animateElements = document.querySelectorAll('.solution-card, .strategy-card, .benefit-item, .stat-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Form handling removed - replaced with WhatsApp button

// Animated Counter for Stats
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const text = statNumber.textContent;
                // Extract number from text like "$400B+" or "90%"
                const match = text.match(/\d+/);
                if (match) {
                    const targetNumber = parseInt(match[0]);
                    const suffix = text.replace(/\d+/g, '');
                    const prefix = text.split(/\d+/)[0];

                    // Animate the number
                    let current = 0;
                    const duration = 2000;
                    const increment = targetNumber / (duration / 16);

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= targetNumber) {
                            statNumber.textContent = prefix + targetNumber + suffix.replace(targetNumber.toString(), '');
                            clearInterval(timer);
                        } else {
                            statNumber.textContent = prefix + Math.floor(current) + suffix.replace(targetNumber.toString(), '');
                        }
                    }, 16);
                }
                statsObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

// Observe all stat items
document.querySelectorAll('.stat-item, .visual-stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Add gradient for SVG circle
const createGradientForCircle = () => {
    const svg = document.querySelector('.stat-circle svg');
    if (svg && !svg.querySelector('defs')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'gradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#58b6b6;stop-opacity:1');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:#8d5afa;stop-opacity:1');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
};

// Initialize gradient on load
window.addEventListener('DOMContentLoaded', createGradientForCircle);

// Parallax Effect for Hero Orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');

    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add hover effect to solution cards
const solutionCards = document.querySelectorAll('.solution-card');
solutionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Timeline items animation
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }, index * 100);
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    timelineObserver.observe(item);
});

// Initialize contact molecular viewer
function initContactMoleculeViewer() {
    const viewerElement = document.getElementById('contact-molecule-viewer');

    if (viewerElement && typeof $3Dmol !== 'undefined') {
        const config = { backgroundColor: 'white' };
        const viewer = $3Dmol.createViewer(viewerElement, config);

        // Caffeine molecule - commonly used pharmaceutical compound
        const caffeinePDB = `COMPND    CAFFEINE
HETATM    1  N1  CAF     1       1.372   0.143   0.000  1.00  0.00           N
HETATM    2  C1  CAF     1       0.707  -1.034   0.000  1.00  0.00           C
HETATM    3  N2  CAF     1      -0.640  -0.924   0.000  1.00  0.00           N
HETATM    4  C2  CAF     1      -0.988   0.372   0.000  1.00  0.00           C
HETATM    5  C3  CAF     1       0.152   1.153   0.000  1.00  0.00           C
HETATM    6  N3  CAF     1       0.178   2.482   0.000  1.00  0.00           N
HETATM    7  C4  CAF     1      -2.344   0.854   0.000  1.00  0.00           C
HETATM    8  O1  CAF     1      -3.349   0.146   0.000  1.00  0.00           O
HETATM    9  N4  CAF     1      -2.384   2.214   0.000  1.00  0.00           N
HETATM   10  C5  CAF     1      -1.147   2.825   0.000  1.00  0.00           C
HETATM   11  O2  CAF     1      -1.039   4.043   0.000  1.00  0.00           O
HETATM   12  C6  CAF     1       2.823   0.249   0.000  1.00  0.00           C
HETATM   13  C7  CAF     1      -1.574  -2.054   0.000  1.00  0.00           C
HETATM   14  C8  CAF     1      -3.630   2.950   0.000  1.00  0.00           C
CONECT    1    2    5   12
CONECT    2    1    3
CONECT    3    2    4   13
CONECT    4    3    5    7
CONECT    5    1    4    6
CONECT    6    5   10
CONECT    7    4    8    9
CONECT    8    7
CONECT    9    7   10   14
CONECT   10    6    9   11
CONECT   11   10
CONECT   12    1
CONECT   13    3
CONECT   14    9
END`;

        viewer.addModel(caffeinePDB, 'pdb');
        viewer.setStyle({}, {
            stick: { colorscheme: 'Jmol', radius: 0.18 },
            sphere: { scale: 0.3, colorscheme: 'Jmol' }
        });
        viewer.zoomTo();
        viewer.render();
        viewer.zoom(1.3, 1000);

        // Rotate the molecule continuously
        setInterval(() => {
            viewer.rotate(1, 'y');
        }, 50);
    }
}

// Initialize molecular viewer when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for the element to be ready
    setTimeout(initContactMoleculeViewer, 500);
});

// Workflow arrow animations are handled via CSS
// No additional JavaScript needed for the animated arrows

// Timeline Dropdown Functionality with Autoplay
const timelineSteps = document.querySelectorAll('.timeline-step');
let currentStepIndex = 0;
let autoplayInterval = null;
let isAutoplayRunning = false;

// Function to open a specific step
function openStep(index) {
    // Close all dropdowns
    timelineSteps.forEach(step => {
        step.querySelector('.step-dropdown').classList.remove('active');
        step.querySelector('.step-circle').classList.remove('active');
        step.classList.remove('has-dropdown-active');
    });

    // Open the selected step
    if (timelineSteps[index]) {
        const step = timelineSteps[index];
        step.querySelector('.step-dropdown').classList.add('active');
        step.querySelector('.step-circle').classList.add('active');
        step.classList.add('has-dropdown-active');

        // Scroll to step if needed
        step.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

// Autoplay function
function startAutoplay() {
    if (isAutoplayRunning) return;

    isAutoplayRunning = true;
    currentStepIndex = 0;

    // Open first step immediately
    openStep(currentStepIndex);

    // Set interval to cycle through steps
    autoplayInterval = setInterval(() => {
        currentStepIndex = (currentStepIndex + 1) % timelineSteps.length;
        openStep(currentStepIndex);
    }, 4000); // 4 seconds per step
}

// Stop autoplay function
function stopAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
        isAutoplayRunning = false;
    }
}

// Manual click functionality (stops autoplay)
timelineSteps.forEach((step, index) => {
    const circle = step.querySelector('.step-circle');

    circle.addEventListener('click', () => {
        stopAutoplay();

        if (step.classList.contains('has-dropdown-active')) {
            // If clicking the active one, close it
            step.querySelector('.step-dropdown').classList.remove('active');
            step.querySelector('.step-circle').classList.remove('active');
            step.classList.remove('has-dropdown-active');
        } else {
            // Open the clicked step
            openStep(index);
            currentStepIndex = index;
        }
    });
});

// Start autoplay when timeline section comes into view
const timelineObserverAutoplay = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startAutoplay();
        } else {
            stopAutoplay();
        }
    });
}, { threshold: 0.3 });

// Observe the timeline section
const timelineSection = document.querySelector('.timeline-section');
if (timelineSection) {
    timelineObserverAutoplay.observe(timelineSection);
}

// Close dropdown when clicking outside (only if autoplay is not running)
document.addEventListener('click', (e) => {
    if (!e.target.closest('.timeline-step') && !isAutoplayRunning) {
        timelineSteps.forEach(step => {
            step.querySelector('.step-dropdown').classList.remove('active');
            step.querySelector('.step-circle').classList.remove('active');
            step.classList.remove('has-dropdown-active');
        });
    }
});

// Initialize 3D Molecule Viewers
function initMoleculeViewers() {
    if (typeof $3Dmol === 'undefined') return;

    // Aspirin (Acetylsalicylic acid)
    const viewer1 = $3Dmol.createViewer('molecule-viewer-1', {
        backgroundColor: 'white'
    });

    const aspirin = `COMPND    ASPIRIN
HETATM    1  C1  ASP     1       0.000   1.398   0.000  1.00  0.00           C
HETATM    2  C2  ASP     1      -1.211   0.699   0.000  1.00  0.00           C
HETATM    3  C3  ASP     1      -1.211  -0.699   0.000  1.00  0.00           C
HETATM    4  C4  ASP     1       0.000  -1.398   0.000  1.00  0.00           C
HETATM    5  C5  ASP     1       1.211  -0.699   0.000  1.00  0.00           C
HETATM    6  C6  ASP     1       1.211   0.699   0.000  1.00  0.00           C
HETATM    7  C7  ASP     1       2.500   1.490   0.000  1.00  0.00           C
HETATM    8  O1  ASP     1       3.555   0.900   0.000  1.00  0.00           O
HETATM    9  O2  ASP     1       2.500   2.700   0.000  1.00  0.00           O
HETATM   10  O3  ASP     1       0.000   2.700   0.000  1.00  0.00           O
HETATM   11  C8  ASP     1      -1.200   3.400   0.000  1.00  0.00           C
HETATM   12  C9  ASP     1      -0.800   4.800   0.000  1.00  0.00           C
HETATM   13  O4  ASP     1      -2.400   3.000   0.000  1.00  0.00           O
CONECT    1    2    6   10
CONECT    2    1    3
CONECT    3    2    4
CONECT    4    3    5
CONECT    5    4    6
CONECT    6    1    5    7
CONECT    7    6    8    9
CONECT    8    7
CONECT    9    7
CONECT   10    1   11
CONECT   11   10   12   13
CONECT   12   11
CONECT   13   11
END`;

    viewer1.addModel(aspirin, 'pdb');
    viewer1.setStyle({}, {stick: {colorscheme: 'Jmol', radius: 0.15}, sphere: {scale: 0.25, colorscheme: 'Jmol'}});
    viewer1.zoomTo();
    viewer1.render();
    viewer1.zoom(1.2, 1000);
    viewer1.rotate(45, 'y', 1000);
    setInterval(() => { viewer1.rotate(1, 'y'); }, 50);

    // Ibuprofen
    const viewer2 = $3Dmol.createViewer('molecule-viewer-2', {
        backgroundColor: 'white'
    });

    const ibuprofen = `COMPND    IBUPROFEN
HETATM    1  C1  IBU     1       0.000   0.000   0.000  1.00  0.00           C
HETATM    2  C2  IBU     1       1.400   0.000   0.000  1.00  0.00           C
HETATM    3  C3  IBU     1       2.100   1.200   0.000  1.00  0.00           C
HETATM    4  C4  IBU     1       1.400   2.400   0.000  1.00  0.00           C
HETATM    5  C5  IBU     1       0.000   2.400   0.000  1.00  0.00           C
HETATM    6  C6  IBU     1      -0.700   1.200   0.000  1.00  0.00           C
HETATM    7  C7  IBU     1       2.100   3.700   0.000  1.00  0.00           C
HETATM    8  C8  IBU     1       3.600   3.500   0.000  1.00  0.00           C
HETATM    9  C9  IBU     1       4.400   4.800   0.000  1.00  0.00           C
HETATM   10  C10 IBU     1       6.000   4.600   0.000  1.00  0.00           C
HETATM   11  O1  IBU     1       6.600   3.500   0.000  1.00  0.00           O
HETATM   12  O2  IBU     1       6.700   5.700   0.000  1.00  0.00           O
HETATM   13  C11 IBU     1       1.700   4.400   1.300  1.00  0.00           C
CONECT    1    2    6
CONECT    2    1    3
CONECT    3    2    4
CONECT    4    3    5    7
CONECT    5    4    6
CONECT    6    1    5
CONECT    7    4    8   13
CONECT    8    7    9
CONECT    9    8   10
CONECT   10    9   11   12
CONECT   11   10
CONECT   12   10
CONECT   13    7
END`;

    viewer2.addModel(ibuprofen, 'pdb');
    viewer2.setStyle({}, {stick: {colorscheme: 'Jmol', radius: 0.15}, sphere: {scale: 0.25, colorscheme: 'Jmol'}});
    viewer2.zoomTo();
    viewer2.render();
    viewer2.zoom(1.2, 1000);
    viewer2.rotate(60, 'y', 1000);
    setInterval(() => { viewer2.rotate(1, 'y'); }, 50);

    // Paracetamol (Acetaminophen)
    const viewer3 = $3Dmol.createViewer('molecule-viewer-3', {
        backgroundColor: 'white'
    });

    const paracetamol = `COMPND    PARACETAMOL
HETATM    1  C1  PAR     1       0.000   1.400   0.000  1.00  0.00           C
HETATM    2  C2  PAR     1      -1.200   0.700   0.000  1.00  0.00           C
HETATM    3  C3  PAR     1      -1.200  -0.700   0.000  1.00  0.00           C
HETATM    4  C4  PAR     1       0.000  -1.400   0.000  1.00  0.00           C
HETATM    5  C5  PAR     1       1.200  -0.700   0.000  1.00  0.00           C
HETATM    6  C6  PAR     1       1.200   0.700   0.000  1.00  0.00           C
HETATM    7  O1  PAR     1       0.000  -2.700   0.000  1.00  0.00           O
HETATM    8  N1  PAR     1       0.000   2.800   0.000  1.00  0.00           N
HETATM    9  C7  PAR     1       1.200   3.600   0.000  1.00  0.00           C
HETATM   10  C8  PAR     1       0.900   5.100   0.000  1.00  0.00           C
HETATM   11  O2  PAR     1       2.400   3.200   0.000  1.00  0.00           O
CONECT    1    2    6    8
CONECT    2    1    3
CONECT    3    2    4
CONECT    4    3    5    7
CONECT    5    4    6
CONECT    6    1    5
CONECT    7    4
CONECT    8    1    9
CONECT    9    8   10   11
CONECT   10    9
CONECT   11    9
END`;

    viewer3.addModel(paracetamol, 'pdb');
    viewer3.setStyle({}, {stick: {colorscheme: 'Jmol', radius: 0.15}, sphere: {scale: 0.25, colorscheme: 'Jmol'}});
    viewer3.zoomTo();
    viewer3.render();
    viewer3.zoom(1.2, 1000);
    viewer3.rotate(30, 'y', 1000);
    setInterval(() => { viewer3.rotate(1, 'y'); }, 50);
}

// Initialize molecule viewers when page loads
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(initMoleculeViewers, 500);
});

// Console message
console.log('%c🚀 Pharmyrus Website', 'color: #58b6b6; font-size: 20px; font-weight: bold;');
console.log('%cDesenvolvido com tecnologias modernas', 'color: #8d5afa; font-size: 14px;');
