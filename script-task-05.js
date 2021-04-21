console.log('Problem: Part A');
var cat = {
        name: 'Fluffy',
        activities: ['play', 'eat cat food'],
        catFriends: [
            {
                name: 'bar',
                activities: ['be grumpy', 'eat bread omblet'],
                weight: 8,
                furcolor: 'white'
            }, 
            {
                name: 'foo',
                activities: ['sleep', 'pre-sleep naps'],
                weight: 3
            }
        ]
   }
console.log(cat);

console.log('Add height and weight to Fluffy :');
cat.height = 12;
cat.weight = 8;
console.log(cat);

console.log('Fluffy name is spelled wrongly. Update it to Fluffyy :');
cat.name = 'Fluffyy';
console.log(cat);

console.log('List all the activities of Fluffyy’s catFriends :');
cat.catFriends.forEach((element) => console.log(element.activities));

console.log('Print the catFriends names :');
cat.catFriends.forEach((element) => console.log(` catFriends name: ${element.name}`));


console.log('Print the total weight of catFriends :');
var totalWeight = cat.catFriends.reduce((acc, element) => {
    return element.weight+acc.weight;
})
console.log(`Total weight of cat friends: ${totalWeight}`);

console.log('Print the total activities of all cats :');
let totalActivaties = cat.activities.length;
cat.catFriends.forEach((element) => {
    totalActivaties += element.activities.length;
})
console.log(` Total activites of all cats: ${totalActivaties}`);

console.log('Add 2 more activities to bar & foo cats :');
cat.catFriends.forEach((element) => {
    element.activities.push('bitten');
    element.activities.push('meow');
});
console.log(cat);

console.log('Update the fur color of bar :');
cat.catFriends[0].furcolor = 'black';
console.log(cat);

/*#####################################################################################################################################*/

console.log('Problem: Part B');

var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
        {
            date: '3/15/2019',
            damage_points: '5000',
            atFaultForAccident: true
        },
        {
            date: '7/4/2022',
            damage_points: '2200',
            atFaultForAccident: true
        },
        {
            date: '6/22/2021',
            damage_points: '7900',
            atFaultForAccident: true
        }
    ]
}
console.log(myCar);

console.log(' Loop over the accidents array. Change atFaultForAccident from true to false :');
myCar.accidents.forEach((element) => {
    element.atFaultForAccident = false;
});
console.log(myCar);

console.log('Print the dated of my accidents :');
myCar.accidents.forEach((element) => console.log(`date: ${element.date}`));

/*#####################################################################################################################################*/

console.log('Problem: 1');

console.log('Write a function called “printAllValues” which returns an newArray of all the input object’s values :');
const parseValue = (obj) => {
    return Object.values(obj)
}
let object = {name: 'Itachi uchiha', age: 20, haspets: true};
let checking = parseValue(object);
console.log(checking);

/*#####################################################################################################################################*/

console.log('Problem 2');

console.log('Write a function called “printAllKeys” which returns an newArray of all the input object’s keys :');
const parseKey = (obj) => {
    return Object.keys(obj)
}
let objectTwo = {name: 'Itachi uchiha', age: 20, haspets: true};
let checkingKey = parseKey(object);
console.log(checkingKey);

/*#####################################################################################################################################*/

console.log('Problem 3');

console.log('Write a function called “convertObjectToList” which converts an object literal into an array of arrays :');
const convertsObjectsToList = (obj) => {
    let key = Object.keys(obj);
    let value = Object.values(obj);
    let result = [];
    for(let i in key){
        let temp = [];
        temp.push(key[i]);
        temp.push(value[i]);
        result.push(temp);
    }
    return result;
}
let objectThree = {name: 'Itachi uchiha', age: 20, haspets: true};
let answer = convertsObjectsToList(objectThree);
console.log(answer);

/*#####################################################################################################################################*/

console.log('Problem 4');

console.log('Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with :');
console.log('1) the first element of the array as the object’s key, and');
console.log('2) the last element of the array as that key’s value.');
const transformFirstAndLast = (array) => {
    let first = array[0];
    let value = array.pop();
    let result = { [first] : value};
    return result;
}
let profile = ['My name', 'is', 'gowtham'];
let check2 = transformFirstAndLast(profile);
console.log(check2);

/*#####################################################################################################################################*/

console.log('Problem 5');

console.log('Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair Input Array:');
const fromListToObject = (array) => {
    let result = {};
    for(let i of array){
        if(i.length === 2) {
            let key = i[0];
            let value = i[1];
            result[key] = value;
        }
    }
    return result;
}
let phone = [['make', 'iphone'], ['model', '12 pro max'], ['year', 2021]];
let phoneObject = fromListToObject(phone);
console.log(phoneObject);

/*#####################################################################################################################################*/

console.log('Problem 6');

console.log('Write a function called “transformGeekData” that transforms some\
 set of data from one format to another :');
var arrayGeek = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
const transformGeekData = (array) => {
    let result = [];
    for(let arr of array){
        let object = {}
        if(arr.length > 2){
            for(let i of arr){
                if(i.length === 2){
                    let key = i[0];
                    let value = i[1];
                    object[key] = value;
                }
            }
        }
        result.push(object);

    }
    return result;
}
let arrayObject = transformGeekData(arrayGeek);
console.log(arrayObject);

/*#####################################################################################################################################*/

console.log('Problem 7');

console.log('Write an “assertObjectsEqual” function from scratch');
const assertObjectsEqual = (actual, expected, testname) => {
    if(JSON.stringify(actual) === JSON.stringify(expected)){
        return 'Passed';
    }else{
        return `FAILED ${testname} Expected ${JSON.stringify(actual)}, but got ${JSON.stringify(expected)}`
    }
}
var ac = {foo: 5, bar: 6};
var exp = {foo: 5, bar: 6};
let result2 = assertObjectsEqual(ac, exp, 'detects that two objectsare equval');
console.log(result2);
var ac1 = {foo: 5, bar: 6};
var exp1 = {foo: 6, bar: 5};
result2 = assertObjectsEqual(ac1, exp1, 'detects that two objectsare equval');
console.log(result2);

/*#####################################################################################################################################*/

console.log('Problem 8');

console.log('I have a mock data of security Questions and Answers. You function should \
 take the object and a pair of strings and should return if the quest is present and if its valid answer');
 var securityQuestions = [
    {
        question: 'What was your first pet’s name?',
        expectedAnswer: 'FlufferNutter'
    },
    {
        question: 'What was the model year of your first car?',
        expectedAnswer: '1985'
    },
    {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
    }
]
const chksecurityQuestions = (seQuestions, ques, ans) => {
    let result = seQuestions.filter((element) =>  element.question === ques && element.expectedAnswer === ans);
    if(result.length === 1){
        return true;
    }else{
        return false;
    }
}
var ques1 = 'What was your first pet’s name?';
var ans1  =  'FlufferNutter';
let status = chksecurityQuestions(securityQuestions, ques1, ans1);
console.log(status);
var ques2 = 'What was your first pet’s name?';
var ans2  =  'DufferNutter';
status = chksecurityQuestions(securityQuestions, ques2, ans2);
console.log(status);

/*#####################################################################################################################################*/

console.log('Problem 9');

console.log('Write a function to return the list of characters below 20 age');

var students = [
    {
    name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
];
const returnMinors = (array) => {
    return array.filter((student) => student.age < 20)
}
let below20 = returnMinors(students);
console.log(below20);