---
layout: blog
title: Adding downloadable files in a Flask App
date: 2021-11-08T19:08:36.407Z
tags: Python, Flask
category: Dev
subCategory: Flask
slug: adding-downloadable-files-in-a-flask-app
description: Sometimes, you might want to have users download a file or report
  in pdf, txt, excel, app, etc, from your application. In many of the flask
  tutorials I’ve seen, serving and allowing users download files are not
  covered. In this article, I will be highlighting how to build a simple app
  that allows you download files from a Flask Application.
---
Sometimes, you might want to have users download a file or report in pdf, txt, excel, app, etc, from your application. In many of the flask tutorials I’ve seen, serving and allowing users download files are not covered. In this article, I will be highlighting how to build a simple app that allows you download files from a Flask Application. 

### Prerequisites:

* Python 3.6 or above. Learn [why](https://flask.palletsprojects.com/en/0.12.x/python3/)
* Flask

### Setting up the directory

Even if Flask does not require a specific organization, for this tutorial, we’ll structure our app like this: 

![download_app_directory.png](Adding%20downloadable%20files%20in%20a%20Flask%20App%2027fe9468f94f43719831f4db2b5c7010/download_app_directory.png)

Once this is setup, we can create a virtual environment and install the dependencies —*Flask.* 

To create a virtual environment, you can run the following in the terminal:

```bash
###### FOR MAC AND LINUX USERS #########
########################################

##### TO CREATE VIRTUAL ENVIRONMENT ####
python3 -m venv env 

##### TO ACTIVATE THE VIRUTAL ENV #######
source env/bin/activate

######## FOR WINDOWS USERS #############
########################################

##### TO CREATE VIRTUAL ENVIRONMENT ####
py -m venv env

##### TO ACTIVATE THE VIRUTAL ENV #######
.\env\Scripts\activate
```

To install Flask, after activating the virtual environment, run the command: 

```bash
pip install Flask
```

In many cases, you would need a `requirements.txt` file in your directory when deploying your flask app. To add all your installations, run the command;

```bash
pip freeze > requirements.txt
```

Now that our directory is setup, we can create our app and routes in the `app.py` file.

### Configuring the routes

To enable your app return a file, we have to set a route that gets the file and posts it to the user, as an attachment, when they click a download button. To represent this in code;

```python
###### TO IMPORT THE DEPENDENCIES #####

###### TO IMPORT THE DEPENDENCIES #####

from flask import Flask, render_template, url_for, send_file
from werkzeug.exceptions import abort

app = Flask(__name__)

###### FILE TO BE DOWNLOADED #########
path = "trialdoc.pdf"

###### HOME PAGE ########
@app.route('/')
def index():
     
    return render_template('index.html')

###### DOWNLOAD ROUTE #######
@app.route('/download', methods=['GET', 'POST'])
def return_file():
    try:
        return send_file(path, as_attachment=True)

    except FileNotFoundError:
        abort(404)

if __name__ == '__main__':
     app.run(debug=True) # set debug to false before deploying.
```

Now that our routes have been configured, let’s setup the simple html page that we would be downloading our document from;

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Home</title>
    </head>

    <!---------BODY -------->
    <body>

        <h1> Get my free e-book! </h1>
        <p>Click the download button to continue.</p>

        <br>

        <a href="{{ url_for ('return_file')}}">
        <button> Download the free book! </button>
        </a>

    </body>
</html>
```

With our template and flask app all set up, we can test if it works. To start a flask app, you have to set its environment variables. 

```bash
###### FOR MAC/LINUX USERS ####### 
export FLASK_APP=app.py
flask run

######## FOR WINDOWS USERS #######
set FLASK_APP=app.py
flask run
```

Once this is run, the following should be displayed in your terminal:

```bash
 * Serving Flask app 'app.py' (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

You can copy the link `[http://127.0.0.1:5000/](http://127.0.0.1:5000/)` and paste to your browser. Your output should look like:

![get a free ebook ](/image/screen_shot_2021-08-17_at_9.53.22_am.png)

### **Conclusion**

Viola! You can now click the download button to get your document. This article has highlighted the simple method you can use to download files from a flask app, even in API use cases. You can find the code on GitHub [here](https://github.com/LuluNwenyi/Adding-Flask-Downloads-Tutorial).

I hope you enjoyed reading this tutorial and found it useful. Feel free to drop any questions in the comments, and if you would like to show your support by sponsoring, you can [buymeacoffee](https://buymeacoffee.com/lulunwenyi).