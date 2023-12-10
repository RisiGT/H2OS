let offers = new Map();
let nextId = 0;
let freesIdArray = [];
let freesIdSet = new Set();

export function addOffer(offer) {
    offer.id = freesIdArray.length ? freesIdArray.pop() : nextId++;  // Si hay ids que han quedado libres se usará uno de ellos, sino se creará uno nuevo
    offers.set(offer.id, offer);
}

export function editOffer(oldOffer, newOffer){
    newOffer.subelements = oldOffer.subelements;
    newOffer.id = oldOffer.id;

    offers.set(newOffer.id, newOffer);
}

export function deleteOffer(id) {
    if (id >= nextId || freesIdSet.has(id)) throw new Error("Invalid id");

    offers.delete(id);

    freesIdArray.push(id);
    freesIdSet.add(id);
}

export function getOffers() {
    return [...offers.values()]; // == Array.from(offers.values())
}

export function getOffer(id) {
    return offers.get(id);
}

export function correctValues(offer) {
    let salary = parseInt(offer.salary);
    let type = offer.type;

    let correct = false;

    if (offer.dir == "" || offer.type == "" || offer.start == "" || offer.description == "") {
        alert("Rellene todos los campos del formulario");
    } else if ((type == "Media jornada" && salary < 700) || (type == "Jornada completa" && salary < 1200) || (type == "Fines de semana" && salary < 500)) {
        alert("El salario es muy bajo");
    } else {
        correct = true;
    }

    return correct;
}