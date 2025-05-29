const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// Пути
const paths = {
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  html: {
    src: 'src/**/*.html',
    dest: 'dist'
  }
};

// Компиляция SCSS
function styles() {
  return gulp.src(paths.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// Копирование HTML
function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// Сервер разработки
function serve() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch(paths.scss.src, styles);
  gulp.watch(paths.html.src, html);
}

// Сборка проекта
const build = gulp.series(gulp.parallel(styles, html));

// Экспорт задач
exports.styles = styles;
exports.html = html;
exports.serve = serve;
exports.build = build;
exports.default = gulp.series(build, serve); 