/*
function scrollRight() {
    var position = $('#menu').scrollLeft(); //current position
    if (position >= 0) {
        $('#menu').scrollLeft(position + 50);
    }
}

function scrollLeft() {
    var position = $('#menu').scrollLeft(); //current position
    if (position > 0) {
        $('#menu').scrollLeft(position - 50);
    }
}
$(document).ready(function() {
    $('#rightnav').click(scrollRight);
    $('#leftnav').click(scrollLeft);
});*/

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
  });

