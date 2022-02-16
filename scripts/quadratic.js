const spSign = (x) => {
    if(x < 0){
        if(x == -1){
            return "-";
        }
        else{
            return x.toString();
        }
    }
    else{
        if(x == 1){
            return "";
        }
        else{
            return x.toString();
        }
    }
}
const signB = (x) => {
    if(x < 0){
        if(x == -1){
            return "-";
        }
        else{
            return x.toString();
        }
    }
    else{
        if(x == 1){
            return "+";
        }
        else{
            return "+"+x.toString();
        }
    }
}
const signC = (x) => {
    if(x < 0){
        if(x == -1){
            return "-1";
        }
        else{
            return x.toString();
        }
    }
    else{
        if(x == 1){
            return "+1";
        }
        else{
            return "+"+x.toString();
        }
    }
}
const testQuadratic = () => {
    let a = Number(document.forms["inputForm"]["inputPlace1"].value);
    let b = Number(document.forms["inputForm"]["inputPlace2"].value);
    let c = Number(document.forms["inputForm"]["inputPlace3"].value);
    let discriminant = Math.pow(b,2) - (4*a*c);
    if(discriminant >= 0){
        let solution1 = (-b+Math.sqrt(discriminant))/(2*a);
        let solution2 = (-b-Math.sqrt(discriminant))/(2*a);
        document.getElementById("quadraticResult").innerHTML = `The solutions of ${spSign(a)}x<sup>2</sup>
        ${signB(b)}x${signC(c)}=0 are ${solution1} and ${solution2}`;
    }
    else{
        let proSolution = Math.sqrt((-discriminant))/(2*a);
        let textsolution1 = proSolution;
        let textsolution2 = -proSolution;
        document.getElementById("quadraticResult").innerHTML = `The solutions of ${spSign(a)}x<sup>2</sup>
        ${signB(b)}x${signC(c)}=0 are ${(-b)/(2*a)}${signB(textsolution1)}i and 
        ${(-b)/(2*a)}${signC(textsolution2)}i, where i is the imaginary square root of 1.`;
    }
    return false;
}