import express from 'express';
import ExtendedSingle from '../../src/ExtendedSingle.js';
export const router = express.Router();



router.post('/', (req, res) => {
    const newGame = new ExtendedSingle();
    const player1 = req.body.player1;
    newGame.setExtendedOnePlayerGame(player1);
    req.app.locals.newGame = newGame;

    res.redirect('/extendedSinglePlayerGame');
});
router.get('/', (req, res) => {
    const player = req.app.locals.newGame.player1;
    res.render('extendedSingleGame', {
        name: player.name,
    });
});

