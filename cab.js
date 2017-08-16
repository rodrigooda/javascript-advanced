var cab = function(){
  var br=document.createElement('br');
// CAll adiciona temporariamente uma fun��o a um objeto com argumentos
var obj = {num : 2};
var addToThis = function(a){
  return this.num + a;
};
print(addToThis.call(obj, 3));
var obj2 = {num : 2};
var addToThis2 = function(a,b,c){
  return this.num + a + b + c;
};
print(addToThis2.call(obj2,1,2,3));
//functionName.call(object, functionArguments)
//Apply  adiciona temporariamente uma fun��o a um metodo porem os argumentos sao um array
var obj3 = {num : 2};
var arr = [2,2,3];
print(addToThis2.apply(obj3, arr));
//functionName.apply(object, functionArgumentsAsArray)
// Bind cria uma fun��o vinculada ao this
var obj4 = {num : 2};
var bound = addToThis2.bind(obj4);
print(bound(1,2,3));
function print(value){
  var linebreak = document.createElement("br");
  $('#result').append(value);
  $('#result').append(linebreak);
}

var code ="var obj = {num : 2};
var addToThis = function(a){
      return this.num + a;
};
console.log(addToThis.call(obj, 3));
var obj2 = {num : 2};
var addToThis2 = function(a,b,c){
      return this.num + a + b + c;
};
console.log(addToThis2.call(obj2,1,2,3));
var obj3 = {num : 2};
var arr = [2,2,3];
console.log(addToThis2.apply(obj3, arr));
var obj4 = {num : 2};
var bound = addToThis2.bind(obj4);
console.log(bound(1,2,3));
";
$('#code').append(code);

};
