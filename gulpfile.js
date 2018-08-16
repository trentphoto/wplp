var gulp = require ('gulp'),
    gutil = require ('gulp-util'),
    sass = require('gulp-sass'),
    connect = require ('gulp-connect'),
    browserSync = require('browser-sync').create();

var sassSources;

sassSources = ['sass/style.scss']

gulp.task('sass', function() {
  return gulp.src(sassSources)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('*.html', ['html'])
});

gulp.task('connect', function(){
  connect.server({
    root: 'public/',
    livereload: true
  });
});

gulp.task('html', function(){
  return gulp.src('public/*.html')
    .pipe(connect.reload())
});

gulp.task('default', ['sass', 'watch', 'connect'])
