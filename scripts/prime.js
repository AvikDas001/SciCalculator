const testPrime = () =>{
    let n = Number(document.forms["inputForm"]["inputPlace"].value);
    if(n <= 0 || n == null || n != Math.floor(n)){
        document.getElementById("primeResult").innerHTML = `No valid input.`;
    }
    else if(n == 1){
        document.getElementById("primeResult").innerHTML = `The number 1 is neither prime nor composite.`;
    }
    else{
        let arr = [];
        for(let x = 1; x <= n; x++){
            if(n % x == 0){
                arr.push(x);
            }
        }
        if(arr.length == 2){
            document.getElementById("primeResult").innerHTML = `The number ${n} is prime.`;
        }
        else{
            document.getElementById("primeResult").innerHTML = `The number ${n} is composite.`;
        }
        arr = [];
    }
    return false;
}