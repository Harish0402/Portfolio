const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('scss/**/*.scss') // Path to your SCSS files
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css')); // Path to output compiled CSS files
}

function watch() {
    gulp.watch('scss/**/*.scss', compileSass);
}

exports.default = gulp.series(compileSass, watch);