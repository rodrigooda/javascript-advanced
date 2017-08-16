function stringFunctor(value, fn){
  var chars = value.split("");
  return chars.map(function(char){
    return String.fromCharCode(fn(char.charCodeAt(0)));
  }).join("");
}

function plus1(value){
  return value + 1;
}

function minus1(value){
  return value - 1;
}

[3,4].map(plus1);
stringFunctor("ABC", plus1);
stringFunctor("XYZ", minus1);
