import axios from 'axios';

const component = document.getElementById('component');

component.innerHTML = `<button id="clientes">Acesso a clientes</button>`;

const button = component.querySelector('#clientes');

button.addEventListener('click', () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(result => {
        let htmlUsers = '';

        result.data.forEach(user => {
            htmlUsers += `<div><strong>Nome:</strong> ${user.name}</div>`;
        });

        component.innerHTML += htmlUsers;
    });
});

// axios AJAX
// Rest / Restful
// stream - 
fetch('https://api.postmon.com.br/v1/cep/01102000')
    .then((response) => response.json())
    .then((json) => fetch('testes'));


