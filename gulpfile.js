var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');


gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("styles/bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('bundle/'));
});

gulp.task('scripts', function() {
    return gulp.src(['js/wow.min.js', 'js/html5shiv.min.js', 'js/jquery.min.js', 'js/popper.js', 'js/bootstrap.min.js', 'js/lib-init.js'])
        .pipe(concat('scripts/all.js'))
        .pipe(gulp.dest('bundle/'));
});