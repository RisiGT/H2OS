import express from 'express';
import * as offerService from './offerService.js';
import { Offer } from './defaultOffers.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main', {
        offers: offerService.getOffers()
    });
});

router.get("/formulario", (req, res) => {
    res.render('formulario');
});

router.post('/crear', (req, res) => {
    let offer = new Offer(
        req.body.dir,
        req.body.description,
        req.body.type,
        req.body.start,
        req.body.salary
    )

    if (offerService.correctValues(offer)) {
        offerService.addOffer(offer);
        res.render('mensajes', {
            title: "Oferta creada",
            message: "Oferta añadida correctamente"
        });
    }
});

router.get('/oferta', (req, res) => {
    let id = parseInt(req.query.id);
    let offer = offerService.getOffer(id);
    res.render('oferta', {
        offer: offer
    });
});

router.get('/borrar', (req, res) => {
    let id = parseInt(req.query.id);

    offerService.deleteOffer(id);

    res.render('mensajes', {
        title: "Oferta eliminada",
        message: "Oferta eliminada definitivamente"
    });
});

router.get('/editar', (req, res) => {
    let id = parseInt(req.query.id)
    let offer = offerService.getOffer(id);

    res.render('formulario', {
        offer: offer,
        edit: true
    });
});

router.post('/fichaEditada', (req, res) => {
    let newOffer = new Offer(
        req.body.dir,
        req.body.description,
        req.body.type,
        req.body.start,
        req.body.salary
    );

    let id = req.body.id;

    if (offerService.correctValues(newOffer)) {
        let offer = offerService.getOffer(parseInt(id));

        offerService.editOffer(offer, newOffer);

        res.render('mensajes', {
            title: "Oferta editada",
            message: "Oferta editada correctamente"
        });
    }
});

export default router;