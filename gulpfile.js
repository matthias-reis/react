var gulp = require('gulp');
var webserver = require('gulp-webserver');
var babel = require("gulp-babel");
var sass = require("gulp-sass");
var rename = require("gulp-rename");

gulp.task("js", function() {
	return gulp.src("build/**/*.jsx")
	.pipe(babel({presets: ['es2015']}).on('error', function (error) {
		console.log(error);
	})).pipe(gulp.dest("build"));
});

gulp.task("css", function() {
	return gulp.src("scss/*.scss")
	.pipe(sass({
		outputStyle: 'expanded',
		includePaths: ['./node_modules/compass-mixins/lib']
	}).on('error', sass.logError))
	.pipe(gulp.dest('./build/css'));
});


gulp.task('run', function() {
	gulp.src('build')
	.pipe(webserver({
		livereload: {
			enabled: true
		},
		fallback: 'index.html',
		directoryListing: {
			enable: true,
			path: ''
		},
		host: '0.0.0.0',
		open: false
	}));
});


gulp.task('compile', ['js', 'css']);

gulp.task('watch', function() {
	gulp.watch('**/*.scss', ['css']);
	gulp.watch('build/**/*.jsx', ['js']);
});
