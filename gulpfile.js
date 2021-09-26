// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }
//
// exports.default = defaultTask
const gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var concat = require('gulp-concat');

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


// compile sass files
gulp.task('sass', function () {
    return gulp.src('app/style/*.scss')
        .pipe(concat('combined.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/style/cssDist/'));
});

// Static server
gulp.task('serve', function () {
    browserSync.init({
        // https: {key: './localhost.key', cert: './localhost.crt'},
        server: {
            baseDir: "./app"
        }
    });

    gulp.watch([
        'app/*.js',
        'app/*.html',
        'app/*/*.html',
        'app/images/**/*',
        'app/scripts/**/*.js',
        'app/style/*.css',
        'app/pages/*.html'
    ]).on('change', reload);

    // watch sass files
    gulp.watch(['app/style/*.scss']).on('change', function () {
        var gulpRes = gulp.src('app/style/*.scss')
            .pipe(concat('combined.scss'))
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('app/style/cssDist/'));
        reload();
    });
});
