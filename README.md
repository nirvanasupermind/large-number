# large-number v1.0
Numerical Javascript library representing numbers as large as `1e1.8e308` and down to `1e-1.8e308` in the scientific notation.  The `LargeNumber` class provides methods for many operators, and conversion to JS `Number`s. Note that LargeNumber isn't necessarily arbitrary-precision.
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
Adds two `LargeNumber`s. For example `new LargeNumber(8,1000)+new LargeNumber(2,999)` outputs `new LargeNumber(8.2,1000)`. This is prone to precision loss if the difference between the exponents is large, for example `new LargeNumber(1,1000)+new LargeNumber(1,0)` outputs `new LargeNumber(1,1000)`. A `Number` can be the second argument.

### `prototype.subtract()`
Subtracts two `LargeNumber`s.  For example `new LargeNumber(8,1000)-new LargeNumber(2,999)` outputs `7.8e1000`. This is prone to precision loss if the difference between the exponents is large enough, for example `new LargeNumber(1,1000)+new LargeNumber(1,0)` outputs `new LargeNumber(1,1000)`. A `Number` can be the second argument.

### `prototype.multiply()`
Multiplies two `LargeNumber`s. For example, `new LargeNumber(8,1000)*new LargeNumber(2,999)` outputs `new LargeNumber(1.6,2000)`.  A `Number` can be the second argument.

### `prototype.divide()`
Divides two `LargeNumber`s. For example, `new LargeNumber(8,1000)/new LargeNumber(2,999)` outputs `new LargeNumber(4,0)`.

### `prototype.pow()`
Powers a `LargeNumber` to a `Number`. For example, `new LargeNumber(8,1000).pow(3)` outputs `new LargeNumber(5.12,3002)`. 

### Ovveride methods 
#### `prototype.toString()`

Will convert the LargeNumber to a string. Uses scientific E notation. For example, `LargeNumber(4.5,-2147)` is printed as `4.5e-2147`.
### Static 
#### `static E`
A static constant `LargeNumber(2.718281828459045,0)` representing the Euler number constant. 

#### `static PI`
A static constant `LargeNumber(3.141592653589793)` representing the pi constant. 

#### `static MAX_VALUE`
A static constant `LargeNumber(9.999999999999998,1.7976931348623157e+308)` that stores the largest possible value in a `LargeNumber` type.

### `static MIN_VALUE`
A static constant `LargeNumber(1,-1.7976931348623157e+308)` that stores the smallest possible value in a `LargeNumber` type. 

### `static fac()`
Static function that returns a `LargeNumber` representing the factorial of a normal `Number`. For example, `LargeNumber.fac(1000)` outputs `new LargeNumber(4.023,2567)`.


## License
LargeNumber is licensed under the MIT license.