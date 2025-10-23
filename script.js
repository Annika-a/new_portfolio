// Dynamic Project Card Generation
function generateProjectCards() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = ''; // Clear existing content
    
    // Get all projects from data.js
    const projects = portfolioData.projects;
    
    // Generate a card for each project
    Object.keys(projects).forEach(projectId => {
        const project = projects[projectId];
        
        // Create project card element
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-project', projectId);
        
        // Format date for display
        let displayDate = '';
        if (project.date) {
            const date = new Date(project.date);
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
            displayDate = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
        }
        
        // Create tech tags HTML
        const techTags = project.technologies.slice(0, 3).map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        // Set the card HTML
        const projectImageContent = project.imageSrc 
            ? `<img src="${project.imageSrc}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">`
            : `<i class="${project.icon}"></i>`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                ${projectImageContent}
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <span class="project-date">${displayDate}</span>
                </div>
                <p>${project.overview.substring(0, 120)}...</p>
                <div class="project-tech">
                    ${techTags}
                </div>
                <button class="project-link expand-btn">View Details <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
        
        // Add event listeners
        const expandBtn = projectCard.querySelector('.expand-btn');
        expandBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal(projectId);
        });
        
        // Also allow clicking anywhere on the card
        projectCard.addEventListener('click', (e) => {
            if (!e.target.closest('.expand-btn')) {
                openProjectModal(projectId);
            }
        });
        
        // Add hover effects
        projectCard.addEventListener('mouseenter', () => {
            projectCard.style.transform = 'translateY(-10px)';
        });
        
        projectCard.addEventListener('mouseleave', () => {
            projectCard.style.transform = 'translateY(0)';
        });
        
        // Add to grid
        projectsGrid.appendChild(projectCard);
    });
}

// Personal Data Loading Function
function loadPersonalData() {
    // Update page title
    document.getElementById('pageTitle').textContent = `${personData.name} - ${personData.title}`;
    
    // Update navigation
    document.getElementById('navName').textContent = personData.name;
    
    // Update hero section
    document.getElementById('heroTitle1').textContent = personData.hero.title.line1;
    document.getElementById('heroTitle2').textContent = personData.hero.title.line2;
    document.getElementById('heroSubtitle').textContent = personData.hero.subtitle;
    
    // Update section titles
    document.getElementById('aboutTitle').textContent = personData.sections.about.title;
    document.getElementById('aboutSubtitle').textContent = personData.sections.about.subtitle;
    document.getElementById('dataTitle').textContent = personData.sections.dataEngineering.title;
    document.getElementById('dataSubtitle').textContent = personData.sections.dataEngineering.subtitle;
    document.getElementById('artTitle').textContent = personData.sections.art.title;
    document.getElementById('artSubtitle').textContent = personData.sections.art.subtitle;
    document.getElementById('contactTitle').textContent = personData.sections.contact.title;
    document.getElementById('contactSubtitle').textContent = personData.sections.contact.subtitle;
    
    // Update bio content
    document.getElementById('bioIntro').textContent = personData.bio.intro;
    document.getElementById('bioJourney').textContent = personData.bio.journey;
    
    // Update contact information
    const emailLink = document.getElementById('emailLink');
    emailLink.href = `mailto:${personData.email}`;
    emailLink.textContent = personData.email;
    
    document.getElementById('locationText').textContent = personData.location;
    
    // Update social links
    document.getElementById('linkedinLink').href = personData.socialLinks.linkedin;
    document.getElementById('githubLink').href = personData.socialLinks.github;
    document.getElementById('dribbbleLink').href = personData.socialLinks.dribbble;
    document.getElementById('behanceLink').href = personData.socialLinks.behance;
    
    // Update footer
    document.getElementById('footerCopyright').textContent = personData.footer.copyright;
    document.getElementById('footerTagline').textContent = personData.footer.tagline;
}

// Project Modal Functionality
// Modal elements
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalOverview = document.getElementById('modalOverview');
const modalTech = document.getElementById('modalTech');
const modalFeatures = document.getElementById('modalFeatures');
const modalResults = document.getElementById('modalResults');

// Art Modal elements
const artModal = document.getElementById('artModal');
const artCloseBtn = document.querySelector('.art-modal .close-btn');
const artModalImage = document.getElementById('artModalImage');
const artModalTitle = document.getElementById('artModalTitle');
const artModalSubtitle = document.getElementById('artModalSubtitle');
const artModalOverview = document.getElementById('artModalOverview');
const artModalTech = document.getElementById('artModalTech');
const artModalFeatures = document.getElementById('artModalFeatures');
const artModalResults = document.getElementById('artModalResults');

// Open project modal function
function openProjectModal(projectId) {
    const project = portfolioData.projects[projectId];
    if (!project) return;
    
    // Update modal content
    if (project.imageSrc) {
        modalIcon.innerHTML = `<img src="${project.imageSrc}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px;">`;
        modalIcon.style.width = '200px';
        modalIcon.style.height = '150px';
    } else {
        modalIcon.className = project.icon;
        modalIcon.style.width = '';
        modalIcon.style.height = '';
    }
    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.subtitle;
    modalOverview.textContent = project.overview;
    modalResults.textContent = project.results;
    
    // Update technologies
    modalTech.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        modalTech.appendChild(tag);
    });
    
    // Update features
    modalFeatures.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open art modal function
function openArtModal(artworkId) {
    const artwork = portfolioData.artwork[artworkId];
    if (!artwork) return;
    
    // Update modal content
    artModalImage.src = artwork.imageSrc;
    artModalImage.alt = artwork.title;
    artModalTitle.textContent = artwork.title;
    artModalSubtitle.textContent = artwork.subtitle;
    artModalOverview.textContent = artwork.overview;
    artModalResults.textContent = artwork.results;
    
    // Update techniques
    artModalTech.innerHTML = '';
    artwork.techniques.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        artModalTech.appendChild(tag);
    });
    
    // Update features
    artModalFeatures.innerHTML = '';
    artwork.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        artModalFeatures.appendChild(li);
    });
    
    // Show modal
    artModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close project modal function
function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close art modal function
function closeArtModal() {
    artModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners for project cards
document.addEventListener('DOMContentLoaded', () => {
    // Load personal data first
    loadPersonalData();
    
    // Generate project cards dynamically
    generateProjectCards();
    
    // Project cards are now generated dynamically, so we don't need to set up event listeners here
    // as they are already set up in the generateProjectCards function
    
    // Event listeners for art items
    const artItems = document.querySelectorAll('.art-item');
    
    artItems.forEach(item => {
        const artworkId = item.getAttribute('data-artwork');
        const artwork = portfolioData.artwork[artworkId];
        
        // Update date display
        if (artwork && artwork.date) {
            const dateElement = item.querySelector('.art-date');
            if (dateElement) {
                const date = new Date(artwork.date);
                const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
                dateElement.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
            }
        }
        
        item.addEventListener('click', () => {
            openArtModal(artworkId);
        });
    });
    
    // Close modal events
    closeBtn.addEventListener('click', closeProjectModal);
    artCloseBtn.addEventListener('click', closeArtModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    artModal.addEventListener('click', (e) => {
        if (e.target === artModal) {
            closeArtModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal.style.display === 'block') {
                closeProjectModal();
            }
            if (artModal.style.display === 'block') {
                closeArtModal();
            }
        }
    });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .art-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Art gallery hover effects
document.querySelectorAll('.art-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Project card hover effects are now handled in the generateProjectCards function

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.floating-elements');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);
