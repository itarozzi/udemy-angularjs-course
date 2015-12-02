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


To be tested:
--------------
https://github.com/shea256/flask-app-generator
