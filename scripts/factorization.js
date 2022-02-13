let a = [];
const mainFac = (n) => {
    if(n <= 0 || n == null || n != Math.floor(n)){
        document.getElementById("facResult").innerHTML = `No valid input.`;
    }
    else if(n == 1){
        document.getElementById("facResult").innerHTML = `The number 1 is neither prime nor composite.`;
    }
    else{
        let arr1 = [];
        for(let x = 1; x <= n; x++){
            if(n % x == 0){
                arr1.push(x);
            }
        }
        if(arr1.length == 2){
            a.push(n);
        }
        else{
            a.push(arr1[1]);
            n = n/arr1[1];
            mainFac(n);
        }
    }
}
const testFac = () => {
    let i = Number(document.forms["inputForm"]["inputPlace"].value);
    mainFac(i);
    document.getElementById("facResult").innerHTML = `The prime factoriazation of ${i} is ${a}`;
    a = [];
}