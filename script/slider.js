// Slider Navigation
const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        slider.scrollTo({
            left: slider.children[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.scrollTo({
            left: slider.children[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }
});

// Function to open the lightbox with the clicked image
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.classList.add('active');
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});