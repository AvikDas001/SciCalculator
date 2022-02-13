const testDivisor = () => {
    let n = Number(document.forms["inputForm"]["inputPlace"].value);
    if(n <= 0 || n == null || n != Math.floor(n)){
        document.getElementById("divisorResult").innerHTML = "No valid input";
    }
    else if(n == 1){
        document.getElementById("divisorResult").innerHTML = "The divisor of 1 is 1.";
    }
    else{
        let arr = [];
        for(let x = 1; x <= n; x++){
            if(n % x == 0){
                arr.push(x);
            }
        }
        let y = arr.reduce((a,b) => (a+b), 0);
        document.getElementById("divisorResult1").innerHTML = `The divisors of ${n} are ${arr}`;
        document.getElementById("divisorResult2").innerHTML = `The number of divisors of ${n} is ${arr.length}`;
        document.getElementById("divisorResult3").innerHTML = `The sum of divisors of ${n} is ${y}`;
    }
    return false;
}