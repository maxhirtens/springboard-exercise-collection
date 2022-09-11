"""Python serial number generator."""


class SerialGenerator:
    """Machine to create unique incrementing serial numbers.

    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=0):
        '''makes new generator and assigns start and next'''
        self.start = start
        self.next = start

    def generate(self):
        '''increments serial number counter'''
        self.next += 1
        return self.next

    def __repr__(self):
        '''show repr'''
        return f"<SerialGenerator start = {self.start} next = {self.next}>"

    def reset(self):
        '''resets counter'''
        self.next = self.start
