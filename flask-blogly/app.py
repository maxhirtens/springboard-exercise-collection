"""Blogly application."""

from flask import Flask, request, redirect, flash, render_template
from models import db, connect_db, User

app = Flask(__name__)
app.app_context().push()

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

from flask_debugtoolbar import DebugToolbarExtension
app.config['SECRET_KEY'] = "boomerang"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def show_users():
  '''Show user list and signup form'''

  users = User.query.all()
  return render_template('list.html', users=users)

@app.route('/users/new', methods=['GET'])
def show_user_form():
  '''Show add user form'''

  return render_template('adduser.html')

@app.route('/users/new', methods=['POST'])
def add_user():
  '''Add a user and redirect home'''
  new_user = User(first_name = request.form['firstname'],
  last_name = request.form['lastname'],
  image_url=request.form['image'] or None
  )
  db.session.add(new_user)
  db.session.commit()

  return redirect('/')

@app.route('/users/<int:user_id>')
def show_user_detail(user_id):
  '''Show user detail page'''

  user = User.query.get_or_404(user_id)
  return render_template('userdetail.html', user=user)


@app.route('/users/<int:user_id>/edit')
def edit_user_detail(user_id):
  '''Show edit user detail page'''

  user = User.query.get_or_404(user_id)
  return render_template('useredit.html', user=user)

@app.route('/users/<int:user_id>/edit', methods=['POST'])
def update_user(user_id):
  '''Take in new user form'''

  user = User.query.get_or_404(user_id)
  user.first_name = request.form['firstname']
  user.last = request.form['lastname']
  user.image_url = request.form['image'] or None

  db.session.add(user)
  db.session.commit()

  return redirect('/')

@app.route('/users/<int:user_id>/delete', methods=['POST'])
def delete_user(user_id):
  '''Delete user from db'''

  user = User.query.get_or_404(user_id)

  db.session.delete(user)
  db.session.commit()

  return redirect('/')
