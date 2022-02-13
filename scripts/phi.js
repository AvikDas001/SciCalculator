let hcf = 0;
let arr = [];
const mainPhi = (a,b) => {
    if(a % b == 0){
        hcf += b;
        switch(hcf){
            case 1:
                arr.push(hcf);
                break;
        }
        hcf = 0;
    }
    else{
        let x = b;
        let y = a % b;
        mainPhi(x,y);
    }
}
const testPhi = () => {
    let i = Number(document.forms["inputForm"]["inputPlace"].value);
    if(i <= 0 || i != Math.floor(i)){
        document.getElementById("phiResult").innerHTML = `No valid input`;
    }
    else{
        for(let j = 1; j <= i; j++){
            mainPhi(i,j);
        }
    }
    document.getElementById("phiResult").innerHTML = `The value of phi of ${i} is ${arr.length}`;
    arr = [];
    return false;
}