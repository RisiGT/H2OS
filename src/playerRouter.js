import express from 'express';
import * as playerService from './playerService.js';
import { Player, Subelement } from './defaultPlayers.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('plantilla', {
        players: playerService.getPlayers(),
    });
});

router.get("/formulario", (req, res) => {
    res.render('formulario');
});

router.post('/crear', (req, res) => {
    let player = new Player(
        req.body.photo,
        req.body.name,
        req.body.position,
        req.body.number,
        req.body.birthday,
        req.body.nationality,
        req.body.price,
        req.body.description,
    )

    if (playerService.correctValues(player)) { //si no ha habido ningún error, se crea el nuevo elemento(jugador)
        playerService.addPlayer(player);
        res.render('mensajes', {
            title: "Ficha creada",
            message: "Jugador añadido correctamente"
        });
    }
});

router.get('/ficha', (req, res) => {
    let id = parseInt(req.query.id);
    let player = playerService.getPlayer(id);
    res.render('ficha', {
        player: player,
        name: player.name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),  // h2 muestra mal las tildes, así conseguimos quitarlas
        subelems: player.subelements
    });
});

router.get('/borrar', (req, res) => {
    let id = parseInt(req.query.id);
    let name = playerService.getPlayer(id).name;

    playerService.deletePlayer(id);

    res.render('mensajes', {
        title: "Ficha eliminada",
        message: "Ficha de " + name + " eliminada definitivamente"
    });
});

router.get('/editar', (req, res) => {
    let id = parseInt(req.query.id)
    let player = playerService.getPlayer(id);
    res.render('formulario');
});

router.post('/fichaEditada', (req, res) => {
    let newPlayer = new Player(
        req.body.playerphoto,
        req.body.name,
        req.body.position,
        req.body.jerseyNumber,
        req.body.birthday,
        req.body.nationality,
        req.body.price,
        req.body.description,
    );

    if (playerService.correctValues(newPlayer)) {
        let player = playerService.getPlayer(parseInt(id));

        playerService.editPlayer(player, newPlayer);

        res.render('mensajes', {
            title: "Ficha editada",
            message: "Ficha editada correctamente"
        });
    }
});

router.post("/subelementoCreado", (req, res) => {
    let sub = new Subelement(
        req.body.emblem,
        req.body.club,
        req.body.start,
        req.body.end
    )

    let id = parseInt(req.body.id);

    if (playerService.correctSubvalues(sub)) {
        let player = playerService.getPlayer(id);

        player.addSubelement(sub);

        res.render('ficha', {
            player: player,
            name: player.name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
            subelems: player.subelements
        });
    }
});

export default router;