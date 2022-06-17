$(document).ready(function(){

    $("#banner-area .owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayplayHoverPause:true,
    
    /*
    
  responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
    
        items:3,
        nav:false
    },
    100:{
    
        items:5,
        nav:true
    }
   
    }
   */
    });
    $("#top-sale .owl-carousel").owlCarousel({

        loop:true,
        nav:true,
        dots:false,
        Responsive:{
        0:{
        item:1
        },
        600:{
            item:3
        },
        1000:{
        
            item:5
        }
        }
        
        });
        //Grid isotope//
var $grid = $(".grid").isotope({
    itemSelector:'.grid-item',
    layoutMode:'fitRows'
    
    
    });
    //new owl-carousel
    $("#new-phones .owl-carousel").owlCarousel({
    
        loop:true,
        nav:false,
        dots:true,
        Responsive:{
        0:{
        item:1
        },
        600:{
            item:3
        },
        1000:{
        
            item:5
        }
        }
        
        });
        
    //filters on items//
$(".button-group").on("click","button",function(){
    var filterValue= $(this).attr("data-filter");
    $grid.isotope({filter:filterValue});
});
//blog section//
$("#blogs .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    Responsive:{
    0:{
    item:1
    },
    600:{
        item:3
    },
    
    }

});
    
 
    });