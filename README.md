# large-number v1.0
Numerical Javascript library representing numbers as large as `1e1.8e308` in the scientific notation.  The `LargeNumber` class provides methods for the four arithmetic operators and conversion to JS `Number`s. Note that LargeNumber isn't arbitrary-precision.
## Installation and usage
You can install the library via just downloading the raw text (since it is zero-dependency). You can also clone it from git:

    git clone https://github.com/nirvanasupermind/large-number.git

For more information, see Github support.


## API
### `constructor()`
The LargeNumber constructor. Provides two arguments for the number's significand and exponent. If the exponent is left undefined, it will set to `0` by default, providing easy conversion from `Number`. 

The constructor also converts all pairs to standard form, for example `new LargeNumber(23,1)` gets converted to `new LargeNumber(2.3,2)`.


### `prototype.toNum()`
Converts a `LargeNumber` to a `Number`. Returns `Infinity` for anything > `2^1024 = 1.8e308`, and `0` for anything < `2^-1074 = 5e-324`.

### `prototype.add()`
Adds two `LargeNumber`s. 

### `prototype.subtract()`
Subtracts two `LargeNumber`s.

### `prototype.multiply()`
Multiplies two `LargeNumber`s.

### `prototype.divide()`
Divides two `LargeNumber`s.


### `prototype.toString()`

Will convert the LargeNumber to a string. Uses scientific E notation. For example, `(4.5,-2147)` is printed as `4.5e-2147`.
### `E`
A static constant `LargeNumber(2.718281828459045,0)` representing the Euler number constant. 

### `PI`
A static constant `LargeNumber(3.141592653589793)` representing the pi constant. 

### `MAX_VALUE`
A static constant `LargeNumber(9.999999999999998,1.7976931348623157e+308)` that stores the largest possible value in a LargeNumber.

### `MIN_VALUE`
A static constant `LargeNumber(1,-1.7976931348623157e+308)` that stores the smallest possible value in a LargeNumber. 


## License
LargeNumber is licensed under the MIT license.