const gulp      = require('gulp');
const imagemin  = require('gulp-imagemin');

gulp.task('dist', function () {
    gulp.src('assets/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets'))
});
