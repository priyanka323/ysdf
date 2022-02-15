$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoPlay:true,
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        nav:true,
        navText:[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:3,
                
            },
            1000:{
                items:5,
            
                
            }
        }
    })
});