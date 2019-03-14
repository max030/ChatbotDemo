const gulp = require('gulp');
const replace = require('gulp-replace');
const zip = require('gulp-zip');

const appVars = {
  APP_ID: '5c2e3e495a5b390022fd3e07',
  APP_URL: 'https://HrchatbotMeg-gse00014961.uscom-east-1.oraclecloud.com:443',
  BUSINESS_NAME: 'HRChatBot',
  BRAND_HEX_COLOR: '006341'
};

/* This Gulp tack will replace app variables in your folder structure */
gulp.task('default', () => {
  /*Fill in each empty string in the replace call 
  with the relevant details for your app */
  const stream = gulp
    .src(['./**', '!./node_modules/*', '!./readme.txt', '!./gulpfile.js'])
    .pipe(replace('APP_ID', appVars.APP_ID))
    .pipe(replace('APP_URL', appVars.APP_URL))
    .pipe(replace('BUSINESS_NAME', appVars.BUSINESS_NAME))
    .pipe(replace('BRAND_HEX_COLOR', appVars.BRAND_HEX_COLOR))
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest('../'));

  console.log(
    "Archive.zip will be created for your app and placed in the parent of this directory. \n \
    Upload it to ACS to try out your bot's web channel!"
  );
  return stream;
});
