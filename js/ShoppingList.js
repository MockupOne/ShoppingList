$('ul').on('click', 'li', function(){
    // Можно сделать так:
    // if($(this).css('color') === 'rgb(128, 128, 128)'){
    //     $(this).css({
    //         color: 'black',
    //         textDecoration: 'none',
    //     });
    // } else {
    //     $(this).css({
    //         color: 'grey',
    //         textDecoration: 'line-through',
    //     });
    // } 
    // А можно, с помощью jquery, так:
    $(this).toggleClass('done');
})
$('ul').on('click', 'span', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
})
$('input').keypress(function(event){
    if(event.which === 13) {
        var itemText = $(this).val();
        $(this).val('');
        $('ul').append('<li>' + itemText + ' <span><i class="fas fa-backspace"></i></span></li>');
    }
})
$('h2 span').click(function(){
    $('input').fadeToggle();
})