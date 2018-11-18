$(document).ready(function(){



<!-- menu tab bootstrap-->
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });

// закрытие document.ready
});



// дл плавной прокруттки страницы по якорю

let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

