//LargeNumberJS library by nirvanasupermind
//Licensed under MIT License

function fromPolynomial(arr, x) {
  var result = new LargeNumber(0, 0);
  for (var i = 0; i < arr.length; i++) {
    result = result.add(new LargeNumber(arr[i], 0).multiply(x.powInt(i)));
  }
  return result;
}


Number.prototype.fac = function () {
  var result = Math.sqrt(Math.PI) * (this / Math.E) ** this
  result *= (8 * this ** 3 + 4 * this ** 2 + this + 1 / 30) ** (1 / 6)
  if (this % 1 == 0) {
    result = Math.round(result)
  }

  return result
}


function mantissaOf(x) {
  //Reduces number to its mantissa
  //This will be useful for the LargeNumber init

  return parseFloat(x.toExponential().split("e")[0]);
}


function LargeNumber(a, b) {
  if (a === 0) {
    this.a = 0;
    this.b = 0;
  } else {
    this.a = mantissaOf(a);
    this.b = b + Math.floor(Math.log10(Math.abs(a)));

  }

}



LargeNumber.fromNum = function (x) {
  return new LargeNumber(x, 0);
}

LargeNumber.prototype.toNum = function () {
  return this.a * Math.pow(10, this.b);
}

LargeNumber.E = new LargeNumber(Math.E, 0);
LargeNumber.PI = new LargeNumber(Math.PI, 0);
LargeNumber.MAX_VALUE = new LargeNumber(10 - Number.EPSILON * 5, Number.MAX_VALUE);
LargeNumber.MIN_VALUE = new LargeNumber(1, -Number.MAX_VALUE);
LargeNumber.GUPPY = LargeNumber.fromNum(1e+20);
LargeNumber.GOBY = LargeNumber.fromNum(1e+35);
LargeNumber.GOGOL = LargeNumber.fromNum(1e+50);
LargeNumber.OGOL = LargeNumber.fromNum(1e+80);
LargeNumber.GOOGOL = LargeNumber.fromNum(1e+100);
LargeNumber.MAX_FLOAT = LargeNumber.fromNum(Number.MAX_VALUE)
LargeNumber.GOOGOLPLEX = new LargeNumber(1, 1e+100);

LargeNumber.prototype.toString = function () {
  if (isFinite(this.toNum())) {
    return this.toNum().toString();
  } else {
    return this.a + "e+" + this.b;
  }
}


LargeNumber.prototype.add = function (x) {
  //  return new LargeNumber(this.a**10**this.b)
  x = (typeof x === "number" ? new LargeNumber(x, 0) : x);
  return new LargeNumber(this.a + (Math.pow(10, x.b - this.b)) * x.a, this.b);
}




LargeNumber.prototype.subtract = function (x) {
  x = (typeof x === "number" ? new LargeNumber(x, 0) : x);

  return new LargeNumber(this.a - (Math.pow(10, x.b - this.b)) * x.a, this.b);
}


LargeNumber.prototype.multiply = function (x) {
  x = (typeof x === "number" ? new LargeNumber(x, 0) : x);

  return new LargeNumber(this.a * x.a, this.b + x.b);
}


LargeNumber.prototype.divide = function (x) {
  x = (typeof x === "number" ? new LargeNumber(x, 0) : x);

  return new LargeNumber(this.a / x.a, this.b - x.b);

}

// LargeNumber.prototype.pow = function (x) {
//   //(10^100)^2 = 

//   return new LargeNumber(this.a ** x, this.b * x);
// }



// function erf(x) {
//   if (x < 0) {
//     return -erf(-x);
//   }
//   if (x === 0) {
//     return new LargeNumber(0, 0);
//   }

//   var a = 1.98, b = 1.135;
//   return 1 - (((1 - Math.exp(-a * x)) * (Math.exp(-(x ** 2)))) / (b * Math.sqrt(Math.PI) * x));
// }

// function g(x, z) {
//   return xl.pow(erf(2 * z - 1).add(1).divide(2));
// }

