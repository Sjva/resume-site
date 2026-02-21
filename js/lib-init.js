// animation init
new WOW().init();


//при загрузке
var widthHtml = 1;
var widthCss = 1;
var widthBootstrap = 1;
var widthFlexbox = 1;
var widthSass = 1;
var widthWebpack = 1;
var widthJs = 1;
var widthJquery = 1;
var widthVue= 1;
var widthGit = 1;
window.onscroll = function(e) {
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-html').offset().top) {
        if (!$('#progress__bar-html').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-html');
                var interval = setInterval(frame, 1);

                function frame() {
                    if (widthHtml >= 90) {
                        clearInterval(interval);
                    } else {
                        widthHtml++;
                        pBar_line.style.width = widthHtml + '%';
                        document.getElementById('label-html').innerHTML = widthHtml * 1 + '%';
                    }
                }
            }

            $('#progress__bar-html').attr('loaded', true);
        }
    }
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-css').offset().top) {
        if (!$('#progress__bar-css').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-css');
                var interval = setInterval(frame, 1);

                function frame() {
                    if (widthCss >= 90) {
                        clearInterval(interval);
                    } else {
                        widthCss++;
                        pBar_line.style.width = widthCss + '%';
                        document.getElementById('label-css').innerHTML = widthCss * 1 + '%';
                    }
                }
            }

            $('#progress__bar-css').attr('loaded', true);
        }
    }
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-bootstrap').offset().top) {
        if (!$('#progress__bar-bootstrap').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-bootstrap');
                var interval = setInterval(frame, 1);
                function frame() {
                    if (widthBootstrap >= 81) {
                        clearInterval(interval);
                    } else {
                        widthBootstrap++;
                        pBar_line.style.width = widthBootstrap + '%';
                        document.getElementById('label-bootstrap').innerHTML = widthBootstrap * 1 + '%';
                    }
                }
            }

            $('#progress__bar-bootstrap').attr('loaded', true);
        }
    }
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-flexbox').offset().top) {
        if (!$('#progress__bar-flexbox').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-flexbox');
                var interval = setInterval(frame, 1);

                function frame() {

                    if (widthFlexbox >= 80) {
                        clearInterval(interval);
                    } else {
                        widthFlexbox++;
                        pBar_line.style.width = widthFlexbox + '%';
                        document.getElementById('label-flexbox').innerHTML = widthFlexbox * 1 + '%';
                    }
                }
            }

            $('#progress__bar-flexbox').attr('loaded', true);
        }
    }
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-sass').offset().top) {
        if (!$('#progress__bar-sass').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-sass');
                var interval = setInterval(frame, 1);

                function frame() {
                    if (widthSass >= 60) {
                        clearInterval(interval);
                    } else {
                        widthSass++;
                        pBar_line.style.width = widthSass + '%';
                        document.getElementById('label-sass').innerHTML = widthSass * 1 + '%';
                    }
                }
            }

            $('#progress__bar-sass').attr('loaded', true);
        }
    }
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-webpack').offset().top) {
        if (!$('#progress__bar-webpack').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-webpack');
                var interval = setInterval(frame, 1);

                function frame() {
                    if (widthWebpack >= 50) {
                        clearInterval(interval);
                    } else {
                        widthWebpack++;
                        pBar_line.style.width = widthWebpack + '%';
                        document.getElementById('label-webpack').innerHTML = widthWebpack * 1 + '%';
                    }
                }
            }

            $('#progress__bar-webpack').attr('loaded', true);
        }
    }
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-js').offset().top) {
        if (!$('#progress__bar-js').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-js');
                var interval = setInterval(frame, 1);

                function frame() {
                    if (widthJs >= 30) {
                        clearInterval(interval);
                    } else {
                        widthJs++;
                        pBar_line.style.width = widthJs + '%';
                        document.getElementById('label-js').innerHTML = widthJs * 1 + '%';
                    }
                }
            }

            $('#progress__bar-js').attr('loaded', true);
        }
    }
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-jquery').offset().top) {
        if (!$('#progress__bar-jquery').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-jquery');
                var interval = setInterval(frame, 1);

                function frame() {
                    if (widthJquery >= 40) {
                        clearInterval(interval);
                    } else {
                        widthJquery++;
                        pBar_line.style.width = widthJquery + '%';
                        document.getElementById('label-jquery').innerHTML = widthJquery * 1 + '%';
                    }
                }
            }

            $('#progress__bar-jquery').attr('loaded', true);
        }
    }
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-vue').offset().top) {
        if (!$('#progress__bar-vue').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-vue');
                var interval = setInterval(frame, 1);

                function frame() {
                    if (widthVue >= 30) {
                        clearInterval(interval);
                    } else {
                        widthVue++;
                        pBar_line.style.width = widthVue + '%';
                        document.getElementById('label-vue').innerHTML = widthVue * 1 + '%';
                    }
                }
            }
            $('#progress__bar-vue').attr('loaded', true);
        }
    }
    if ($(window).scrollTop() + $(window).height() >= $('#progress__bar-git').offset().top) {
        if (!$('#progress__bar-git').attr('loaded')) {
            e = window.pageYOffset;
            if (e >= 100) {
                move();
            }

            function move() {
                var pBar_line = document.getElementById('progress__bar-git');
                var interval = setInterval(frame, 1);

                function frame() {
                    if (widthGit >= 70) {
                        clearInterval(interval);
                    } else {
                        widthGit++;
                        pBar_line.style.width = widthGit + '%';
                        document.getElementById('label-git').innerHTML = widthGit * 1 + '%';
                    }
                }
            }
            $('#progress__bar-git').attr('loaded', true);
        }
    }

};

// window.onscroll = function(e) {
//
// };


// smoothie scroll on click

let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

// // PRELOADER
// var hellopreloader = document.getElementById("hellopreloader_preload");
// function fadeOutnojquery(el){
//     el.style.opacity = 1;
//     var interhellopreloader = setInterval(function(){
//         el.style.opacity = el.style.opacity - 0.05;
//         if (el.style.opacity <=0.05){
//             clearInterval(interhellopreloader);
//             hellopreloader.style.display = "none";
//         }
//     }, 16);
// }
// window.onload = function(){
//     setTimeout(function(){
//         fadeOutnojquery(hellopreloader);
//     },1000);
// };


// $(window).load(function() {
//     $(".cube-loader").delay(100).fadeOut().remove();
//
// });
