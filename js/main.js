(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

// function storeDataToRTDB() {
//     document.getElementById('formNotAvailableText').style.display = 'block';
//     setTimeout(() => {
//       document.getElementById('formNotAvailableText').style.display = 'none';
//     }, 3000);
// }
  
// function validateAndSubmitForm() {
//     // Get form input values
//     const nameInput = document.getElementById('nameInputBoxInForm').value.trim();
//     const emailInput = document.getElementById('emailInputBoxInForm').value.trim();
//     const commentInput = document.getElementById('commentInputBoxInForm').value.trim();
//     const subjectInput = document.getElementById('subjectInputBoxInForm').value.trim();

//     // Simple validation (you can customize this based on your needs)
//     if (nameInput === '') {
//         alert('Please enter your name.');
//         return;
//     }

//     if (emailInput === '') {
//         alert('Please enter your email.');
//         return;
//     } else if (!isValidEmail(emailInput)) {
//         alert('Please enter a valid email address.');
//         return;
//     }

//     if (commentInput === '') {
//         alert('Please write a message.');
//         return;
//     }

//     // If all validations pass, you can proceed with form submission
//     storeDataToRTDB();
// }
  
//   // Function to validate email format
//   function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
  
//   // Function to handle form submission (replace with your actual logic)
//   function storeDataToRTDB() {
//     // Your form submission logic here
//     const nameInput = document.getElementById('nameInputBoxInForm').value.trim();
//     const emailInput = document.getElementById('emailInputBoxInForm').value.trim();
//     const commentInput = document.getElementById('commentInputBoxInForm').value.trim();
//     const subjectInput = document.getElementById('subjectInputBoxInForm').value.trim();
  
//     // Push data to the 'messages' node in the database
//     database.ref('messages').push({
//       name: nameInput,
//       email: emailInput,
//       subject : subjectInput,
//       comment: commentInput
//     })
//       .then(() => {
//         alert('Your message sent successfully.');
//         document.getElementById('nameInputBoxInForm').value = '';
//         document.getElementById('emailInputBoxInForm').value = '';
//         document.getElementById('commentInputBoxInForm').value = '';
//       })
//       .catch((error) => {
//         console.error('Error storing data:', error);
//         alert("Unable to send data to Database")
//       });
//   }