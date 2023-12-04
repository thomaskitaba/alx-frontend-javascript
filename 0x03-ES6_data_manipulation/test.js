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