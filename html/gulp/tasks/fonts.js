var gulp   = require('gulp'),
    plumber = require('gulp-plumber'),
    notify  = require('gulp-notify'),
    config = require('../config');

/*
 * Копирование шрифтов
 */

gulp.task('fonts', function() {
    gulp.src(config.fonts.src)
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'fonts',
                    message: err.name + ':' + err.message
                }
            })
        }))
        .pipe(gulp.dest(config.fonts.dest))
});