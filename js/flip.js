$(document).ready(function(){

    $('.flip').click(function(){
        $(this).find('.card').toggleClass('flipped');
        return true;
    });
})
