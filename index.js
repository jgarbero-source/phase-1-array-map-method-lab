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

// const titleCased = () => {
//   newTutorials = tutorials.map((cb) => {
//     return Object.assign({}, line)
//   })
  
// }

// const titleCased = () => {
//   let newTutorials = tutorials.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
//   return newTutorials
// }

// const titleCased = () => {
//   let newTutorials = tutorials.map()
// }

// const titleCased = () => {
//   let newTutorials = tutorials.map( function(txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   })
//   return newTutorials
// } GOOD ONE

// String.prototype.toProperCase = function () {
//   return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// };

// const titleCased = () => {
//   let newTutorials = tutorials.map.toProperCase
//   return newTutorials
// }


// const titleCased = () => {
//   return tutorials
// }

const titleCased = () => {
  return tutorials.map(str => str.split(' ').map(w => w[0].toUpperCase() + w.substr(1)).join(' '))
}

// function titleCased(array) {
//   let titleCasedArray = array.map(x => x.split(' ')
//   .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
//   .join(' '))
//   return titleCasedArray
// }
// console.log(titleCased(tutorials))

// const titleCased = () => {
//   return tutorials.map(str => str.toUpperCase())
// }

// const titleCased = () => {
//   return tutorials.map(str => function(str) {
//     return str.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
//   }) 
// }

// const titleCased = () => {
//   return tutorials.map(str => str.toLowerCase().split(' ')).map(word => word.charAt(0).toUpperCase() + word.slice(1));
//   }

// const titleCased = () => {
//   let newTutorials = tutorials.map(array => function(array) {
//     return array.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
//   }) 
//   return newTutorials
// }




// return tutorials

