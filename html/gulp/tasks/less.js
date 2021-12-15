var gulp                    = require('gulp'),
    gutil                   = require('gulp-util'),
    sourcemaps              = require('gulp-sourcemaps'),
    browsersync             = require('browser-sync'),
    less                    = require('gulp-less'),
    lessAutoPrefix          = require('less-plugin-autoprefix'),
    concat                  = require('gulp-concat'),
    cssnano                 = require('gulp-cssnano'),
    plumber                 = require('gulp-plumber'),
    notify                  = require('gulp-notify'),
    config                  = require('../config');
    
var autoprefixer = new lessAutoPrefix(config.autoprefixer);


/*
 * Конкатенация LESS для Desktop и Mobile
 */

gulp.task('concat-desktop', function() {
    browsersync.notify('Concat Desktop Less');

    return gulp.src(config.less.bemblocks + '*/*.desktop.less')
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.init())
        .pipe(concat('bem.desktop.less'))
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.write())
        .pipe(gulp.dest(config.less.concatless))
});

gulp.task('concat-mobile', ['concat-desktop'], function() {
    browsersync.notify('Concat Mobile Less');

    return gulp.src(config.less.bemblocks + '*/*.mobile.less')
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.init())
        .pipe(concat('bem.mobile.less'))
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.write())
        .pipe(gulp.dest(config.less.concatless))
});

gulp.task('concat-mobilemin', ['concat-mobile'], function() {
    browsersync.notify('Concat Mobile Min Less');

    return gulp.src(config.less.bemblocks + '*/*.mobile.min.less')
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.init())
        .pipe(concat('bem.mobile.min.less'))
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.write())
        .pipe(gulp.dest(config.less.concatless))
});

gulp.task('concat-tablet', ['concat-mobilemin'], function() {
    browsersync.notify('Concat Tablet Less');

    return gulp.src(config.less.bemblocks + '*/*.tablet.less')
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.init())
        .pipe(concat('bem.tablet.less'))
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.write())
        .pipe(gulp.dest(config.less.concatless))
});


/*
 * Компиляция LESS в CSS
 * Создание sourcemaps
 * Минификация
 */

gulp.task('less', ['concat-tablet'], function() {
    browsersync.notify('Compiling Main Less');

    return gulp.src(config.less.src)
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'less',
                    message: err.name + ':' + err.message
                }
            })
        }))
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.init())
        .pipe(less({
            plugins: [autoprefixer]
        }))
        .pipe(gutil.env.env === 'prod' ? cssnano() : gutil.noop())
        .pipe(gutil.env.env === 'prod' ? gutil.noop() : sourcemaps.write())
        .pipe(gulp.dest(config.less.dest))
});
