"""Word Finder: finds random words from a dictionary."""
import random
# file = open(
#     '/Users/owl/Dropbox/code/springboard-exercise-collection/python-oo-practice/words.txt')
# '/Users/owl/Dropbox/code/springboard-exercise-collection/python-oo-practice/words.txt'


class WordFinder:
    '''counts number of words in a file, lets you choose a random one'''

    def __init__(self, path):
        '''displays number of words in a file'''
        file = open(path)
        self.words = self.parse(file)
        print(f"{len(self.words)} words read")

    def parse(self, file):
        '''parse file into list of words'''
        return [word.strip() for word in file]

    def random(self):
        '''chooses random word'''
        return random.choice(self.words)
