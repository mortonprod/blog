var gulp = require('gulp');
var ts = require("gulp-typescript");


gulp.task('default', [], function () {
    var tsProject = ts.createProject('./tsconfig-server.json');
    var tsresult = tsProject.src()
        //   .pipe(sourcemaps.init())
        .pipe(tsProject());

    return tsresult.js
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'));

});