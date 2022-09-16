from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story
app = Flask(__name__)

app.config["SECRET_KEY"] = "boomerang"
debug = DebugToolbarExtension(app)

# http://127.0.0.1:5000/

@app.route('/')
def show_homepage():
    '''generate a form as homepage'''
    prompts = story.prompts
    return render_template('madlibs.html', prompts=prompts)

@app.route('/story')
def show_story():
    '''return completed madlib'''
    text = story.generate(request.args)
    return render_template('story.html', text=text)
