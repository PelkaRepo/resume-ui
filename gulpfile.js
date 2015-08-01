var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var webserver = require('gulp-webserver');
var opn       = require('opn');
var del       = require('del');
var runSequence = require('run-sequence');

var sourcePaths = {
  styles: ['bower_components/**/*.css','bower_components/**/*.scss','bower_components/**/*.less','src/assets/css/**/*.css','src/assets/css/**/*.scss','src/assets/css/**/*.less'],
  scripts: ['bower_components/**/*.js','src/app/**/*.js'],
  images: ['src/assets/img/**/*.jpg','src/assets/img/**/*.png','src/assets/img/**/*.gif'],
  views: 'src/app/views/**/*.html',
  data: 'src/data/**/*.json',
  root: 'src/index.html'
};

var distPaths = {
  styles: 'dist/css',
  scripts: 'dist/js',
  images: 'dist/img',
  views: 'dist/views',
  data: 'dist/api',
  root: 'dist'
};

var server = {
  host: 'localhost',
  port: '3000'
};

gulp.task('styles', function () {
  return gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(gulp.dest( distPaths.styles ));
});

gulp.task('scripts', function () {
	return gulp.src( sourcePaths.scripts )
	  .pipe(plumber())
	  .pipe(gulp.dest( distPaths.scripts ));
});

gulp.task('images', function () {
	return gulp.src( sourcePaths.images )
	  .pipe(plumber())
	  .pipe(gulp.dest( distPaths.images ));
});

gulp.task('views', function () {
	return gulp.src( sourcePaths.views )
	  .pipe(plumber())
	  .pipe(gulp.dest( distPaths.views ));
});

gulp.task('data', function () {
	return gulp.src( sourcePaths.data )
	  .pipe(plumber())
	  .pipe(gulp.dest( distPaths.data ));
});

gulp.task('root', function () {
	return gulp.src( sourcePaths.root )
	  .pipe(plumber())
	  .pipe(gulp.dest( distPaths.root ));
});

gulp.task('webserver', function() {
  gulp.src( 'dist/.' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('watch', function(){
  gulp.watch(sourcePaths.styles, ['styles']);
  gulp.watch(sourcePaths.scripts, ['scripts']);
  gulp.watch(sourcePaths.images, ['images']);
  gulp.watch(sourcePaths.views, ['views']);
  gulp.watch(sourcePaths.data, ['data']);
  gulp.watch(sourcePaths.root, ['root']);
});

gulp.task('clean', function(){
  return function() {
    del([distPaths.root]);
    gulp.dest(distPaths.root);
  }
});

gulp.task('build', function(callback) {
  runSequence('clean','styles','scripts','images','views','data','root',callback);
});

gulp.task('serve', ['build', 'webserver', 'watch', 'openbrowser']);

gulp.task('default', ['serve']);
