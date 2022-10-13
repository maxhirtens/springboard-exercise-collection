"""Blogly application."""

from flask import Flask, request, redirect, flash, render_template
from models import db, connect_db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

from flask_debugtoolbar import DebugToolbarExtension
app.config['SECRET_KEY'] = "boomerang"
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def show_users():
  '''Show user list and signup form'''

  users = User.query.all()
  return render_template('list.html', users=users)

@app.route('/users/new')
def add_user():
  '''Add a user and redirect'''

  return render_template('adduser.html')
