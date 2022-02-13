const gametFormer = (genotype) => {
  let gen_array = [];
  for(let i = 0; i < genotype.length; i += 2){
    gen_array.push(genotype.slice(i,i+2));
  }
  let gamet = [];
  for(let i = 1; i <= Math.pow(2, gen_array.length); i++){
    gamet.push("");
  }
  for(let i = 0; i < gen_array.length; i++){
    for(let j = 0; j < gamet.length; j++){
      if((j+1)%Math.pow(2,(i+1))!= 0 && (j+1)%Math.pow(2,(i+1)) <= Math.pow(2,i)){
        gamet[j] += gen_array[i][0];
      }
      else{
        gamet[j] += gen_array[i][1];
      }
    }
  }
  let uniqueGamet = [...new Set(gamet)];
  return uniqueGamet;
}
const crosser = (p1, p2) => {
  let gamets1 = gametFormer(p1);
  let gamets2 = gametFormer(p2);
  let f1 = [];
  let capitals = /[A-Z]/;
  for(let i = 0; i < (gamets1.length*gamets2.length); i++){
    f1.push("");
  }
  for(let x = 0; x < gamets1.length; x++){
    for(let y = 0; y < gamets2.length; y++){
      for(let z = 0; z < gamets1[x].length; z++){
        if(capitals.test(gamets1[x][z])){
          f1[(x*gamets2.length)+y] += gamets1[x][z] + gamets2[y][z];
        }
        else{
          f1[(x*gamets2.length)+y] += gamets2[y][z] + gamets1[x][z];
        }
      }
    }
  }
  let results = {};
  for(let a of f1){
    if(results[a]){
      results[a] += 1;
    }
    else{
      results[a] = 1;
    }
  }
  return results;
}
const testHybridization = () => {
    let parent1 = document.forms["inputForm"]["inputPlace1"].value;
    let parent2 = document.forms["inputForm"]["inputPlace2"].value;
    document.getElementById("gametResult1").innerHTML = `Gamets formed by first parent i.e. ${parent1} are: ${gametFormer(parent1)}`;
    document.getElementById("gametResult2").innerHTML = `Gamets formed by second parent i.e. ${parent2} are: ${gametFormer(parent2)}`;
    document.getElementById("hybridizationResult").innerHTML = "The genotypic ratio of F<sub>1</sub> genration is " + JSON.stringify(crosser(parent1, parent2), null,4);
    return false;
}