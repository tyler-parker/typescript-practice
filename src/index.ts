//Basic types
let id: number = 5
let company: string = 'Tyler Corp'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

let arrayOfNums: number[] = [1,2,3,4,5]
let varietyOfTypes: any[] = [1,false,'true']

// Tuple example
let person: [number, string, boolean] = [1, 'Tyler', false]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Tyler'],
    [2, 'Mia'],
    [3, 'Louie']
]

// Union
let pid: string | number

// Enum
enum numberedEnum {
    Up = 1, // from here, the enum IDs will increment from 1
    Down,
    Left,
    Right
}

enum stringEnum {
    Up = 'Up', // from here, the enum IDs will increment from 1
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1, 
    name: 'John'
}

// Type Assertion
let cid: any = 1
let customerIdAsAssertion = cid as number // this looks better
let customerIdTagAssertion = <number>cid // same thing, but doesn't look as great

// Functions
function addNumb(x: number, y: number): number {
    return x + y
}

// Interface
interface UserInterface {
    id: number
    name: string
    age?: number
}

const user2: UserInterface = {
    id: 1, 
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes

// when declaring properties,
// private limits its access to only its residing class
// protected limits access to its residing class or any other extended class
// nothing is an implicit 'public' which allows access from anywhere

interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string


    constructor(id: number, name: string){
        console.log(123);
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const tyler = new Person(1, 'Tyler Parker')

console.log(tyler.register());

console.log(tyler);