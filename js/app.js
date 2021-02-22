$(function() {

    // FIXED HEADER 

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let nav_toggle = $("#nav_toggle");
    let burger = $(".burger")
    
    checkScroll(scrollPos, introH)

    $(window).on("scroll rezize", function(){
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {

        if ( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };


    // SMOTH SCROLL 

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let block_id = $(this).data('scroll');
        let block_offset = $(block_id).offset().top;
        
        nav.removeClass("show");

        $("html, body").animate({
             scrollTop: block_offset -70
        }, 700);
    });

    // BURGER 

    nav_toggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    // REV SLIDER https://kenwheeler.github.io/slick/ 
    let slider = $("#rev_slider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true 
      });

});