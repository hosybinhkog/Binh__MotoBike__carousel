$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout:6000
    })
    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay:true,
        margin:15,
        autoplayTimeout:4000,
        responsive: {
            500:{
                items:3
            },
            1100:{
                items:4
            },
            1600:{
                items:6
            }

        }
    })
    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        margin:15,
        loop: true,
        nav: true,
        navText: navText,
        responsive: {
            500:{
                items:3
            },
            1100:{
                items:4
            },
            1600:{
                items:6
            }

        }
    })
})