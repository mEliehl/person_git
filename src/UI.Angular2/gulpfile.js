/// <binding AfterBuild='libs, build:typescript' Clean='clean:libs, clean:typescript' ProjectOpened='watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var uglify = require('gulp-uglify');

var paths = {
    lib: {
        npm: "./node_modules/",
        dest: "./wwwroot/lib_package/",
    },

    typescript: {
        src: [
            "./scripts/**/*.ts"
        ],
        dest: "./wwwroot/app/",
        config : "./scripts/tsconfig.json"
    }
};

var tsconfig = typescript.createProject(paths.typescript.config);

var libs = [
            paths.lib.npm + "angular2/bundles/angular2.min.js",
            paths.lib.npm + "angular2/bundles/http.min.js",
            paths.lib.npm + "angular2/bundles/angular2-polyfills.min.js",
            paths.lib.npm + "angular2/bundles/router.min.js",
            paths.lib.npm + "rxjs/bundles/rx.min.js",
            paths.lib.npm + "es6-shim/es6-shim.min.js",
            paths.lib.npm + "es6-shim/es6-shim.map",
            paths.lib.npm + "systemjs/dist/system.js",
            paths.lib.npm + "systemjs/dist/system-polyfills.js"
];

//region lib
{
    gulp.task('libs', function () {
        return gulp.src(libs)
            .pipe(gulp.dest(paths.lib.dest));
    });

    gulp.task('clean:libs', function (callback) {
        return del([
          paths.lib.dest
        ], callback);
    });
}

//region Typescript
{
    gulp.task('clean:typescript', function (callback) {
        return del([
          paths.typescript.dest
        ], callback);
    });

    gulp.task('build:typescript', function () {
        return gulp.src(paths.typescript.src)
		.pipe(typescript(tsconfig))
        //.pipe(uglify())
		.pipe(gulp.dest(paths.typescript.dest));
    });
}

gulp.task('watch', function () {
    gulp.watch(paths.typescript.src, ['build:typescript']);
});