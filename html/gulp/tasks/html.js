var gulp        = require('gulp'),
    browsersync = require('browser-sync'),
    fileinclude = require('gulp-file-include'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    config      = require('../config');

/*
 * Сборка html
 */

gulp.task('html', function() {
    browsersync.notify('Compiling html');

    return gulp.src(config.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'html',
                    message: err.name + ':' + err.message
                }
            })
        }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(gulp.dest(config.html.dest));
});