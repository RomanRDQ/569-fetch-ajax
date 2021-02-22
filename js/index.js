document.querySelector('.timestamp').innerText = new Date().toLocaleTimeString();

document.querySelector('.fetch-html').addEventListener('click', fetchHtml);

async function fetchHtml() {
    const response = await fetch('client-data.html');
    const htmlData = await response.text();
    document.querySelector('.html-container').innerHTML = htmlData;
}

/* Promises
function fetchHtml() {
    fetch('client-data.html')
        .then( response => response.text() )
        .then( htmlData => document.querySelector('.html-container').innerHTML = htmlData );
}*/

document.querySelector('.ajax-html').addEventListener('click', ajaxHtml);

function ajaxHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html');
    xhr.send();
}

document.querySelector('.fetch-json').addEventListener('click', fetchJson);

async function fetchJson() {
    const response = await fetch('client-data.json');
    const clientData = await response.json();
    document.querySelector('.client-name').innerText = clientData.name;
    document.querySelector('.account-balance').innerText = clientData.balance;
}


// Currency converter 
document.querySelector('.convert').addEventListener('click', convert);

async function convert() {
    const currFrom = document.querySelector('.currency-from').value;
    const currTo = document.querySelector('.currency-to').value;
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/`+currFrom);
    const currData = await response.json();
    document.querySelector('.currency-rate').value = (1 / currData.rates[currTo]).toFixed(2);
}

