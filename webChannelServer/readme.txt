TLDR: 1.Update gulpfile.js with your apps specifics 2.run gulp 3.upload zip to ACS

This directory's contents are a template for connecting a bot to 
a sample webpage and hosting it on Oracle Application Container Service(ACS).
The zip file produced should be loaded in Oracle Application Container Service(ACS)
after performing the below instructions.


You will need the following before proceeding:
 - A Oracle Cloud Account
 - A Intelligent Bot built in Oracle Autonomous Mobile Cloud Enterprise
 - An web channel created within the bots settings > channels
 - The associated app ID for the web channel in the bot
 - A deployed ACS application using the default demo app
 - The deployed ACS application URL which will host the website and embedded bot
 - A business name for the title section of the embedded bot window
 - A hex color for the highlights of the embedded bot window

Steps for customizing the project:

Name your background image for the site ‘screenshot.png’ (all lowercase) and place 
your image in public/images directory.
(if your image is a different format you will need to change the value
manually in public/home.html to match your file type)

Set the corresponding details for the following in gulpfile.js. 
 
 - APP_URL = from Oracle ACS, without trailing slash 
    ex. 'https://OracleEnergy-gse00014266.uscom-east-1.oraclecloud.com:443'
 - APP_ID = from the web channel settings in the bot, ex. 'abcdefghijkllididslk1234'
 - BUSINESS_NAME = title for chat bot widget ex. 'ACME Chatbot'
 - BRAND_HEX_COLOR = hex color for chat widget ex. '006341'

For example:
const appVars = {
  APP_ID: 'abcdefghijkllididslk12340',
  APP_URL: 'https://OracleEnergy-gse00014266.uscom-east-1.oraclecloud.com:443',
  BUSINESS_NAME: 'ACME Chatbot',
  BRAND_HEX_COLOR: '006341'
};

save the file after updating the values, then in the project's root directory run:
 ./node_modules/gulp/bin/gulp.js 
(if you have gulp installed globally for your machine, you can simply run 'gulp')

This should replace the strings for your project in all appropriate files.

The gulp task will zip the files and place an archive named 'archive.zip' in the parent of 
this directory. Use this zip file to update your deployed ACS app.