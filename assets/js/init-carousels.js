/**
 * Static Carousel & Background Initializer for Corona International Concepts
 */
(function() {
    function init() {
        // 1. Initialize Hero Background Slideshows
        document.querySelectorAll('section[data-settings*="slideshow"]').forEach(function(sec) {
            try {
                var raw = sec.getAttribute('data-settings');
                if (!raw) return;
                var settings = JSON.parse(raw);
                var gallery = settings.background_slideshow_gallery || [];
                if (gallery.length > 0) {
                    var urls = gallery.map(function(item) {
                        var u = item.url || '';
                        return u.replace(/^https?:\/\/[^\/]+\//, '');
                    });
                    var idx = 0;
                    sec.style.backgroundImage = "url('" + urls[0] + "')";
                    sec.style.backgroundSize = "cover";
                    sec.style.backgroundPosition = "center center";
                    sec.style.transition = "background-image 1.2s ease-in-out";

                    if (urls.length > 1) {
                        setInterval(function() {
                            idx = (idx + 1) % urls.length;
                            sec.style.backgroundImage = "url('" + urls[idx] + "')";
                        }, 5000);
                    }
                }
            } catch (e) {
                console.warn('Slideshow init error:', e);
            }
        });

        // Check if Swiper is loaded
        if (typeof Swiper === 'undefined') {
            console.warn('Swiper not loaded yet.');
            return;
        }

        // 2. Initialize Media Carousels (Client Logos)
        document.querySelectorAll('.elementor-widget-media-carousel').forEach(function(widget) {
            var container = widget.querySelector('.elementor-main-swiper');
            if (!container || container.swiper) return;

            new Swiper(container, {
                slidesPerView: 5,
                spaceBetween: 20,
                loop: true,
                speed: 600,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    nextEl: widget.querySelector('.elementor-swiper-button-next'),
                    prevEl: widget.querySelector('.elementor-swiper-button-prev')
                },
                pagination: {
                    el: widget.querySelector('.swiper-pagination'),
                    clickable: true
                },
                breakpoints: {
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 3, spaceBetween: 15 },
                    992: { slidesPerView: 5, spaceBetween: 20 }
                }
            });
        });

        // 3. Initialize Testimonial Carousels
        document.querySelectorAll('.elementor-widget-testimonial-carousel').forEach(function(widget) {
            var container = widget.querySelector('.elementor-main-swiper');
            if (!container || container.swiper) return;

            new Swiper(container, {
                slidesPerView: 1,
                loop: true,
                speed: 600,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    nextEl: widget.querySelector('.elementor-swiper-button-next'),
                    prevEl: widget.querySelector('.elementor-swiper-button-prev')
                },
                pagination: {
                    el: widget.querySelector('.swiper-pagination'),
                    clickable: true
                }
            });
        });

        // 4. Initialize Slide Widgets (e.g. Mission/Vision Showcase)
        document.querySelectorAll('.elementor-widget-slides').forEach(function(widget) {
            var container = widget.querySelector('.elementor-main-swiper');
            if (!container || container.swiper) return;

            new Swiper(container, {
                slidesPerView: 1,
                loop: true,
                speed: 800,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
