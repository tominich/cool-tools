
function calcPrimeFactors(a) {
    var primeCalc = new PrimeCalc();
    var remaining = a;
    var factors = new Array();

    while(primeCalc.hasNext()) {
        candidatePrimeFactor = primeCalc.next();
        if (remaining == 1) {
            break;
        }
        while (remaining % candidatePrimeFactor == 0) {
            // we found a factor
            remaining = remaining / candidatePrimeFactor;
           // System.out.println(candidatePrimeFactor);
            factors.push(candidatePrimeFactor);
        }

    }
    return factors ;
}

class PrimeCalc {
    previousPrimes = new Array();
    COUNT_PRIMES = 1000000;
    nextCandidate = 1;

    constructor() {
        this.nextCandidate = 1;
        this.previousPrimes.push(2);
    }

    //@Override
    hasNext() {
        return true;
    }

    //@Override
    next() {
        while (true) {
            this.nextCandidate++;
            var prime = true;
            let sqrt = Math.sqrt(this.nextCandidate);
             for (var i = 0; i< this.previousPrimes.size; i++) {
                var previousPrime = this.previousPrimes[i]
                if (previousPrime > sqrt) {
                    break;
                }
                if (this.nextCandidate % previousPrime == 0) {
                    //not a prime!
                    prime = false;
                    break;
                }
             }
            if (prime) {
                this.previousPrimes.push(this.nextCandidate);
                break;
            }
        }

        return this.nextCandidate;
    }

    

}