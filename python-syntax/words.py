def print_upper(words):
  '''For a list of words, prints them in all uppercase'''
  for word in words:
    print(word.upper())

def print_upper2(words):
  '''For a list of words, prints them in all uppercase if they start with e/E'''
  for word in words:
    if word.startswith('e') or word.startswith('E'):
      print(word.upper())

def print_upper3(words, letter):
  '''For a list of words, prints them in all uppercase if they start with e/E'''
  for word in words:
    if word.startswith(letter) or word.startswith(letter.upper()):
      print(word.upper())
