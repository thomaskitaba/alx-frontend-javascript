let sum = 0;
const arr = [1, 2, 3, 4];
for (const row of arr){
    sum = sum + row;
}
console.log(sum);


const result = arr.reduce((acc, num)=> acc + num, 0);
console.log("reduced: ", result);

const evry = arr.every((num)=> num > 0);
console.log("every: ", evry);


const dict = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ]

for (const k in Object.key(dict)) {
    console.log(k);
}