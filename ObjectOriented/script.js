// Class definition
var Culculation = function(firstPara, secondPara) {

    this.firstP = firstPara;
    this.secondP = secondPara;

    // Function definition
    this.getAdd = function() {
        return this.firstP + this.secondP;
    }
    this.getSub = function() {
        return this.firstP - this.secondP;
    }
    this.getMul = function() {
        return this.firstP * this.secondP;
    }
    this.getDiv = function() {
        return this.firstP / this.secondP;
    }
};

// Instantiate
var calc = new Culculation(32, 56);

console.log("Addition : " + calc.getAdd());
console.log("Subtraction : " + calc.getSub());
console.log("Multiplication : " + calc.getMul());
console.log("Division : " + calc.getDiv());