// import {calcPrimeFactors} from './primeCalc.js';

function simplifyFraction() {
    var top = document.getElementById("top").value;
    var bottom = document.getElementById("bottom").value;

    var factorsTop = calcPrimeFactors(top)
    var factorsBottom= calcPrimeFactors(bottom)

    document.getElementById("topSimp").value = factorsTop.join(" x ");
    document.getElementById("bottomSimp").value = factorsBottom.join(" x ");

    //now simplify
    //2,2,3,7
    //3,5,7,13
    /* 
        algo 1
            loop through the top

            loop through the bottom

                if == then discard from top and bottom
        algo 2
            start at first element of each
            if == then discard
            if top > bottom then
                save bottom
                 advance bottom and check ==
            if bottom > top then
                save top
                advance top and check ===


    */
    var simpTop = new Array()
    var simpBottom = new Array()

    //algo 2
    var processing = true
    var iTop = 0
    var iBot = 0
    var t;
    var b;
    var finishedTop = false;
    var finishedBottom = false;
    while (processing) {

        if (factorsTop.length > iTop) {
            t = factorsTop[iTop]
        } else {
            // we've finished with top, so just add all the remaining bottoms to simpBottom
            finishedTop = true
        }
        if (factorsBottom.length > iBot) {
            b = factorsBottom[iBot]
        } else {
            //we've finished with the bottom, so just add all the remaining tops to simpTop
            finishedBottom = true;
        }

        if (finishedBottom && finishedTop) {
            processing = false;
        } else if (finishedBottom) {
            simpTop.push(t)
            iTop ++
        } else if  (finishedTop) {
            simpBottom.push(b);
            iBot ++
        } else {
            if (t > b) {
                simpBottom.push(b)
                iBot ++
            } else if (t < b ) {
                simpTop.push(t)
                iTop ++
            } else if (t == b) {
                //match  - discard both
                iBot ++
                iTop ++
            } 
        }

        if (factorsTop.length <= iTop && factorsBottom.length <= iBot) {
            processing = false;
        }
        
    }
    if (simpBottom.length == 0) simpBottom.push(1)
    if (simpTop.length == 0) simpTop.push(1)

    //algo 1
/*     factorsTop.forEach(top => {
        bStart = 0
        for(b=bStart; b< factorsBottom.length; b++) {
            bottom = factorsBottom[b]
            if (top == bottom) {
                //cancel out
                bStart = b + 1
                break;
            } else if (bottom > top) {
                bStart = b
                break;
            } else  {
                simpBottom.push(bottom)
            }
        }}); */
    
    document.getElementById("topSimplified").value = simpTop.reduce( (a, b) => a * b );
    document.getElementById("bottomSimplified").value = simpBottom.reduce( (a, b) => a * b );
}