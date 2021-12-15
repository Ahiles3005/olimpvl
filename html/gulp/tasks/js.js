var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    browsersync = require('browser-sync'),
    fileinclude = require('gulp-file-include'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    babel       = require('gulp-babel'),
    config      = require('../config');

/*
 * Сборка js
 * Минификация
 */

gulp.task('js', [
    'js-internal',
    'js-external'
]);

gulp.task('js-internal', function() {
    browsersync.notify('Compiling js');

    return gulp.src(config.js.srcInternal)
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'js-internal',
                    message: err.name + ':' + err.message
                }
            })
        }))
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.init())
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(babel({
            presets: ['es2015'],
            compact: false
        }))
        .pipe(gutil.env.env === 'prod' ? uglify() : gutil.noop())
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.write())
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('js-external', function() {
    browsersync.notify('Compiling js');

    // jquery делаем отдельно чтобы подключить его в head
    gulp.src(config.js.srcJquery)
        .pipe(gulp.dest(config.js.destJquery));

    // html5shiv делаем отдельно чтобы подключить его в head
    gulp.src(config.js.srcHtml5shiv)
        .pipe(gulp.dest(config.js.destHtml5shiv));

    return gulp.src(config.js.srcExternal)
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'js-external',
                    message: err.name + ':' + err.message
                }
            })
        }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(gutil.env.env === 'prod' ? uglify() : gutil.noop())
        .pipe(gulp.dest(config.js.dest))
});