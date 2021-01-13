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
        result = Fraction(self.top * other.top, self.bottom * other.bottom)
        print('multiplying two fractions together')
        showWorkings(self, "X", other, result)
        return result

    def add(self, other):
        print('adding two fractions')
        result =  Fraction(self.top * other.bottom + self.bottom * other.top, self.bottom * other.bottom)
        showWorkings(self, "+", other, result)
        return result


def showWorkings(left, sign, right, result):
    print(' ',left.top, '    ', right.top, '     ', result.top )
    print(' ---',sign,'----',' = ', '----')
    print(' ', left.bottom, '    ', right.bottom, '     ', result.bottom)