'use strict';
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');


gulp.task('sprite', function () {    
    //Create sprite for good-for images only
    var spriteData =
            gulp.src('./goodfor/*.*') // source path of the sprite images
            .pipe(spritesmith({
                imgName: 'good-for-sprite.png',
                cssName: 'good-for.css'
            }));

    spriteData.img.pipe(gulp.dest("./css")); // output path for the sprite
    spriteData.css.pipe(gulp.dest("./css")); // output path for the CSS
});