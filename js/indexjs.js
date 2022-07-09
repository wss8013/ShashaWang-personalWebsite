$( document ).ready(function(){
    $("img").on('load',function(){
        $(this).data('height', this.height);
    }).bind('mouseenter mouseleave', function(e) {
        $(this).stop().animate({
            height : $(this).data('height') * (e.type === 'mouseenter' ? 1.5:1)
        });
        //print(e);
    });
});