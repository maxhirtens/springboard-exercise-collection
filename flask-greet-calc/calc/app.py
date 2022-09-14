from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

# @app.route("/add")
# def do_add():
#     """Add a and b parameters."""

#     a = int(request.args.get("a"))
#     b = int(request.args.get("b"))
#     result = add(a, b)

#     return str(result)


operators = {
  'add': add,
  'sub': sub,
  'div': div,
  'mult': mult
}

@app.route('/math/<operation>')
def calculate(operation):
  '''do an operation on given a and b'''
  a = int(request.args.get('a'))
  b = int(request.args.get('b'))
  res = operators[operation](a, b)
  return str(res)
