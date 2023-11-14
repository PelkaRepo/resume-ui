var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var opn = require('opn');
var del = require('del');
var runSequence = require('run-sequence');

var sourcePaths = {
  styles: ['bower_components/**/*.css', 'bower_components/**/*.scss', 'bower_components/**/*.less', 'src/assets/css/**/*.css', 'src/assets/css/**/*.scss', 'src/assets/css/**/*.less'],
  scripts: ['bower_components/**/*.js', 'src/app/**/*.js'],
  images: ['src/assets/img/**/*.jpg', 'src/assets/img/**/*.png', 'src/assets/img/**/*.gif'],
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

gulp.task('styles', function(done) {
  gulp.src(sourcePaths.styles, { allowEmpty: true })
    .pipe(gulp.dest(distPaths.styles));
  done();
});

gulp.task('scripts', function(done) {
  gulp.src(sourcePaths.scripts, { allowEmpty: true })
    .pipe(gulp.dest(distPaths.scripts));
  done();
});

gulp.task('images', function(done) {
  gulp.src(sourcePaths.images, { allowEmpty: true })
    .pipe(gulp.dest(distPaths.images));
  done();
});

gulp.task('views', function(done) {
  gulp.src(sourcePaths.views, { allowEmpty: true })
    .pipe(gulp.dest(distPaths.views));
  done();
});

gulp.task('data', function(done) {
  gulp.src(sourcePaths.data, { allowEmpty: true })
    .pipe(gulp.dest(distPaths.data));
  done();
});

gulp.task('root', function(done) {
  gulp.src(sourcePaths.root)
    .pipe(gulp.dest(distPaths.root));
  done();
});

gulp.task('webserver', function(done) {
  gulp.src('dist/.', { allowEmpty: true })
    .pipe(webserver({
      host: server.host,
      port: server.port,
      livereload: true,
      directoryListing: false
    }));
  done();
});

gulp.task('openbrowser', function(done) {
  opn('http://' + server.host + ':' + server.port);
  done();
});

gulp.task('watch', function(done) {
  gulp.watch(sourcePaths.styles, function(cb) {
    cb();
  });
  gulp.watch(sourcePaths.scripts, function(cb) {
    cb();
  });
  gulp.watch(sourcePaths.images, function(cb) {
    cb();
  });
  gulp.watch(sourcePaths.views, function(cb) {
    cb();
  });
  gulp.watch(sourcePaths.data, function(cb) {
    cb();
  });
  gulp.watch(sourcePaths.root, function(cb) {
    cb();
  });
  done();
});

gulp.task('clean', function(done) {
    del([distPaths.root]);
    gulp.dest(distPaths.root);
    done();
});

gulp.task('build', gulp.series('clean', 'styles', 'scripts', 'images', 'views', 'data', 'root', function(done) {
  done();
}));

gulp.task('serve', gulp.series('webserver', 'watch', 'openbrowser', function(done) {
  done();
}));

gulp.task('default', gulp.series('build', 'serve', function(done) {
  done();
}));
