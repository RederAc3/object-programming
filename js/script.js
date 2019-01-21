function Phone(brand, prince, color, memory) {
    this.brand = brand;
    this.prince = prince;
    this.color = color;
    this.memory = memory;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + " has " + this.memory + " of the memory, color is " + this.color + " ans the prince is " + this.prince + "zł .");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "32GB");
var SamsungGalaxyS9Plus = new Phone("Samsung", 3100, "black", "64GB");
var OnePlusOne = new Phone("OnePlus", 1299, "space gray", "64GB");
var SamsungGalaxyS6 = new Phone("Samsung", 1000, "white", "64GB");

iPhone6S.printInfo();