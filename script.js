// Smooth scroll to anchor links
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Show/hide mobile menu
$('.menu-toggle').on('click', function() {
    $('nav').toggleClass('show');
});

// Change navbar background on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('nav').addClass('scroll');
    } else {
        $('nav').removeClass('scroll');
    }
});

// Toggle FAQ answer
$('.faq-item').on('click', function() {
    $(this).toggleClass('active');
});

// Contact form submission
$('#contact-form').on('submit', function(event) {
    event.preventDefault();
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var message = $('#message').val().trim();
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields');
    } else {
        $.ajax({
            url: 'contact.php',
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#contact-form')[0].reset();
                alert(response);
            }
        });
    }
});
