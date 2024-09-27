# WEB_DEV_TASK_Fairstone
 
## Current Issues and Solutions

### HOME PAGE

*  There is an error on one of the image on the slider - this is due to image4.jpg doesn't exist (needs to be image3.jpg) - I have now changed this to image4.jpg so that it now renders the image


*  No Modal pops up when you click the 'Click here to see a mushroom' button - this is due to the script making the modal display as none on the click event - With the Modal, I have made a few changes to this as well as fix the issue.  I have removed the script adding an inline style to the element ("block" to show, "none" to hide it), instead I have added a class to the CSS, and it will simply add a class to show the modal if the button is click and remove it if the 'X' is clicked or if the user clicks outside the modal


*  About page is broken on the navigation - This is just a simple spelling error - changed from 'abou.html' to 'about.html'


*  Would place all third party script tags within the body tag (near the bottom) for performance purposes - this is now moved to the bottom of the file


*  Within the code, the <nav></nav> tags are outside the `<body></body>` tags - needs to be placed inside the 'body' tags - this is now moved just underneath the opening body tag


*  There are 2 classes within the nav tag, so I have just removed one of them


*  Within the `<script></script>` tags, the variables should either be 'const' or 'let' to keep up with modern Javascript syntax - this would probably be best being placed in a separate JS file and including in the page like the third party scripts (same with the CSS files) - this is now changed to use const for all variables


*  Both the styles and script tags are outside the closing body tags - again should be within the body tags and the CSS should be within the head tags as this would be rendered first by the DOM - the CSS is now in its own file called site.css and included within the <head> page of the page


*  Also within the script tags, when comparing, it would be best using '===' instead of '==' as the triple '=' will strictly compare the values and the datatypes, whilst the double one will try to convert the values to the same datatype - I have changed this to use the triple '='.


### ABOUT PAGE

*  No styling applied to the page - best adding it as a separate CSS files and including it onto the page - this I have added to the page


*  Wouldn't add any necessary script tags if they aren't required to the page - again go down the route of including it into a separate JS file and adding it to the page


*  This page was missing the closing `<html>` tag


*  Have added both the footer and some other parts of the nav, so it has more consistency throughout the site  (this might now have been necessary but for consistency I thought it would be best)

### FOLDER STRUCTURE

I would place all the CSS, JS and Img folders within this folder because it gives a nice structured flow to it.  Then I would including the files to all pages so all pages will have the same styling, scripts, etc.  This is the approach that I will go down.

### NEW APPROACH TO THE SITE

Going forward I would develop this site using a framework, such as Laravel for example, and create a template page so all the pages would follow the same structure without having to copy and paste the same code onto a new page all the time.

Creating the site using a framework would be a lot easier for when the site needs to be developed for having a CMS system as it Laravel contains good authentication built into it.

