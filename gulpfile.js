'use strict';
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');


gulp.task('sprite', function () {    
     
    var spriteData =
            gulp.src('./sprite/*.*') // source path of the sprite images
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            }));

    spriteData.img.pipe(gulp.dest("./css")); // output path for the sprite
    spriteData.css.pipe(gulp.dest("./css")); // output path for the CSS
});