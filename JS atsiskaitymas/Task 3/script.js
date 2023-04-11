/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const outputDiv = document.getElementById('output');
const showUsersBtn = document.getElementById('btn');
const messageDiv = document.getElementById('message');

showUsersBtn.addEventListener('click', () => {
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      const userCards = data.map(user => `
        <div class="userCard">
        <p>${user.login}</p>
          <img src="${user.avatar_url}" alt="${user.login}">
        </div>
      `);
      outputDiv.innerHTML = userCards.join('');
    })
    .catch(error => {
      console.error(error);
      outputDiv.textContent = 'An error occurred while fetching the data.';
    });
});