"""Models for Blogly."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)

class User(db.Model):
  '''User class'''

  __tablename__ = 'users'

  id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

  first_name = db.Column(db.String(20),
                     nullable=False
                     )

  last_name = db.Column(db.String(30),
                     nullable=False
                     )

  image_url = db.Column(db.String(100),
                     nullable=True,
                     default = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                     )

  def greet(self):
        """Greet using name."""

        return f"Thanks for logging in, {self.first_name} {self.last_name}"
