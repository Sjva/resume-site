


// дл плавной прокруттки страницы по якорю

let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});




    var bar = new ProgressBar.Line(container, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#e0a80d',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        from: {color: '#e0a80d'},
        to: {color: '#e0a80d'},
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    // Функция, которая
    var visible = function(e) {
        var elementTop = window.pageYOffset + e.getBoundingClientRect().top, // Получаем координаты верхней части элементы
            windowBottom = window.pageYOffset + document.documentElement.clientHeight; // Получаем положение нижней части окна

        // Если положение нижней части окна больше чем верхняя координата элемента, то мы долистали до элемента
        // Так же проверим, не запущена ли уже анимация, а то выйдет казус в виде всё время запускающееся анимации
        if(elementTop < windowBottom && Number(e.dataset.animationState) === 0){
            bar.animate(1.0); // Number from 0.0 to 1.0

            e.dataset.animationState = 1; // Отмечаем, что анимация запущена
        };
    };

    // Получаем нужный элемент
    var element = document.querySelector('#container');

    // Запускаем функцию
    // Запускаем при скролле
    window.addEventListener('scroll', function() {
        visible(element);
    });

    // И сразу при загрузке страницы. Вдруг элемент уже находится в видимой области
    visible(element);



