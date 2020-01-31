const gulp = require('gulp'),
    ts = require('gulp-typescript'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    karma = require('gulp-karma');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('.'));
});

gulp.task('less', () => {
    return gulp.src('./src/assets/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist'));
});

var allFiles = [
    'node_modules/angular/angular.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'dist/*.js',
    'test/*.js'
];
gulp.task('test', (coverage) => {
    return gulp.src(allFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        })).on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

gulp.task('default', gulp.series('ts', 'less'));