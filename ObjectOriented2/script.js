// Class definition
var Calculation = function(firstPara, secondPara) {

    this.firstP = firstPara;
    this.secondP = secondPara;
};

// Instantiate
var calc = new Calculation(32, 56);

// Add functions dynamically
calc.getAdd = function() {
    return this.firstP + this.secondP;
}
calc.getSub = function() {
    return this.firstP - this.secondP;
}
calc.getMul = function() {
    return this.firstP * this.secondP;
}
calc.getDiv = function() {
    return this.firstP / this.secondP;
}

console.log("Addition : " + calc.getAdd());
console.log("Subtraction : " + calc.getSub());
console.log("Multiplication : " + calc.getMul());
console.log("Division : " + calc.getDiv());