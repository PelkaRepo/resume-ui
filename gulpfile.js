var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var webserver = require('gulp-webserver');
var opn       = require('opn');

var sourcePaths = {
  styles: ['bower_components/**/*.css','bower_components/**/*.scss','bower_components/**/*.less','src/assets/css/**/*.css','src/assets/css/**/*.scss','src/assets/css/**/*.less'],
  scripts: ['bower_components/**/*.js','src/app/**/*.js'],
  images: ['src/assets/img/**/*.jpg','src/assets/img/**/*.png','src/assets/img/**/*.gif'],
  views: 'src/views/**/*.html',
  root: 'src/index.html'
};

var distPaths = {
  styles: 'dist/css',
  scripts: 'dist/js',
  images: 'dist/img',
  views: 'dist/views',
  root: 'dist'
};

var server = {
  host: 'localhost',
  port: '3000'
};

gulp.task('styles', function () {
  gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(gulp.dest( distPaths.styles ));
});

gulp.task('scripts', function () {
	gulp.src( sourcePaths.scripts )
	  .pipe(plumber())
	  .pipe(gulp.dest( distPaths.scripts ));
});

gulp.task('images', function () {
	gulp.src( sourcePaths.images )
	  .pipe(plumber())
	  .pipe(gulp.dest( distPaths.images ));
});

gulp.task('views', function () {
	gulp.src( sourcePaths.views )
	  .pipe(plumber())
	  .pipe(gulp.dest( distPaths.views ));
});

gulp.task('root', function () {
	gulp.src( sourcePaths.root )
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
  gulp.watch(sourcePaths.root, ['root']);
});

gulp.task('build', ['styles','scripts','images','views','root']);

gulp.task('serve', ['build', 'webserver', 'watch', 'openbrowser']);

gulp.task('default', ['serve']);
