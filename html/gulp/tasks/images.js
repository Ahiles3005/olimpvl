var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    browsersync = require('browser-sync'),
    spritesmith = require('gulp.spritesmith'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    config      = require('../config');

    config.imagemin.use = [pngquant()];

/*
 * Генерация спрайта и стилей для него
 */

gulp.task('sprites', function() {
    browsersync.notify('Compiling sprites');
    var spriteData;
    spriteData = 
        gulp.src(config.sprites.src2, {
            read: false
        })
        .pipe(spritesmith(config.sprites.options2));

    spriteData.img.pipe(gulp.dest(config.sprites.dest.image));

    spriteData = 
        gulp.src(config.sprites.src, {
            read: false
        })
        .pipe(spritesmith(config.sprites.options));

    spriteData.img.pipe(gulp.dest(config.sprites.dest.image));
    spriteData.css.pipe(gulp.dest(config.sprites.dest.css));

    return spriteData;
});

/*
 * Сжатие картинок
 */

gulp.task('images', ['sprites'], function() {
    browsersync.notify('Compiling images');

    return gulp.src(gutil.env.env === 'prod' ? config.images.srcProduction : config.images.src)
        .pipe(plumber({
            errorHandler: notify.onError(function(err) {
                return {
                    title: 'Image optimizer',
                    message: err.name + ':' + err.message
                }
            })
        }))
        .pipe(imagemin(config.imagemin))
        .pipe(gulp.dest(config.images.dest))
});