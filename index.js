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

const titleCased = function () {
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


console.log(titleCased());