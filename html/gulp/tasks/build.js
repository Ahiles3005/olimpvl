var gulp  = require('gulp');
var gutil = require('gulp-util');

var devBuildTasks  = ['html', 'js', 'less', 'images', 'fonts'];
var prodBuildTasks = ['js', 'less', 'images', 'fonts'];

gulp.task('build', gutil.env.env === 'prod' ? prodBuildTasks : devBuildTasks);