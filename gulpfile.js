/*
* @Author: dangxiaoli
* @Date:   2018-01-02 13:43:31
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2018-01-04 21:25:21
*/
var gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS  = require('gulp-clean-css');


gulp.task('clean', () => {
    del.sync('build');
});


gulp.task('less', () => {
    gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 5 versions', 'Firefox > 20'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('build'));
});


gulp.task('default', ['clean', 'less'], () => {
    console.log('done!');
});


gulp.task('watch', () => {
    const watcher = gulp.watch('src/**/*', ['default']);
    watcher.on('change', event => {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

