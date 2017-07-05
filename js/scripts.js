function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");

};

var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungGalaxyS6 = new Phone("Samsung", 2000, "black");
var bV6000 = new Phone("Black View", 900, "orange");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
bV6000.printInfo();