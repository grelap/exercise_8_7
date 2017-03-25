var allNames = []; 
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

//połączenie tablic za pomocą concat
var allNames = allNames.concat(femaleNames,maleNames);
var newName = prompt('wpisz imię: ');

//sprawdzamy czy nie ma takiego imienia w tablicy
if ((allNames.indexOf(newName)) === -1){
  allNames.push(newName);
  alert(allNames);
  console.log(allNames)
} else { 

  alert('imię jest już na liście');
}



