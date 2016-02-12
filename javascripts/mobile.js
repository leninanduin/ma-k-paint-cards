function _resize() {
    var w_body = $(document).width();
    if (w_body < 991) {
        var h_body = $('body').outerHeight();
        var h_header = $('header').outerHeight();
        $('#sidebar')
        .addClass('mobile')
        .css('top', h_header)
        .css('height', h_body-h_header);
    } else if (w_body >= 991) {
        $('#sidebar')
        .removeClass('mobile')
        .css('top', 0)
        .css('height', '100%');
    }
}

$(window).resize(function(){
    _resize();
});

$(function(){
    _resize();

    $('.mobile-controls .menu').click(function() {
        $("#sidebar").animate({'margin-left': 0}, 250);
        $('.mobile-controls .menu').hide();
        $('.mobile-controls .close').show();
    });

    $('.mobile-controls .close').click(function() {
        $("#sidebar").animate({'margin-left': '-100%'}, 250);
        $('.mobile-controls .menu').show();
        $('.mobile-controls .close').hide();
    });

    $(document).on('click', '#sidebar.mobile a', function(){
        $('.mobile-controls .close').click();
    });
});

