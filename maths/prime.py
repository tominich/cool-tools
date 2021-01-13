
def calc(): 
    primes = [2]
    for i in range(2, 10000):
        isPrime = True
        for prime in primes:
            if (i % prime == 0):
                isPrime = False
        if (isPrime):
            #print(i, 'is prime')
            primes.append(i)

    for p in primes:
        print(p, 'is a prime number')


calc()

