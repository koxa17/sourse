//Подключаем Gulp
const gulp = require('gulp');
//Подключаем gulp-sass
const sass = require('gulp-sass');
//Подключаем плагин rename
const rename = require('gulp-rename');
//Подключаем autoprefix
const autoprefixer = require('gulp-autoprefixer');
//Подключает sorcemap
const soursmaps = require('gulp-sourcemaps');
//Подключаем browser-sync + создаем ее сразу
const browserSync = require('browser-sync').create();

function styleFile(done) {
    gulp.src('./app/scss/**/style.scss') //Выбираем файл
        .pipe(soursmaps.init()) //Создаем sourcemaps
        .pipe(sass({
            errorLogToConsole: true, //Включаем отлов ошибок
            outputStyle: 'compressed' //Минифицируем файл
        }))
        .on('error', console.error.bind(console))//Обработчик события
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({suffix: '.min'} )) // Прогоняем через плагин, переименовываем его и добовляем суфикс .min к названию
        .pipe(soursmaps.write('./')) // Записываем данные в sourcemaps
        .pipe(gulp.dest('./app/css/')) //Куда будет помещен выходной файл
        .pipe(browserSync.stream()); //Обновление браузера при изменении стилей
    done();
};

function watchFile() {
    gulp.watch('./app/scss/**/*.scss', styleFile); //Отслеживаем изменения (где, какую фунцию выполнить при изменении)
    gulp.watch('./app/**/*.html', browserReload);
    gulp.watch('./app/**/*.js', browserReload);
};

function sync(done) {
    browserSync.init({ //создаем и передаем обьект
        server: { //сервер
            baseDir: './app/'//директория для синхронизации
        },
        port: 3000
    });
    done();
}

function browserReload(done) { //создаем функцию для перезагрузки браузера
    browserSync.reload();
    done();
};

gulp.task('default', gulp.parallel(sync, watchFile));


// gulp.task('default', gulp.series(task-name1, task-name2)); //Вызвать задачу поочередно
