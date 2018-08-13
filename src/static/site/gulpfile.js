/**
 * Gulp task
 * @author phuong@codeographer.net
 * Do. Or do not. There is no try.
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
//var htmlmin = require('gulp-htmlmin');

//Copile sass
gulp.task('sass', function() {
    return gulp.src(['./sass/**/*.scss', '!./sass/define.scss'])
            .pipe(sass.sync({includePaths: ['./sass/']}).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
});

//Watch sass
gulp.task('sass:watch', function() {
    return gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'sass:watch']);

