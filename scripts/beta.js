function det(arr){
    if(arr.length == 1){
        return arr[0];
    }
    else{
        let spArr1 = [];
        let spArr2 = [];
        for(let i = 0; i < arr[0].length; i++){
            for(let j = 1; j < arr.length; j++){
                let cloneArray = arr[j].slice();
                cloneArray.splice(i,1);
                spArr1.push(cloneArray);
                cloneArray = [];
                
            }
            spArr2.push(Math.pow(-1,i)*arr[0][i]*det(spArr1[i]));
        }
        return spArr2.reduce((a,b) => a+b,0);
    }
}
function tester(){
    alert(det([
        [2,3,-7],
        [1,-1,-1],
        [3,2,2]
    ]));
}