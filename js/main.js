$(document).ready(function () {

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const target = $(this.getAttribute('href'));

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }

        // Close mobile menu after clicking
        if (window.innerWidth < 992) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Add active class to nav links on scroll
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop() + 150;

        $('.nav-link').each(function () {
            const currLink = $(this);
            const refElement = $(currLink.attr('href'));

            if (refElement.length &&
                refElement.position().top <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass('active');
                currLink.addClass('active');
            }
        });
    });

    // Header shadow on scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });



    // Initialize Swiper for Testimonials
    if ($('.testimonial-swiper').length) {
        new Swiper(".testimonial-swiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".testimonial-nav-next",
                prevEl: ".testimonial-nav-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20, // Tighter spacing for centered overlap effect
                },
            },
        });
    }
});
