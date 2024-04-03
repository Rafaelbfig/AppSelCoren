//
$(".nav-toggler").click(function() {
    $(".nav-items").toggleClass("show");
});

// Hero Slider
$('.hero-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 1,
    smartSpeed: 1000,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})

// Porfolio Slider
$('.portfolio-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})


// Reviews Slider
$('.reviews-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 2
        }
    }
})

///////////////////////to top

var mybutton = document.getElementById("scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (window.scrollY >= 600) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

mybutton.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};