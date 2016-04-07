var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss');

gulp.task('autoprefixer', function(){
	gulp.src('./assets/css/bundle.min.css')
	    .pipe(postcss([ 
	        autoprefixer({ 
	            browsers: [
                    'Firefox >= 1',
                    'Chrome >= 1',
                    'Safari >= 5',
                    'Edge >= 1',
                    'IE >= 9',
                    'iOS >= 6',
                    'ChromeAndroid >= 1',
                    'FirefoxAndroid >= 1',
                    'Android >= 4'
			    ]
	        }) 
	    ]))
        .pipe(gulp.dest('./assets/css'));
});