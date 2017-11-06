const gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');

gulp.task('defaultTask', function() {
    console.log('you created a gulp task');
});


gulp.task('html', function() {
    console.log('html changed!');
});

// use Autoprefixer to make css work in all browsers
gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested,  autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });
});

gulp.task('watch', function() {
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});