const gulp = require('gulp'),
	liveServer = require('gulp-live-server'),
	browserSync = require('browser-sync'),
	browserify = require('browserify'),
	reactify = require('reactify'),
	source = require('vinyl-source-stream');

gulp.task('live-server', () => {
	const server = new liveServer('server/main.js');
	server.start();
});

gulp.task('bundle', () => {
	return browserify({
		entries: 'app/main.jsx',
		debug: true
	})
	.transform(reactify)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./.tmp'))
});

gulp.task('serve', ['live-server'], () => {
	browserSync.init(null, {
		proxy: 'http://localhost:7777',
		port: 9001
	});
});