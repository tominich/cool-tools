import Fraction

x = Fraction.Fraction(2, 7)
y = Fraction.Fraction(3, 9)

x.describeMe()
y.describeMe()

result = x.times(y)

Fraction.formatEqualtion(x, "X", y, result)

Fraction.formatEqualtion(x, "+", y, x.add(y))