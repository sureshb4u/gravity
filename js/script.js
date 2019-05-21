new WOW().init();
$('#galleryCarousel').carousel({
    interval: 2000,
    pause:false
})
$('#teamCarousel').carousel({
    interval: 5000,
})
showOtherContent = function(page){
    //$("#"+page).show();    
}

var ssSmoothScroll = function() {
    $('.smoothscroll').on('click', function (e) {
        var target = this.hash,
        $target    = $(target);
        
            e.preventDefault();
            e.stopPropagation();	   	

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing').promise().done(function () {

            // check if menu is open
            if ($('body').hasClass('menu-is-open')) {
                $('#header-menu-trigger').trigger('click');
            }

            window.location.hash = target;
        });
        });

};
ssSmoothScroll();
        