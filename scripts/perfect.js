var divisors = [];
const mainPerfect = (n) => {
    for(let i = 1; i < n; i++){
        if(n % i == 0){
            divisors.push(i);
        }
    }
    if(Number(divisors.reduce((a,b) => a+b),0) == n){
        return `The number ${n} is perfect.`;
    }
    else{
        return `The number ${n} is not perfect.`;
    }
}
const testPerfect = () => {
    let x = Number(document.forms["inputForm"]["inputPlace"].value);
    if(x <= 0 || x == null || x != Math.floor(x)){
        document.getElementById("perfectResult").innerHTML = "No valid input";
    }
    else{
        document.getElementById("perfectResult").innerHTML = mainPerfect(x);
    }
    divisors = [];
    return false;
}