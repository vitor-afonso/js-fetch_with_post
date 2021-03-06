/*jshint esversion:8*/

async function getInfo() {

    let url = 'https://jsonplaceholder.typicode.com/posts';
    let displayDiv = document.getElementById('userInfo');

    displayDiv.innerHTML = 'Loading...';

    // Fetch recebe 2 argumentos, a URL e um objecto com metodo e infos
    const req = await fetch(url, {

        method: 'POST',
        //obrigatorio enviar no body uma string com um ojecto la dentro
        body: JSON.stringify({
            username: 'Vittokm',
            password: 'Pónobido',
            userId: 7            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // json() converte a informação recebida para objecto
    let json = await req.json();

    // display das informações enviadas via POST
    displayDiv.innerHTML = `Username: ${json.username} <br/> Password: ${json.password} <br/> Id: ${json.userId}`;

}