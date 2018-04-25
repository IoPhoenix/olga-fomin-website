// const gulp = require('gulp'),
//     imagemin = require('gulp-imagemin'),
//     del = require('del'),
//     rev = require('gulp-rev'),
//     cssnano = require('gulp-cssnano'),
//     usemin = require('gulp-usemin'),
//     uglify = require('gulp-uglify'),
//     browserSync = require('browser-sync').create();


// gulp.task('previewDist', function() {
//     browserSync.init({
//         notify: false,
//         server: {
//             baseDir: 'dist'
//         }
//     }); 
// });

// // optimize images and create new images folder in dist
// gulp.task('compressImages', ['deleteDistFolder'], () => {
//     return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
//                 .pipe(imagemin({
//                     progressive: true,
//                     interlaced: true,
//                     multipass: true
//                 }))
//                 .pipe(gulp.dest('./dist/assets/images'));
// });

// // delete dist folder each time we run gulp build
// gulp.task('deleteDistFolder', () => {
//     return del('./dist/');
// });

// // copy any additional files into dist
// gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
//     const paths = [
//         './app/**/*',
//          '!./app/index.html',
//          '!./app/assets/images/**',
//          '!./app/assets/videos/**',
//          '!./app/assets/styles/**',
//          '!./app/assets/scripts/**',
//          '!./app/temp',
//          '!./app/temp/**'
//     ];

//     return gulp.src(paths)
//                 .pipe(gulp.dest('./dist'));
// });

// // copy index.html to dist folder;
// // compress and revision js and css files;
// // revision: appending content hash to filename
// // so that browser re-downloads the file if it changes
// gulp.task('usemin', ['styles', 'scripts'], () => {
//     return gulp.src('./app/index.html')
//                 .pipe(usemin({
//                     // Revision and minify CSS:
//                     css: [function() { return rev() }, function() { return cssnano()}],
//                     // Revision and minify JavaScript:
//                     js: [function() { return rev() }, function() { return uglify()}]
//                 }))
//                 .pipe(gulp.dest('./dist'));
// });

// gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'compressImages', 'usemin']);