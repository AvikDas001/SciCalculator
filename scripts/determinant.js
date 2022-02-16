const det = (mat) => {
    if(mat.length == 1){
        return mat[0][0];
    }
    let total = 0;
    for(let i = 0; i < mat[0].length; i++){
        let subMat = [];
        for(let j = 1; j < mat.length; j++){
            subMat.push([...mat[j].slice(0,i),...mat[j].slice(i+1,)]);
        }
        total += Math.pow(-1,i)*mat[0][i]*det(subMat);
    }
    return total;
}
const testDet = () => {
    let x = document.forms["inputForm"]["inputPlace"].value;
    let arr = x.split("\n");
    let mainMat = [];
    for(let i of arr){
        mainMat.push(i);
    }
    for(let i = 0; i < mainMat.length; i++){
        mainMat.splice(i,1,mainMat[i].split(","));
    }
    document.getElementById("detResult").innerHTML = `The determinant is ${det(mainMat)}`;
    return false;
}