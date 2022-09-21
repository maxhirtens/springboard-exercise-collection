from flask import Flask, request, render_template, redirect, flash, session
from random import randint, choice, sample
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

app = Flask(__name__)
app.config['SECRET_KEY'] = 'boomerang'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route('/')
def show_start_survey():
    '''Starts the survey.'''
    return render_template('start.html', survey=survey)

@app.route('/begin', methods=['POST'])
def begin_survey():
    '''clears responses'''
    session['responses'] = []
    return redirect('/questions/0')

@app.route('/questions/<int:qid>')
def show_questions(qid):
    '''Shows one question at a time.'''
    responses = session.get('responses')
    if (len(responses) != qid):
        # Trying to access questions out of order.
        flash(f"Invalid question id: taking you to proper spot...")
        return redirect(f"/questions/{len(responses)}")
    question = survey.questions[qid]
    return render_template('question.html', question_num=qid, question=question)

@app.route('/answer', methods=['POST'])
def store_answer():
    '''Save choices to session, redirects to next question.'''
    #gets the answer
    choice = request.form['answer']
    # add answer to session
    responses = session['responses']
    responses.append(choice)
    session['responses'] = responses

    if (len(responses) >= len(survey.questions)):
        return redirect('/finished')
    else:
        return redirect(f'/questions/{len(responses)}')

@app.route('/finished')
def survey_finished():
    '''show finished page.'''
    return render_template('finished.html', survey=survey)
