const sign = (x) => {
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
let array = [
    [0,0],//Respectively the real and the imaginary part of the first complex number
    [0,0]//Respectively the real and the imaginary part of the second complex number
];
const mainFunc = (n1, n2) => {
    let Re = /[\+\-]?\d*\.?\d+(?!i)/;
    let Im = /[\+\-]?\d*\.?\d+(?=i)/;
    let Itest1 = /\+?i/;
    let Itest2 = /\-i/;
    if(n1.match(Re) != null){
        array[0][0] = Number(n1.match(Re)[0]);
    }
    if(n1.match(Im) != null){
        array[0][1] = Number(n1.match(Im)[0]);
    }
    if(n1.match(Im) == null){
        if(Itest1.test(n1)){
            array[0][1] = 1;
        }
        if(Itest2.test(n2)){
            array[0][1] = -1;
        }
    }
    if(n2.match(Re) != null){
        array[1][0] = Number(n2.match(Re)[0]);
    }
    if(n2.match(Im) != null){
        array[1][1] = Number(n2.match(Im)[0]);
    }
    if(n2.match(Im) == null){
        if(Itest1.test(n2)){
            array[1][1] = 1;
        }
        if(Itest2.test(n2)){
            array[1][1] = -1;
        }
    }
}
const addComplex = () => {
    let N1 = document.forms["inputForm"]["inputPlace1"].value;
    let N2 = document.forms["inputForm"]["inputPlace2"].value;
    mainFunc(N1, N2);
    document.getElementById("complexResult").innerHTML = `The value of (${N1}) + (${N2}) is ${array[0][0] + array[1][0]}
    ${sign(array[0][1]+array[1][1])}i`;
    array = [[0,0],[0,0]];
    return false;
}
const multiplyComplex = () => {
    let N1 = document.forms["inputForm"]["inputPlace1"].value;
    let N2 = document.forms["inputForm"]["inputPlace2"].value;
    mainFunc(N1, N2);
    document.getElementById("complexResult").innerHTML = `The value of (${N1})x(${N2}) is ${(array[0][0]*array[1][0])- 
    (array[0][1]*array[1][1])} ${sign((array[0][0]*array[1][1]) + (array[0][1]*array[1][0]))}i`;
    array = [[0,0],[0,0]];
    return false;
}