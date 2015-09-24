'use strict';

var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('dev', ['browser-sync']);

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'src/server.js',
    watch: ['src/**/*']
  })
  .on('start', function onStart() {
    if (!called) { cb(); }
    called = true;
  })
  .on('restart', function onRestart() {
    setTimeout(function reload() {
      browserSync.reload({
        stream: false   //
      });
    }, BROWSER_SYNC_RELOAD_DELAY);
  });
});

gulp.task('browser-sync', ['nodemon'], function () {
  browserSync.init({
    files: ['src/**/*'],
    proxy: 'http://localhost:3000',
    port: 4000,
    browser: ['google-chrome']
  });
});
