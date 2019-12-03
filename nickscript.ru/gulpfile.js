const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function browserReload(done){
    browserSync.reload();
    done();
}


function watchFile(done) {
    gulp.watch("./**/*.css", browserReload);
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./**/*.js", browserReload);
    done();
}

function sync(done){
    browserSync.init({
        server: {
            baseDir: "./compas/"
        },
        port: 3000
    });
    done();
}



gulp.task('default', gulp.parallel(sync, watchFile));

