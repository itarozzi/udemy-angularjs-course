Project Directory Structure
============================
Just annotate some project directory structures to decide what is better...  


Flask1
------

source: https://kkschick.wordpress.com/2014/12/12/setting-up-the-structure-and-routing-of-an-app-using-flask-and-angularjs/

```
  project_name/
    api.py  ==> Module containing my RESTful API
    app.py  ==> Module containing my Flask application
    config.py  ==> Flask config file
    model.py  ==> Module containing my models
    static/
        css/  ==> Sub-directory containing stylesheets
            sass_style.css
        img/  ==> Sub-directory containing image assets
        js/  ==> Sub-directory containing JS files
            app.js  ==> Angular app/config file
            controllers.js  ==> Angular controllers
            directives.js  ==> Angular custom directives
        partials/  ==> Sub-directory containing HTML
            about.html
            home.html
            login.html
            reports.html
            signup.html
    templates/  ==> Sub-directory for the index page
        index.html
    tests.py  ==> Python module containing unit tests
```

AngularJS better structure
-------------------------
https://scotch.io/tutorials/angularjs-best-practices-directory-structure

```
app/
----- shared/   // acts as reusable components or partials of our site
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
----- components/   // each component is treated as a mini Angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.module.js
----- app.routes.js
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html
```



To be tested:
--------------
https://github.com/shea256/flask-app-generator
