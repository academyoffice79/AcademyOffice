window.onscroll = function () {
    var height = $(window).height();
    var scrollTop = $(window).scrollTop();
    var obj = $('#scroll');
    var pos = obj.position();
    if (height + scrollTop < pos.top) {
        $('.button').fadeIn();
    }
    else {
        $('.button').fadeOut(); 
    }
}