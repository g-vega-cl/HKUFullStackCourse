
$(document).ready(function(){
// Carousel
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
    if($('#carouselButton').children("span").hasClass("fa-pause")){
        $("#mycarousel").carousel('pause');
        $('#carouselButton').children("span").removeClass('fa-pause');
        $('#carouselButton').children("span").addClass("fa-play");
    } else {
        $("#mycarousel").carousel('cycle');
        $('#carouselButton').children("span").removeClass('fa-play');
        $('#carouselButton').children("span").addClass("fa-pause");
    }
    
    });
// Assignment 4
// Login modal 
$("#LoginButton").click(function(){
    $('#loginModal').modal('toggle');
});

$("#reserveTableButton").click(function(){
    $('#reserveModal').modal('toggle');
});
    
});