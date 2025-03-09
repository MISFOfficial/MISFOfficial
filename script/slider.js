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

        // Lightbox Functionality
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        function openLightbox(src) {
            lightboxImg.src = src;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
        }