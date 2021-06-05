// Super class definition
var Alphabet = function() {};

// Function definition
Alphabet.prototype.upperCase = function() {
    console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
};

// Subclass definition
var Character = function() {};

// Prototype chain (inheritance)
Character.prototype = new Alphabet();

// Function definition
Character.prototype.lowerCase = function() {
    console.log("abcdefghijklmnopqrstuvwxyz");
}

// Instantiate
var chara = new Character();

chara.upperCase();
chara.lowerCase();