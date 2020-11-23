$(document).ready(function(){
    $('.collapse-toggle').on('click', function(e){
        e.preventDefault();

        var target = $(this).data('target');

        $(target).toggle(250);
    })
})