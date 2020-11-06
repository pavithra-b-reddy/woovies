
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
});

