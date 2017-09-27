'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

// local server
gulp.task('connect', function() {
    connect.server({
        root: '',
        port: 8080,
        livereload: true
    });
});

// styles (outputStyle: expanded, compressed)
gulp.task('sass', function() {
    gulp.src('source/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload())
});

// html (rigger for including partials use "//= footer.html" in html)
gulp.task('html', function() {
    gulp.src('source/*.html')
        .pipe(rigger())
        .pipe(gulp.dest(''))
        .pipe(connect.reload())
});

// js
gulp.task('js', function () {
    gulp.src('source/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(connect.reload())
});

// watcher
gulp.task('watch', function() {
    gulp.watch('source/sass/**/*.scss', ['sass']);
    gulp.watch('source/js/*.js', ['js']);
    gulp.watch('source/**/*.html', ['html']);
});

gulp.task('default', ['connect', 'sass', 'html', 'js', 'watch']);
