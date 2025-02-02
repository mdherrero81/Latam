const listaAmigos = [];

//funcion para agregar un amigo
function agregarAmigo() {
    const nameInput = document.getElementById('amigo');
    const name = nameInput.value.trim();
    if (name) {
        listaAmigos.push(name);
        updateNameList();
        nameInput.value = '';
    }
}

function updateNameList() {
    const nameListElement = document.getElementById('listaAmigos');
    nameListElement.innerHTML = '';
    listaAmigos.forEach((name, index) => {
        const li = document.createElement('li');
        li.textContent = name;
        nameListElement.appendChild(li);
    });
}

//funcion para elegir al azzar
function sortearAmigo() {
    if (listaAmigos.length > 0) {
        const randomIndex = Math.floor(Math.random() * listaAmigos.length);
        const selectedName = listaAmigos[randomIndex];
        document.getElementById('resultado').textContent = `Nombre seleccionado: ${selectedName}`;
    } else {
        document.getElementById('resultado').textContent = 'No hay nombres en la lista.';
    }
}

