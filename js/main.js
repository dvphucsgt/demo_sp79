$(document).ready(function() {
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
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
    $(window).on('scroll', function() {
        const scrollPos = $(window).scrollTop() + 150;
        
        $('.nav-link').each(function() {
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
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
    // Doctor Filtering
    $('.btn-filter').on('click', function() {
        const filter = $(this).data('filter');
        
        // Remove active class from all buttons and add to clicked
        $('.btn-filter').removeClass('active');
        $(this).addClass('active');
        
        $('.doctor-item').each(function() {
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
});
