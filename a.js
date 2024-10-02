const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

function capitalize(b) {
    let c,d;
    c = [...b];
    d = (c.shift()).toUpperCase();
    c.unshift(d);
    return c.join("");
}

const b = function () {
    let newArr = new Array();
    tutorials.map((tutorial1) => {
        tutorial1 = tutorial1.split(" ");
        let a = 0;
        tutorial1.map((tutorial2) => {
            tutorial2 = capitalize(tutorial2);
            tutorial1.splice(a,1,tutorial2);
            a++
        })
        tutorial1 = tutorial1.join(" ");
        newArr.push(tutorial1);
    })
    return newArr;
}


// const a = (array0) => {
//     let array1 = new Array();
//     for (let element0 of array0) {
//         let words = new Array();
//         let words1 = new Array();
//         words = element0.split(" ");
//         for (let element1 of words) {
//             const capitalize = (b) => {
//                 let c,d;
//                 c = [...b];
//                 d = (c.shift()).toUpperCase();
//                 c.unshift(d);
//                 return c.join("");
//             }
//             element1 = capitalize(element1);
//             words1.push(element1);
//         }
//         words1 = words1.join(" ");
//         array1.push(words1);
//     }
//     return array1;
// }

//console.log(a(tutorials));
//const element1 = "bobby";
//element1.unshift((element1.shift()).toUpperCase());

// function capitalize(element) {
//     let b,c;
//     b = [...element];
//     c= (b.shift()).toUpperCase();
//     b.unshift(b);
//     return b.join("");
// }
console.log(b());