//при загрузке
var width = 1;

window.onscroll = function(e) {
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-line').offset().top) {
        if(!$('#progress__bar-line').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-line');

                var interval = setInterval(frame, 1);
                console.log(width);
                function frame() {
                    if (width >= 73) {
                        clearInterval(interval);
                    } else {
                        width++;
                        pBar_line.style.width = width + '%';
                        document.getElementById('label').innerHTML = width * 1 + '%';
                    }
                }
            }
            $('#progress__bar-line').attr('loaded', true);
        }
    }
};



// дл плавной прокруттки страницы по якорю

let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});


