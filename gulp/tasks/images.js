const gulp = require('gulp'),
    responsiveImages = require('gulp-responsive'),
    extReplace = require('gulp-ext-replace'),
    del = require('del'),
    merge = require('merge-stream');
    

gulp.task('deleteImagesFolder', function() {
    return del('./app/assets/images');
});

gulp.task('copyIcons', ['deleteImagesFolder'], function() {
    return gulp.src('./images/icons/*.{png,svg}').pipe(gulp.dest('./app/assets/images/icons'));
});

// convert images to webp format
gulp.task('convertGeneralImages', ['copyIcons'], function() {
    gulp.src(['./images/*.{png,jpg,jpeg}', '!./images/icons/*.png'])
        .pipe(responsiveImages({
            '*.{png,jpg,jpeg}': {
                format: 'webp'
            }
        }, {
            progressive: true
        }))
        .pipe(extReplace('.webp'))
        .pipe(gulp.dest('./app/assets/images/'));
    });

    gulp.task('convertProjectImages', ['deleteImagesFolder'], function() {
        for (let i = 1; i < 5; i++) {
            gulp.src([`./images/project${i}/*.{png,jpg,jpeg}`])
                .pipe(responsiveImages({
                    '*.{png,jpg,jpeg}': {
                        format: 'webp'
                    }
                }, {
                    progressive: true
                }))
                .pipe(extReplace('.webp'))
                .pipe(gulp.dest(`./app/assets/images/project${i}`));
            }
    });


    gulp.task('createProjectMockups', ['convertProjectImages'], function() {
        for (let i = 1; i < 5; i++) {
            gulp.src([`./images/project${i}/mockups--medium.{png}`])
                .pipe(responsiveImages({
                    'mockups--medium.png': [
                        {
                            width: 2000,
                            rename: 'mockups--medium',
                            format: 'webp'
                        },
                        {
                            width: 900,
                            rename: 'mockups--small',
                            format: 'webp'
                        }, {
                            width: 480,
                            rename: 'mockups--smaller',
                            format: 'webp'
                        }
                    ]
                }))
                .pipe(extReplace('.webp'))
                .pipe(gulp.dest(`./app/assets/images/project${i}`));
        }
    });
