$(document).ready(function(){
//banner owl caro
$("#banner-area .owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayplayHoverPause:true
    
    
});

//
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
/*
//product qty
let $qty_up=$(".qty.qty-up");
let $qty_down=$(".qty.qty-down");
//let $input=$(".qty.qty-input");



$qty_up.click(function(e){
    let$input=$('.qty_input[data-id='$[$(this).data("id")}']');
 if ($input.val()>=1 &&$input.val()<=9){
$input.val(function(i,oldval){
    return++oldval;
})

 }  
});
$qty_down.click(function(e){
    if ($input.val()>=1 &&$input.val()<=9){
   $input.val(function(i,oldval){
       return--oldval;
   })
   
    }  
   });
   */
     //product qty
let $qty_up=$(".qty.qty-up");
let $qty_down=$(".qty.qty-down");
let $input=$(".qty.qty_input");



$qty_up.click(function(e){
 if ($input.val()>=1 &&$input.val()<=9){
$input.val(function(i,oldval){
    return ++oldval;
});

 }  
});

$qty_down.click(function(e){
    if ($input.val()>1 &&$input.val()<=10){
   $input.val(function(i,oldval){
       return --oldval;
   });
   
    }  
   });
});