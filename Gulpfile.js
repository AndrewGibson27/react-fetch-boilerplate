var gulp = require('gulp');
    /*mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    gulpFilter = require('gulp-filter'),
    addsrc = require('gulp-add-src'),
    minifyCss = require('gulp-minify-css'),
    replace = require('gulp-replace'),
	order = require("gulp-order"),
	postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');*/
    
gulp.task('move', function(){
	gulp.src('./assets/**')
		.pipe(gulp.dest('./build/assets'));
		
	gulp.src('./templates/prod.jade')
	     .pipe(gulp.dest('./build/templates'));
	     
	gulp.src('./webpack-isomorphic-tools-config.js')
	     .pipe(gulp.dest('./build'));
});