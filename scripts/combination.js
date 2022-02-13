const testCombination = () =>{
    let n = Number(document.forms["inputForm"]["inputPlace1"].value);
    let r = Number(document.forms["inputForm"]["inputPlace2"].value);
    let permutation = 1;
    if(n < 0  || r < 0 || n < r || n == null || n == NaN || r == null || r == NaN || n != Math.floor(n) || r != Math.floor(r)){
        document.getElementById("combinationResult").innerHTML = "No valid input";
    }
    else if(n == 0){
        document.getElementById("combinationResult").innerHTML = "Combination of 0 objects taken 0 at a time = 1.";
    }
    else if(r == 0 || n == r){
        document.getElementById("combinationResult").innerHTML = `Combination of ${n} objects taken ${r} at a time = 1.`;
    }
    else{
        for(let i = n-r+1; i <= n; i++){
            permutation *= i;
        }
        let combination = permutation;
        for(let x = 1; x <= r; x++){
            combination /= x;
        }
        document.getElementById("combinationResult").innerHTML = `Combination of ${n} objects taken ${r} at a time = 
        ${combination}.`;
    }
    return false;
}