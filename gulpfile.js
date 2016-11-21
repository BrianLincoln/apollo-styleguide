var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// the default task
gulp.task('sass-variables', function() {
  return gulp.src(['src/styles/sprak/sprak-variables.scss'])
       .pipe(concat('sprak-variables.scss'))
       .pipe(gulp.dest('./dist/export'));
});

gulp.task('sass', function(){
  return gulp.src('src/styles/sprak/sprak.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dist/export'))
});
