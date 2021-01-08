$('.owl-carousel-skill').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('#student').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items: 6
        }
    }
})