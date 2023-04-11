/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function weightConverterFunction(e){
e.preventDefault();         
let weight = e.target.elements.search.value;
console.log(weight);
if (isNaN(weight)) {
    alert('Please enter a number.');
    return;
  };
weightLb = weight * 2.2046;
weightG = weight / 0.0010000;
weightOz = weight * 35.274;
const weightsZone = document.querySelector('div#output');
let zoneHlb = document.querySelector('#lb');
let zoneHg = document.querySelector('#g');
let zoneHoz = document.querySelector('#oz');
if (!zoneHlb) {
  zoneHlb = document.createElement('h1');
  zoneHlb.id = 'lb';
  weightsZone.appendChild(zoneHlb);
}
if (!zoneHg) {
  zoneHg = document.createElement('h1');
  zoneHg.id = 'g';
  weightsZone.appendChild(zoneHg);
}
if (!zoneHoz) {
  zoneHoz = document.createElement('h1');
  zoneHoz.id = 'oz';
  weightsZone.appendChild(zoneHoz);
}
zoneHlb.textContent = `Weight in (lb) is: ${weightLb}`;
zoneHg.textContent = `Weight in (g) is: ${weightG}`;
zoneHoz.textContent = `Weight in (oz) is: ${weightOz}`;
e.target.reset();
}

document
        .querySelector('form')
        .addEventListener('submit', weightConverterFunction);