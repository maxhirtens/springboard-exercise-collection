'''Put sample data into our db.'''
from app import app
from models import User, db


# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
User.query.delete()

# Add users
max = User(first_name='Max', last_name='Hirtenstein')
tom = User(first_name='Tom', last_name='Braider')
linda = User(first_name='Linda', last_name='Wall')

# Add new objects to session, so they'll persist
db.session.add(max)
db.session.add(tom)
db.session.add(linda)

# Commit--otherwise, this never gets saved!
db.session.commit()
