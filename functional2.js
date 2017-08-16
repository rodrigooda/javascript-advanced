var fs = require('fs');

var output = fs.readFileSync('doc.txt', 'utf8').replace(/\r/g, '').trim().split('\n').map(function (line) {
  return line.split('\t');
})
  .reduce(function (customers, line) {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    });
    return customers;
  }, {});

console.log(output);
//console.log('output', JSON.stringify(output,null,2));
let dragon = (name, size, element) => name + 'is a ' + size + ' dragon that breathes ' + element + '!'

console.log(dragon('fluffykins', 'tiny', 'lightning'));

let dragon2 = name =>
  size =>
    element =>
      name + 'is a ' +
      size + ' dragon that breathes ' +
      element + '!'

console.log(dragon2('fluffykins')('tiny')('lightning'));

let fluffykinDragon = dragon2('fluffykins');

console.log(fluffykinDragon('tiny')('lightning'));


let dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'naomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' },
  { name: 'frost', element: 'ice' }
];

let hasElement = (element, obj) => obj.element === element

let lightingDragons = dragons.filter(x => hasElement('lightning', x))

console.log(lightingDragons);

let countDownFrom = (num) => {
  if (num === 0) return;
  console.log(num);
  countDownFrom(num - 1);
}
countDownFrom(10);
console.log('-----------');
let arr = [1, 2, 3, 4, 5, 6, 8, 10, 11];

let search = function (value, arr, begin, end) {
  if (begin < end) {
    let m = Math.ceil((begin + end) / 2);
    console.log(m);
    if (value == arr[m])
      return m;
    else if (value < arr[m])
      return search(value, arr, begin, m);
    else
      return search(value, arr, m + 1, end);
  }
  else // begin>=end, i.e. no valid array to search
    return -1;
}


let order = function (arr, begin, end) {
  if (begin < end) {
    let m = Math.ceil((begin + end) / 2);
    console.log(m);
    if (value == arr[m])
      return m;
    else if (value < arr[m])
      return search(value, arr, begin, m);
    else
      return search(value, arr, m + 1, end);
  }
  else // begin>=end, i.e. no valid array to search
    return;
}


console.log('Result: ' + search(10, arr, 0, 9));
