/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
    imageResize = require('gulp-image-resize');

  // Mover CSS para src/css  
  gulp.task('sass', function () {
    return sass('node_modules/bootstrap/scss/bootstrap.scss')
      .on('error', function (err) { console.log(err.message); })
      .pipe(gulp.dest('src/css'))
      .pipe(livereload());
  });
  
  // Mover JS para src/js
  gulp.task('js', function() {
      return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
          .pipe(gulp.dest("src/js"))
          .pipe(livereload());
  });

// Styles
gulp.task('styles', function() {
  return sass('src/css/main.css', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

//RESIZE
gulp.task('resize-images', function() {
  const image_dest = 'src/img'; // Destino das imagens
  return gulp.src('src/img/*.{jpg,png}')
    .pipe(imageResize({
      width: 300,
      crop: false,
      upscale: true
    }))
    .pipe(gulp.dest(image_dest))
})

// Clean
gulp.task('clean', function() {
  return del(['dist/styles', 'dist/scripts', 'dist/img']);
});

// Default task
gulp.task('default', gulp.series('styles', 'images', function(done) {
  gulp.series('styles', 'images');
  done();
}));

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/css/*.css', gulp.series('styles'));

  // Watch .js files
  // gulp.watch('src/js/*.js', gulp.series('scripts'));

  // Watch image files
  gulp.watch('src/img/*', gulp.series('images'));

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['src/**']).on('change', livereload.changed);

});