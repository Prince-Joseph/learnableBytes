var gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const purgecss = require("gulp-purgecss");
const uglify = require('gulp-uglify');

const browserSync = require("browser-sync").create();

function nunjucks_to_html() {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src("src/pages/**/*.+(html|nunjucks|njk)")
      // Renders template with nunjucks
      .pipe(
        nunjucksRender({
          path: ["src/templates"],
        })
      )
      // outputs files in app folder
      .pipe(gulp.dest("build"))
  );
}

gulp.task("nunjucks", nunjucks_to_html);

gulp.task('sass', function () {
     gulp.src('src/assets/scss/**/*.scss') 
     .pipe(sass().on('error', sass.logError)) 
     .pipe(gulp.dest('src/assets/css/**/*.css')); });
     
function buildStyle() {
  return gulp
    .src("src/assets/css/**/*.css")
    .pipe(purgecss({ content: ["build/*.html", "build/assets/js/**/*.js"] }))
    .pipe(gulp.dest("build/assets/css"));
}
gulp.task("css", buildStyle);




function uglifyJs(){
    return gulp.src(['src/assets/js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest("build/assets/js"));
};

gulp.task("js", uglifyJs);

gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "build",
    },
  });
  
  gulp
    .watch(["./build/**/*.html", "./build/**/*.css", "./build/**/*.js"])
    .on("change", browserSync.reload);
  gulp.watch("./src/**/**/*.njk", gulp.series("nunjucks"));
  gulp.watch("./src/assets/scss/**/*.scss",gulp.series("sass"));
  gulp.watch("./src/assets/css/**/*.css", gulp.series("css"));
  gulp.watch("./src/assets/js/**/*.js", gulp.series("js",));
});
