// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }
//
// exports.default = defaultTask
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// Static server
gulp.task('serve', function() {
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
      'app/style/*.scss',
      'app/pages/*.html'
    ]).on('change',reload);
});
