const testBinary =() => {
    let num = parseInt(document.forms["inputForm"]["inputPlace"].value);
    document.getElementById("binaryResult").innerHTML = `The binary equivalent of (${num})<sub>10</sub> is (${num.toString(2)})<sub>2</sub>`;
    return false;
}
const testDecimal = () => {
    let num = document.forms["inputForm"]["inputPlace"].value;
    document.getElementById("binaryResult").innerHTML = `The decimal equivalent of (${num})<sub>2</sub> is (${parseInt(num,2)})<sub>10</sub>`;
    return false;
}