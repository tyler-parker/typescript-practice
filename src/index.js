//Basic types
var id = 5;
var company = 'Tyler Corp';
var isPublished = true;
var x = 'Hello';
var age;
var arrayOfNums = [1, 2, 3, 4, 5];
var varietyOfTypes = [1, false, 'true'];
// Tuple example
var person = [1, 'Tyler', false];
// Tuple Array
var employee;
employee = [
    [1, 'Tyler'],
    [2, 'Mia'],
    [3, 'Louie']
];
// Union
var pid;
// Enum
var numberedEnum;
(function (numberedEnum) {
    numberedEnum[numberedEnum["Up"] = 1] = "Up";
    numberedEnum[numberedEnum["Down"] = 2] = "Down";
    numberedEnum[numberedEnum["Left"] = 3] = "Left";
    numberedEnum[numberedEnum["Right"] = 4] = "Right";
})(numberedEnum || (numberedEnum = {}));
var stringEnum;
(function (stringEnum) {
    stringEnum["Up"] = "Up";
    stringEnum["Down"] = "Down";
    stringEnum["Left"] = "Left";
    stringEnum["Right"] = "Right";
})(stringEnum || (stringEnum = {}));
var user = {
    id: 1,
    name: 'John'
};
// Type Assertion
var cid = 1;
var customerIdAsAssertion = cid; // this looks better
var customerIdTagAssertion = cid; // same thing, but doesn't look as great
// Functions
function addNumb(x, y) {
    return x + y;
}
var user2 = {
    id: 1,
    name: 'John'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        console.log(123);
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var tyler = new Person(1, 'Tyler Parker');
console.log(tyler.register());
console.log(tyler);
