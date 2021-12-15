var gulp  = require('gulp');
var gutil = require('gulp-util');

var development = 'build/',
    production  = '../local/templates/main/';

var path = {
    dest: gutil.env.env === 'prod' ? production : development,
    build: {
        html: development,
        js: 'js/',
        jquery: 'js/jquery/', // jquery делаем отдельно чтобы подключить его в head
        html5shiv: 'js/html5shiv/', // html5shiv делаем отдельно чтобы подключить его в head
        css: 'css/',
        cssSprite: 'src/style/partials/',
        img: 'img/',
        imgSprite: 'src/img/',
        fonts: 'fonts/'
    },
    src: {
        html: 'src/*.html',
        jsInternal: 'src/js/internal.js',
        jsExternal: 'src/js/external.js',
        jquery: 'bower_components/jquery/dist/*.*', // jquery делаем отдельно чтобы подключить его в head
        html5shiv: 'bower_components/html5shiv/dist/*.*', // html5shiv делаем отдельно чтобы подключить его в head
        style: 'src/style/main.less',
        img: ['src/img/**/*.*', '!src/img/sprite/**/*.*', '!src/img/sprite@2x/**/*.*'],
        imgProduction: ['src/img/**/*.*', '!src/img/sprite/**/*.*', '!src/img/sprite@2x/**/*.*', '!src/img/inhtml/**/*.*'],
        imgSprite: 'src/img/sprite/**/*.*',
        imgSprite2: 'src/img/sprite@2x/**/*.*',
        fonts: 'src/fonts/**/*.*',
        concatless: 'src/style/concat-less/',
        bemblocks: 'src/style/bem-blocks/'
    },
    watch: {
        html: 'src/**/*.html',
        jsInternal: ['src/js/**/*.js', '!src/js/external.js', '!src/js/vendor/**/*.js'],
        jsExternal: ['src/js/external.js', 'src/js/vendor/**/*.js'],
        style: ['src/style/**/*.less', '!src/style/concat-less/*.less', '!src/style/partials/sprite.less'],
        img: ['src/img/**/*.*', '!src/img/sprite.png', '!src/img/sprite@2x.png'],
        fonts: 'src/fonts/**/*.*'
    }
};

module.exports = {
    browsersync: {
        server: {
            baseDir: './' + development
        },
        tunnel: false,
        open: false,
        host: 'localhost',
        port: 3000,
        logPrefix: "Frontend_Blank"
    },
    html: {
        src: path.src.html,
        dest: path.build.html
    },
    js: {
        srcInternal: path.src.jsInternal,
        srcExternal: path.src.jsExternal,
        srcJquery: path.src.jquery, // jquery делаем отдельно чтобы подключить его в head
        srcHtml5shiv: path.src.html5shiv, // html5shiv делаем отдельно чтобы подключить его в head
        dest: path.dest + path.build.js,
        destJquery: path.dest + path.build.jquery,
        destHtml5shiv: path.dest + path.build.html5shiv
    },
    less: {
        src: path.src.style,
        dest: path.dest + path.build.css,
        concatless: path.src.concatless,
        bemblocks: path.src.bemblocks
    },
    autoprefixer: {
        browsers: [
            'last 10 versions',
            'ie 8',
            'ie 9'
        ]
    },
    images: {
        src: path.src.img,
        srcProduction: path.src.imgProduction,
        dest: path.dest + path.build.img
    },
    imagemin: {
        progressive: true,
        svgoPlugins: [{
            removeViewBox: false,
            convertStyleToAttrs: true
        }],
        interlaced: true
    },
    sprites: {
        src: path.src.imgSprite,
        src2: path.src.imgSprite2,
        dest: {
            css: path.build.cssSprite,
            image: path.build.imgSprite
        },
        options: {
            imgName: 'sprite.png',
            cssName: 'sprite.less',
            imgPath: '../img/sprite.png',
            cssFormat: 'less',
            algorithm: 'top-down',
            padding: 10,
            engine: 'pngsmith',
            imgOpts: {
                format: 'png'
            }
        },
        options2: {
            imgName: 'sprite@2x.png',
            cssName: 'sprite2.less',
            imgPath: '../img/sprite2.png',
            cssFormat: 'less',
            algorithm: 'top-down',
            padding: 10,
            engine: 'pngsmith',
            imgOpts: {
                format: 'png'
            }
        }
    },
    fonts: {
        src: path.src.fonts,
        dest: path.dest + path.build.fonts
    },
    watch: {
        html: path.watch.html,
        jsInternal: path.watch.jsInternal,
        jsExternal: path.watch.jsExternal,
        less: path.watch.style,
        images: path.watch.img,
        sprites: path.watch.imgSprite,
        fonts: path.watch.fonts
    },
    clean: {
        dest: './' + path.dest
    }
};