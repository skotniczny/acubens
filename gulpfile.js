var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
      open: false,
      server: "./dev"
    });

    gulp.watch("dev/scss/*.scss", ['sass']);
    gulp.watch("dev/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//   return sass("dev/scss/*.scss")
//     .pipe(gulp.dest("dev/css"))
//     .pipe(browserSync.stream());
// });

// Compile with gulp-ruby-sass + source maps
gulp.task('sass', function () {
  
  return sass('dev/scss/*.scss', {sourcemap: true, style: 'expanded'})
    .on('error', sass.logError)
    .pipe(sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: '../scss'
        }))
    .pipe(gulp.dest('dev/css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('default', ['serve']);