const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();
    


gulp.task('watch', function() {
    
        browserSync.init({
            notify: false,
            server: {
                baseDir: 'app'
            }
        });
    
        watch('./app/index.html', function() {
            browserSync.reload();
        });
    
        watch('./app/assets/styles/**/*.css', function() {
            gulp.start('cssInject');
        });

        watch('./app/assets/scripts/**/*.js', function() {
            gulp.start('scriptsRefresh');
        });

         watch('./images/**/*.{jpg,png,jpeg,svg}', function() {
            gulp.start('imagesRefresh');
        });
    });
    
    
    gulp.task('cssInject', ['styles'],  function() {
        return gulp.src('./app/temp/styles/styles.css')
            .pipe(browserSync.stream());
    });
    
    gulp.task('imagesRefresh', ['convertProjectImages'], function() {
        browserSync.reload();
    });

    gulp.task('scriptsRefresh',  ['scripts'], function() {
        browserSync.reload();
    })