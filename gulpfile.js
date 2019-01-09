// gulp watch
var gulp = require('gulp'),
    processor = require('postcss-processor-order'),
    postcss = require('gulp-postcss'),
    cssImport = require('postcss-import'),
    cssFor = require('postcss-for'),
    mixins = require('postcss-mixins'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    colorFunctions = require('postcss-color-function'),
    pixelsToRem = require('postcss-pixels-to-rem'),
    googleColor = require('postcss-google-color'),
    cssnano = require('gulp-cssnano'),
    cssDeclarationSorter = require('css-declaration-sorter'),
    cssNext = require('postcss-preset-env');

gulp.task('styles', function () {
    return gulp.src('./src/assets/postcss/styles.css')
        .pipe(
            postcss([
                // processor,
                cssNext,
                cssImport,
                cssFor,                
                cssvars,
                mixins,
                nested,
                pixelsToRem,
                googleColor,
                colorFunctions
            ])
        )
        .on('error', errorInfo)    
        .pipe(postcss([cssDeclarationSorter({ order: 'smacss' })])) 
        .pipe(cssnano())     
        .pipe(gulp.dest('./src/assets/css'));
});
gulp.task('styles', function () {
    return gulp.src('./src/admin/postcss/cms.css')
        .pipe(
            postcss([
                // processor,
                cssNext,
                cssImport,
                cssFor,                
                cssvars,
                mixins,
                nested,
                pixelsToRem,
                googleColor,
                colorFunctions
            ])
        )
        .on('error', errorInfo)    
        .pipe(postcss([cssDeclarationSorter({ order: 'smacss' })])) 
        .pipe(cssnano())     
        .pipe(gulp.dest('./static/admin'));
});

gulp.task('watch', function () {
    gulp.watch('./src/assets/postcss/**/*.css', function () {
        gulp.start('cssInject');
    });
    gulp.watch('./src/admin/postcss/**/*.css', function () {
        gulp.start('admincssInject');
    });    
});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./src/assets/css/styles.css')
        .pipe(postcss([cssDeclarationSorter({ order: 'smacss' })]))
        .pipe(cssnano())
});

gulp.task('admincssInject', ['styles'], function () {
    return gulp.src('./static/admin/cms.css')
        .pipe(postcss([cssDeclarationSorter({ order: 'smacss' })]))
        .pipe(cssnano())
});

function errorInfo(err) {
    console.log(err);
    this.emit('end');
}