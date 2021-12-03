/*const numbers =[1,2,3,4,5];
 numbers.push(6);
 numbers.unshift(0);
console.log(numbers);
console.log(numbers.length);
numbers.shift();
numbers.pop();
console.log(numbers.length);
for(let i=0; i<numbers.length;i++){
    console.log(numbers[i]);
}
for (const number of numbers){
    console.log(number);
}
for(const number of numbers){
console.log(number.toString());
}
console.log(numbers.join(';'));
console.log(numbers.includes());

const myClassmates=[{
    name:'swetha',
    age:34,
}]*/
const classmates=[{
    name : 'swetha',
    age:34,
}, {
    name:'shravya',
    age:26,
    color: 'red'
},
{
    name:'chunmei',
    age :33===33,
} , {}]
classmates.push('vahab');
console.log(classmates);
for(const newFriend of classmates){
    if (newFriend.name==='ali'){
        console.log('ali is already in the group')
    }
}
classmates[1].age=20;
console.log(Object.keys(classmates[1]).length ===0);

