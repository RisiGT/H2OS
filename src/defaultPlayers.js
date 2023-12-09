import { addPlayer, getPlayer } from './playerService.js';

export class Player {
     constructor(photo, name, position, number, birth, nationality, marketValue, description) {
          this.photo = photo;
          this.name = name;
          this.position = position;
          this.number = number;
          this.birth = birth;
          this.nationality = nationality;
          this.marketValue = marketValue;
          this.description = description;
          this.subelements = [];
     }

     addSubelement(subelement) {
          this.subelements.push(subelement)
     }
}

export class Subelement {
     constructor(emblem, club, start, end) {
          this.emblem = emblem,
          this.club = club,
          this.stage = { start: start, end: end }
     }
}

const defaultPlayers = [
     new Player(
          "CristianoRonaldo.png",
          "Cristiano Ronaldo",
          "Delantero",
          "7",
          "5 de Febrero de 1985",
          "Portugués",
          "94.000.000",
          "Cristiano Ronaldo, nacido el 5 de febrero de 1985 en Portugal, es uno de los mejores futbolistas de la historia. Destacado por su habilidad técnica, velocidad y capacidad goleadora, ha tenido exitosas etapas en clubes como el Manchester United y el Real Madrid, ganando múltiples títulos, incluidas varias Ligas de Campeones. Su carrera internacional con Portugal también ha sido destacada, culminando en la victoria en la Eurocopa 2016. Más allá del fútbol, Ronaldo es una figura globalmente reconocida y admirada."
     ),
     new Player(
          "Vinicius.jpg",
          "Vinicius Júnior",
          "Delantero",
          "7",
          "12 de Julio de 2000",
          "Brasileño",
          "166.000.000",
          "Vinícius Júnior es uno de los extremos más emocionantes del mundo. Juega para el Real Madrid y la selección nacional de Brasil, y es conocido por sus deslumbrantes habilidades de regate, alto ritmo y creación de juego."
     ),
     new Player(
          "TheoHernandez.png",
          "Theo Hernández",
          "Defensa",
          "19",
          "6 de Octubre de 1997",
          "Francés",
          "60.000.000",
          "Theo Hernández, nacido el 6 de octubre de 1997 en Marsella, Francia, es un lateral izquierdo francés conocido por su velocidad, potencia física y capacidad para contribuir en el ataque. Ha jugado para clubes prominentes como el Real Madrid y el AC Milan, demostrando habilidades defensivas sólidas y destacándose en el desarrollo de jugadas ofensivas desde la banda izquierda."
     ),
     new Player(
          "Isco.png",
          "Isco Alarcón",
          "Medio",
          "22",
          "21 de Abril de 1992",
          "Español",
          "8.000.000",
          "Isco Alarcón es un talentoso centrocampista español nacido el 21 de abril de 1992 en Benalmádena. Conocido por su elegancia en el manejo del balón, visión de juego y habilidades técnicas, Isco ha tenido una destacada carrera en clubes como el Real Madrid, donde ha ganado varios títulos, incluidas cuatro Ligas de Campeones de la UEFA. Su estilo de juego creativo y versátil lo ha convertido en un jugador apreciado en el fútbol español."
     ),
     new Player(
          "Bellingham.png",
          "Jude Bellingham",
          "Medio",
          "5",
          "29 de Junio de 2003",
          "Inglés",
          "150.000.000",
          "Jude Bellingham es un centrocampista inglés nacido el 29 de junio de 2003 en Stourbridge, Inglaterra. Reconocido por su madurez futbolística a pesar de su juventud, Bellingham se ha destacado por su versatilidad, energía en el campo y capacidad para contribuir tanto en la defensa como en el ataque. Jugó para el Borussia Dortmund en la Bundesliga y también representó a la selección nacional de Inglaterra, mostrando un gran potencial y siendo considerado como uno de los jóvenes talentos más prometedores en el fútbol."
     ),
     new Player(
          "MasonMount.png",
          "Mason Mount",
          "Delantero",
          "7",
          "10 de Enero de 1999",
          "Inglés",
          "60.000.000",
          "Mason Mount es un talentoso centrocampista inglés, nacido el 10 de enero de 1999 en Portsmouth, Inglaterra. Destaca por su visión de juego, capacidad de pase y versatilidad en el campo. Desarrolló gran parte de su carrera en el Derby County antes de unirse al Chelsea. Mount ha sido una pieza clave para el Chelsea y la selección inglesa, demostrando su habilidad para marcar goles y crear oportunidades. Su proyección y consistencia lo han establecido como uno de los jóvenes talentos más prometedores del fútbol inglés."
     ),
     new Player(
          "Messi.png",
          "Leo Messi",
          "Delantero",
          "10",
          "24 de Junio de 1987",
          "Argentino",
          "35.000.000",
          "Lionel Messi, nacido el 24 de junio de 1987 en Rosario, Argentina, es ampliamente considerado como uno de los mejores futbolistas de todos los tiempos. Conocido por su habilidad extraordinaria con el balón, regate excepcional, visión de juego única y capacidad goleadora, Messi ha pasado la mayor parte de su carrera en el FC Barcelona, donde ganó numerosos títulos, incluyendo múltiples Ligas de Campeones de la UEFA y Balones de Oro.Messi es conocido por su dedicación, profesionalismo y capacidad para marcar diferencias en el terreno de juego. En agosto de 2021, dejó el Barcelona debido a problemas financieros del club y se unió al Paris Saint-Germain (PSG) en la Ligue 1 de Francia. Su legado en el fútbol mundial es indiscutible, y su impacto en el juego ha dejado una huella imborrable."
     ),
     new Player(
          "Vallejo.png",
          "Jesús Vallejo",
          "Defensa",
          "5",
          "5 de Enero de 1997",
          "Español",
          "2.000.000",
          "Jesús Vallejo es un defensor español nacido el 5 de enero de 1997 en Zaragoza. Conocido por su solidez defensiva, Vallejo ha pasado por clubes como el Real Madrid y el Wolverhampton Wanderers. A lo largo de su carrera, ha demostrado ser un central con buen posicionamiento y habilidades tácticas. Su experiencia en clubes de alto nivel ha contribuido a su desarrollo como defensor confiable."
     ),
     new Player(
          "RobertSanchez.png",
          "Robert Sánchez",
          "Portero",
          "1",
          "18 de Noviembre de 1997",
          "Español",
          "28.000.000",
          "Robert Sánchez es un portero español nacido el 19 de noviembre de 1997 en Cartagena. Ha ganado reconocimiento por sus actuaciones con el Brighton & Hove Albion en la Premier League inglesa. Sánchez se destaca por su agilidad, seguridad en la portería y habilidad para realizar importantes intervenciones. Su ascenso en el fútbol inglés ha sido notable, convirtiéndose en un portero prometedor con un futuro brillante."
     ),
     new Player(
          "Achraf.jpg",
          "Achraf Hakimi",
          "Defensa",
          "2",
          "4 de Noviembre de 1998",
          "Marroquí",
          "65.000.000",
          "Achraf Hakimi es un futbolista marroquí nacido el 4 de noviembre de 1998 en Madrid, España. Se destaca por su versatilidad, ya que puede desempeñarse como lateral derecho o izquierdo, así como en posiciones más avanzadas del campo. Conocido por su velocidad impresionante y capacidad para incorporarse al ataque, Hakimi ha jugado en clubes como el Real Madrid, Borussia Dortmund e Inter de Milán. Su estilo de juego ofensivo y su habilidad para contribuir en la generación de jugadas lo han convertido en uno de los laterales más destacados en el fútbol contemporáneo."
     )
];

const defaultSubelements = {
     emblems: ["Sporting_Lisboa.png", "Manchester_United.png", "Real_Madrid.png", "Juventus.png", "Manchester_United.png", "Al-Nassr.png"],
     clubs: ["Sporting de Lisboa", "Manchester United", "Real Madrid", " Juventus", "Manchester United", "Al-Nassr"],
     stages: [{ start: 2002, end: 2003 }, { start: 2003, end: 2009 }, { start: 2009, end: 2018 }, { start: 2018, end: 2021 }, { start: 2021, end: 2022 }, { start: 2023, end: 2024 }]
};

function loadDefaultSubelements(id) {
     let player = getPlayer(id);

     for (let i = 0; i < defaultSubelements.emblems.length; i++) {
          let sub = new Subelement(
               defaultSubelements.emblems[i],
               defaultSubelements.clubs[i],
               defaultSubelements.stages[i].start,
               defaultSubelements.stages[i].end
          );
          player.addSubelement(sub);
     }
}

export function loadDefaultPlayers() {
     defaultPlayers.forEach((player) => {
          addPlayer(player);
     });
     loadDefaultSubelements(0);  // Son los subelementos del bicho
}