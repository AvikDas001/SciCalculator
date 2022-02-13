const testPermutation = () => {
    let permutation = 1;
    let n = Number(document.forms["inputForm"]["inputPlace1"].value);
    let r = Number(document.forms["inputForm"]["inputPlace2"].value);
    if(n < 0  || r < 0 || n < r || n == null || n == NaN || r == null || r == NaN || n != Math.floor(n) || r != Math.floor(r)){
        document.getElementById("permutationResult").innerHTML = `No valid input`;
    }
    else if(n == 0){
        document.getElementById("permutationResult").innerHTML = `Permutation of 0 objects taken 0 at a time = 1.`;
    }
    else if(r == 0){
        document.getElementById("permutationResult").innerHTML = `Permutation of ${n} objects taken 0 at a time = 1.`;
    }
    else{
        for(var i = n-r+1; i <= n; i++){
            permutation *= i;
        }
        document.getElementById("permutationResult").innerHTML = `Permutation of ${n} objects taken ${r} at a 
        time = ${permutation}`;
    }
    return false;
}