

var lista = [];
var num = 10;
 console.log(num % 3);
 console.log(num % 5);


for(i=0; i <101; i++){
  lista.push(i);
  if (i%5 == 0 && i%3 == 0){
  lista[i] = "FizzBuzz";
// } if (i%5 == 0 ){
//   lista[i] = "Buzz";
// } if (i%3 == 0 ){
//   lista[i] = "Fizz";
}
document.getElementById('fizzBuzz').innerHTML += "<li>" + lista[i] +  "</li>";
console.log(lista);
}
