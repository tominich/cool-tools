class Fraction:
    def __init__(self, top, bottom):
        self.top = top
        self.bottom = bottom



    def describeMe(self):
        print ('                   ',self.top)
        print ('I am the fraction ------')
        print ('                   ',self.bottom)
        print('')

    def times(self, other):
        return Fraction(self.top * other.top, self.bottom * other.bottom)

    def add(self, other):
        return Fraction(self.top * other.bottom + self.bottom * other.top, self.bottom * other.bottom)


def formatEqualtion(left, sign, right, result):
    print(' ',left.top, '    ', right.top, '     ', result.top )
    print(' ---',sign,'----',' = ', '----')
    print(' ', left.bottom, '    ', right.bottom, '     ', result.bottom)