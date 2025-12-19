$(document).ready(function () {

    // Mobile Menu Modal Toggle
    const mobileMenuToggle = $('#mobileMenuToggle');
    const mobileMenuOverlay = $('#mobileMenuOverlay');
    const mobileMenuClose = $('#mobileMenuClose');

    // Open mobile menu
    mobileMenuToggle.on('click', function () {
        mobileMenuOverlay.addClass('active');
        $('body').css('overflow', 'hidden'); // Prevent scrolling when menu is open
    });

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenuOverlay.removeClass('active');
        $('body').css('overflow', ''); // Restore scrolling
    }

    mobileMenuClose.on('click', closeMobileMenu);

    // Close when clicking on overlay (outside sidebar)
    mobileMenuOverlay.on('click', function (e) {
        if ($(e.target).is('.mobile-menu-overlay')) {
            closeMobileMenu();
        }
    });


    // Toggle Mobile Submenus
    $('.mobile-dropdown-header').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $this = $(this);
        var $parent = $this.parent('.mobile-dropdown');
        var $submenu = $this.next('.mobile-submenu');

        $parent.toggleClass('open');
        $submenu.slideToggle(300);
    });

    // Close when clicking on menu item
    $('.mobile-menu-nav a').on('click', function (e) {
        // If it's a dropdown toggle, don't close the menu
        if ($(this).closest('.mobile-dropdown-header').length) {
            return;
        }
        closeMobileMenu();
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const target = $(this.getAttribute('href'));

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });

    // Add active class to nav links on scroll
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop() + 150;

        // $('.nav-link').each(function () {
        //     const currLink = $(this);
        //     const refElement = $(currLink.attr('href'));

        //     if (refElement.length &&
        //         refElement.position().top <= scrollPos &&
        //         refElement.position().top + refElement.height() > scrollPos) {
        //         $('.nav-link').removeClass('child-active');
        //         currLink.addClass('child-active');
        //     }
        // });
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
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonial-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: ".testimonial-nav-next",
                prevEl: ".testimonial-nav-prev",
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }

    // Doctor Filtering
    $('.btn-filter').on('click', function () {
        const filter = $(this).data('filter');

        // Remove active class from all buttons and add to clicked
        $('.btn-filter').removeClass('active');
        $(this).addClass('active');

        $('.doctor-item').each(function () {
            const category = $(this).data('category');

            if (filter === 'all' || filter === category) {
                $(this).removeClass('d-none').addClass('fade-in-up');

                // Remove animation class after it completes to allow re-triggering
                setTimeout(() => {
                    $(this).removeClass('fade-in-up');
                }, 500);
            } else {
                $(this).addClass('d-none');
            }
        });
    });

    // Facilities Swiper
    const facilitiesSwiper = new Swiper('.facilitiesSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 800,
        pagination: {
            el: '.facilities-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.facilities-next',
            prevEl: '.facilities-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // Initialize Specialty Swiper
    const specialtySwiper = new Swiper('.specialtySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 800,
        pagination: {
            el: '.specialty-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        }
    });

    // Initialize Testimonials Swiper
    const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 800,
        pagination: {
            el: '.testimonials-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonials-next',
            prevEl: '.testimonials-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });

    // Initialize Doctors Swiper
    const doctorsSwiper = new Swiper('.doctorsSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 800,
        pagination: {
            el: '.doctors-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.doctors-next',
            prevEl: '.doctors-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });

    // Initialize About Doctors Swiper
    const aboutDoctorsSwiper = new Swiper('.aboutDoctorsSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 800,
        pagination: {
            el: '.about-doctors-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.about-doctors-next',
            prevEl: '.about-doctors-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // Specialty card click
    $('.specialty-card').on('click', function () {
        $('.specialty-card').removeClass('active');
        $(this).addClass('active');
    });

    // Scroll indicator click
    $('.scroll-indicator').on('click', function () {
        $('html, body').animate({
            scrollTop: $(this).closest('.hero-slider').outerHeight()
        }, 800);
    });

    // Button actions
    $('.btn-primary-custom').on('click', function (e) {
        e.preventDefault();
        console.log('View more clicked');
    });

    $('.btn-outline-custom').on('click', function (e) {
        // Allow phone call to proceed
        console.log('Calling:', $(this).attr('href'));
    });

    // Initialize News Vertical Swiper
    const newsSwiper = new Swiper('.newsSwiper', {
        direction: 'vertical',
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.news-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.news-next',
            prevEl: '.news-prev',
        },
    });
});
