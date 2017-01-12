var gulp = require('gulp');
var shell = require('gulp-shell')
var ts = require("gulp-typescript");
gulp.task("default", [], function () {
    gulp.watch(["./src/client/html/*"], ["moveHTML"])
    gulp.watch(["./src/client/index.ts", "./src/client/index.scss"], ["webpack"])
    gulp.watch(["./src/server/index.ts"], ["server"])
    gulp.watch(["./src/server/options.json"], ["moveJson"])
})
gulp.task('build', ["webpack", "moveHTML","server","moveJson"], function () {
});
gulp.task("moveJson",[], function () {
    gulp.src("./src/server/options.json").pipe(gulp.dest("./dist/assets/"))
});

gulp.task("moveHTML", [], function () {
    gulp.src("./src/client/html/*").pipe(gulp.dest("./dist/assets/views"))
});


gulp.task("webpack", [], function () {
    shell.task("webpack -p");
})

gulp.task("server", [], function () {
    return gulp.src('src/server/*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest('./dist'));
})