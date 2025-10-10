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
    modalIcon.className = project.icon;
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
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const expandBtn = card.querySelector('.expand-btn');
        const projectId = card.getAttribute('data-project');
        const project = portfolioData.projects[projectId];
        
        // Update date display
        if (project && project.date) {
            const dateElement = card.querySelector('.project-date');
            if (dateElement) {
                const date = new Date(project.date);
                const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
                dateElement.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
            }
        }
        
        expandBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal(projectId);
        });
        
        // Also allow clicking anywhere on the card
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.expand-btn')) {
                openProjectModal(projectId);
            }
        });
    });
    
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

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

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
