let players = new Map();
let nextId = 0;
let freesIdArray = [];
let freesIdSet = new Set();

export function addPlayer(player) {
    player.id = freesIdArray.length ? freesIdArray.pop() : nextId++;  // Si hay ids que han quedado libres se usará uno de ellos, sino se creará uno nuevo
    players.set(player.id, player);
}

export function editPlayer(oldPlayer, newPlayer){
    newPlayer.subelements = oldPlayer.subelements;
    newPlayer.id = oldPlayer.id;

    players.set(newPlayer.id, newPlayer);
}

export function deletePlayer(id) {
    if (id >= nextId || freesIdSet.has(id)) throw new Error("Invalid id");

    players.delete(id);

    freesIdArray.push(id);
    freesIdSet.add(id);
}

export function getPlayers() {
    return [...players.values()]; // == Array.from(players.values())
}

export function getPlayer(id) {
    return players.get(id);
}

function validFormat(url) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

function hasImageExtension(url) {
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
    return validExtensions.includes(extension);
}

export function correctValues(player) {
    let number = parseInt(player.number);
    let marketValue = parseInt(player.marketValue);

    console.log(player.birth)

    let correct = false;

    if (player.name == "" || player.number == "" || player.nationality == "" || player.description == "") {
        alert("Rellene todos los campos del formulario");
    } else if (isNaN(number) || !Number.isInteger(number) || number < 0) {
        alert("El dorsal debe ser un número mayor o igual a 0");
    } else if (marketValue == 0) {
        alert("Todos los jugadores valen algo");
    } /*else if (!validFormat(player.photo) || !hasImageExtension(player.photo)) {
        alert("No es una URL de imagen válida");  //para cuando cambiemos las imágenes a urls
    } */else {
        correct = true;
    }

    return correct;
}

export function correctSubvalues(sub) {
    let start = parseInt(sub.stage.start);
    let end = parseInt(sub.stage.end);

    let correct = false;

    if (sub.club == "" || start == "" || end == "") {
        alert("Complete todos los campos del formulario");
    } else if (isNaN(start) || !Number.isInteger(start) || isNaN(end) || !Number.isInteger(end)) {
        alert("La etapa en el club deben ser dos años, es decir, dos números enteros");
    } else if (start > end) {
        alert("¡Es imposible que haya dejado el club antes de haber entrado!");
    } /*else if (!validFormat(sub.emblem) || !hasImageExtension(sub.emblem)) {
        alert("No es una URL de imagen válida");  //para cuando cambiemos las imágenes a urls
    } */else {
        correct = true;
    }

    return correct;
}