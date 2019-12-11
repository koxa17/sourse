let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let browserSync = require('browser-sync').create();

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./www/"
        },
        port: 3000
    });
    done();
}

function css_style(done) {
    gulp.src('./www/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        })).on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browers: ['last 2 version'],
            cascade: false
        }))
        .pipe( rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe( gulp.dest('./www/css/') )
        .pipe(browserSync.stream());

    done();
}
function browerReload(done) {
    browserSync.reload();
    done();
}

function watchSass(){
    gulp.watch("./www/scss/**/*", css_style);
    gulp.watch("./**/*.html", css_style);

}

function watchFile(){
    gulp.watch("./www/scss/**/*", css_style);
    gulp.watch("./**/*.html", browerReload);
    gulp.watch("./**/*.js", browerReload);
    gulp.watch("./practic/main.js", browerReload);
}


gulp.task('default', gulp.parallel(sync, watchFile));
gulp.task(sync);
// gulp.task(css_style);
// gulp.tast(print);




// gulp.task('default', defaultSomeTask);

// exports.default = defaultSomeTask;