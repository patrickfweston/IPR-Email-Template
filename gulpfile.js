var gulp = require('gulp');
var mjml = require('gulp-mjml');
var replace = require('gulp-replace');

gulp.task('default', function() {
  gulp.src('./index.mjml')
    .pipe(replace('<mj-text', '<mj-text font-family="Arial"'))
    .pipe(mjml())
    .pipe(replace('NaN', '100%'))
    .pipe(replace('max-width:600px;', 'max-width:750px;'))
    .pipe(replace('width:600px;', 'width:750px;'))
    .pipe(replace('<h3>', '<h3 style="color: #6A4C96;text-align: left;margin-bottom: 0; margin-top: 0; line-height: 18px;">'))
    .pipe(replace('<h2>', '<h2 style="color: #4E2A84;text-align: left;margin-bottom: 0; margin-top: 25px;">'))
    .pipe(replace('<h1>', '<h1 style="color: #4E2A84;text-align: left;margin-bottom: 0;">'))
    .pipe(replace('class="link"', "style='color: #4E2A84; text-decoration: none; font-weight:bold;'"))
    .pipe(replace('min-width:40%;', "min-width:40%;background-color:#D8D6D6"))
    .pipe(replace('min-width:60%;', "min-width:60%;border-top: 4px solid #D8D6D6"))
    .pipe(replace('<p>', "<p style='line-height: 18px;'>"))
    .pipe(replace('class="publication"', "style='padding:0; margin: 5px 0 0; color: #342F2E; font-style:italic;'"))
    .pipe(gulp.dest('./'));
});


gulp.task('watch', function (cb) {
    gulp.watch('./index.mjml', ['default']);
});
