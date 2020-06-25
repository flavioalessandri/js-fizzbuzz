// exercise FIzz-Buzz

var lista = []; //empty list
var listLength = 100;  //list lenght (first index = 0; 100 = from 0 to 99)

for(i=0; i <listLength + 1; i++){
  lista.push(i); // at the end of every "for" cycle add the numbers in the list
  if (i%5 == 0 && i%3 == 0){ // get the number divisible by 5 and by 3!
  lista[i] = "Fizz-Buzz";
} else if (i%3 == 0 && i%5 != 0 ){ // get only the number divisible by 3!
  lista[i] = "Fizz";
} else if (i%5 == 0 && i%3 != 0 ){// get only the number divisible by 5!
  lista[i] = "Buzz";
}
document.getElementById('fizzBuzz').innerHTML += "<li>" + lista[i] +  "</li>";//fill the list
console.log(lista);//consol.log list
}
