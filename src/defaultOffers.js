import { addOffer } from './offerService.js';

export class Offer {
     constructor (dir, description, type, start, salary) {
          this.dir = dir;
          this.description = description;
          this.type = type;
          this.start = start;
          this.salary = salary;
     }
}

const defaultPlayers = [
     new Offer(
          "Móstoles, C/Velázquez 2",
          "Buen trabajo en piscina comunitaria en medio de un barrio tranquilo de Móstoles",
          "Jornada completa",
          "10 de Julio de 2024",
          "1200"
     )
];

export function loadDefaultOffers() {
     defaultPlayers.forEach((offer) => {
          addOffer(offer);
     });
}