/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById('output');
fetch('cars.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(brand => {
      const card = document.createElement('div');
      card.classList.add('card');
      const heading = document.createElement('h2');
      heading.innerText = brand.brand;
      card.appendChild(heading);
      const list = document.createElement('ul');
      brand.models.forEach(model => {
        const listItem = document.createElement('li');
        listItem.innerText = model;
        list.appendChild(listItem);
      });
      card.appendChild(list);
      output.appendChild(card);
    });
  })
  .catch(error => console.log(error));