$(window).load(function() {
    $('#loader').fadeOut(1000)
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var features = $('.features');
    if (features.length) {
        if (wScroll < ($('.features').offset().top) / 2) {
        $('.fly-in-text').css({
            'transform': 'translate(0px, '+ wScroll / 10 +'%)'
            }) 
        }
    }

    var features = $('#features')
    var gridPosition = $('#features').offset().top;
    if (wScroll >= gridPosition){
        $('.navigation-container').addClass('background-special');
    } else {
        $('.navigation-container').removeClass('background-special');
    }
    var partners = $('.partners')
    var offsetX = Math.min(0, wScroll - $('.partners').offset().top + $(window).height() - 400);
    if (partners.length) {
        if (wScroll > ($('.partners').offset().top - $(window).height())){
            $('.square-1').css({'transform': 'translate(' + offsetX/3 + 'px,' + offsetX/12 + 'px)'});
            $('.square-2').css({'transform': 'translate(' + -offsetX/3 + 'px,' + offsetX/12 + 'px)'});
            $('.square-3').css({'transform': 'translate(' + offsetX/3 + 'px,' + -offsetX/12 + 'px)'});
            $('.square-4').css({'transform': 'translate(' + -offsetX/3 + 'px,' + -offsetX/12 + 'px)'})


        }
    }
});

//logo
$(document).ready(function() {
  setTimeout(function() {
    $('.fly-in-text').removeClass('hidden');
    }, 1100);
})

