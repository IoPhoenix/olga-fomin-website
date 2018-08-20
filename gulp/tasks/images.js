const gulp = require('gulp'),
    responsiveImages = require('gulp-responsive'),
    extReplace = require('gulp-ext-replace'),
    del = require('del'),
    merge = require('merge-stream');
    

gulp.task('deleteImagesFolder', function() {
    return del('./app/assets/images');
});

gulp.task('copyIcons', ['deleteImagesFolder'], function() {
    return gulp.src('./images/icons/*.png').pipe(gulp.dest('./app/assets/images/icons'));
});

// convert images to webp format
gulp.task('responsive_images', ['deleteImagesFolder'], function() {
    const convertGeneralImages = gulp.src(['./images/*.{png,jpg,jpeg}', '!./images/icons/*.png'])
        .pipe(responsiveImages({
            '*.jpg': {
                format: 'webp'
            },
            '*.jpeg': {
                format: 'webp'
            }
        }))
        .pipe(extReplace('.webp'))
        .pipe(gulp.dest('./app/assets/images/'));

    const convertProject1Images = gulp.src(['./images/project/*.{png,jpg,jpeg}'])
        .pipe(responsiveImages({
            '*.jpg': {
            format: 'webp'
            }
        }))
        .pipe(extReplace('.webp'))
        .pipe(gulp.dest('./app/assets/images/project1'));

    return merge(convertGeneralImages, convertProject1Images);
});
