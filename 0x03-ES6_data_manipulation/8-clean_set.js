 function cleanSet(set, startString) {
    let myArray = [];

    for (const row of set) {
        // console.log(row);
        const stringArry = [];
        let answer = 1;
        if (startString.length < row.length)
            for (let i = 0; i < row.length; i++) {
                // console.log(row[i]);
                if (row[i] == startString[i] && i < 3) {
                    answer = 1;
                    // console.log(row[i]);
                    continue;
                }
                if (row[i] != startString[i] && i < 3) {
                    answer = 0;
                    break;
                }

                if (i >= 3) {
                    // start appending
                    // console.log(row[i]);
                    stringArry.push(row[i]);

                }
            }
            if (answer == 1) {
                console.log(stringArry);
                myArray.push(stringArry.join(''));
            }
    }

    console.log(myArray.join('-'));
 }
 cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon');
//  export default cleanSet;


// function cleanSet(set, startString) {
//     const myArray = [];
//     const stringArry = [];
//     for (const row of set) {
//         const temp = new Set(row.toString());
//         let count = 0;
//         let answer = 1;
//         for (const char of temp) {
//             if (char === startString[count] && count < startString.length) {
//                 answer = 1;
//             } else {
//                 // if (count === startString.length) {
//                 //     for (let i = count; i < temp.size; i++) {
//                 //         stringArry.push(char);
//                 //     }
//                 // }
//                 answer = 0;
//             }
//             count++;
//         }
//         if (answer === 0) {
//             console.log("match found");
//         }
//         console.log(temp);
//     }
//  }
//  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon');
// //  export default cleanSet;