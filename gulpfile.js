const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        notify: false,
        server: {
          baseDir: './'
        }
      })
//  gulp.watch('./views/**/*.pug', ['html'])
//  gulp.watch('./scss/**/*.scss', ['css'])
    gulp.watch('./js/**/*.js', reload) 
});

gulp.task('default',['browser-sync'])
// gulp.task('default',['browser-sync','html','css'])