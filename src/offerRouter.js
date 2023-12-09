import express from 'express';
import * as offerService from './offerService.js';
import { Offer } from './defaultOffers.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main');
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
        req.body.description
    )

    if (playerService.correctValues(player)) {
        playerService.addPlayer(player);
        res.render('mensajes', {
            title: "Ficha creada",
            message: "Jugador añadido correctamente"
        });
    }
});

router.get('/ficha', (req, res) => {
    let id = parseInt(req.query.id);
    let player = offerService.getPlayer(id);
    res.render('ficha', {
        player: player,
        name: player.name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),  // h2 muestra mal las tildes, así conseguimos quitarlas
        subelems: player.subelements
    });
});

router.get('/borrar', (req, res) => {
    let id = parseInt(req.query.id);
    let name = offerService.getPlayer(id).name;

    offerService.deletePlayer(id);

    res.render('mensajes', {
        title: "Ficha eliminada",
        message: "Ficha de " + name + " eliminada definitivamente"
    });
});

router.get('/editar', (req, res) => {
    let id = parseInt(req.query.id)
    let player = offerService.getPlayer(id);
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

    if (offerService.correctValues(newPlayer)) {
        let player = offerService.getPlayer(parseInt(id));

        offerService.editPlayer(player, newPlayer);

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

    if (offerService.correctSubvalues(sub)) {
        let player = offerService.getPlayer(id);

        player.addSubelement(sub);

        res.render('ficha', {
            player: player,
            name: player.name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
            subelems: player.subelements
        });
    }
});

export default router;