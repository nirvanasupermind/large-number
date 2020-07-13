# large-number v1.0
Numerical avascript library representing [scientific notation](https://en.wikipedia.org/wiki/Scientific_notation)-based large numbers, capping out at `10^2^1024 = 1e1.8e308`, and also small numbers down to `10^(-2^1024) = 1e(-1e308)`.  The `LargeNumber` class provides methods for the four arithmetic operators and conversion to JS `Number`s. Note that LargeNumber is *not* an arbitrary-precision like many `BigInt` or `Decimal` libraries, and has the same precision as `Number` up until `1e9e15`.

## Installation and usage
You can install the library via just downloading the raw text (since it is zero-dependency). You can also clone it from git:

    git clone https://github.com/nirvanasupermind/large-number.git

To import it to an HTML file use:

    <script src="(path)/large-number/scripts/largenumber.js"></script>



## API
### `LargeNumber`
The LargeNumber constructor. Provides two arguments for the number's significand and exponent. If the exponent is left undefined, it will set to `0` by default, providing easy conversion from `Number`. 

The constructor also converts all pairs to standard form, for example `new LargeNumber(23,1)` gets converted to `new LargeNumber(2.3,2)`.
#### Example
    var large = new LargeNumber(1,1000); //1e1000
    var small = new LargeNumber(2,-500); //2e-500
    var badform = new LargeNumber(19,1); //1.9e2
    var noexp = new LargeNumber(592); //5.9e2

### `LargeNumber.prototype.toNum()`
Converts a `LargeNumber` to a `Number`. Returns `Infinity` for anything > `2^1024 = 1.8e308`, and `0` for anything < `2^-1074 = 5e-324`.

#### Example
    var hundred = new LargeNumber(1,2); //1e2
    var hundrednum = hundred.toNum(); //100
    var large = new LargeNumber(1,1000);
    var largenum = large.toNum(); //Infinity
    var small = new LargeNumber(1,-1000);
    var smallnum = small.toNum(); //0


