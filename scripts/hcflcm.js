const testHCF = (a,b) => {
    if(a % b == 0){
        return b;
    }
    else{
        return testHCF(b,(a%b));
    }
}
const testHCFLCM = () => {
    var i = Number(document.forms["inputForm"]["inputPlace1"].value);
    let j = Number(document.forms["inputForm"]["inputPlace2"].value);
    if(i <= 0 || j <= 0 || i != Math.floor(i) || j != Math.floor(j)){
        document.getElementById("hcflcmResult").innerHTML = `No valid input`;
    }
    else{
        if(i >= j){
            document.getElementById("hcflcmResult").innerHTML = `The HCF of ${i} and ${j} is ${testHCF(i,j)} and the LCM is ${(i * j)/testHCF(i,j)}`;
        }
        else{
            document.getElementById("hcflcmResult").innerHTML = `The HCF of ${i} and ${j} is ${testHCF(j,i)} and the LCM is ${(i * j)/testHCF(j,i)}`;
        }
    }
    return false;
}