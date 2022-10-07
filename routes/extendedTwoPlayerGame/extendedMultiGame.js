import express from 'express';
import ExtendedTwoPlayer from '../../src/ExtendedTwoPlayer.js';
export const router = express.Router();



router.post('/', (req, res) => {
    const newGame = new ExtendedTwoPlayer();
    req.app.locals.player1 = req.body.player1;
    req.app.locals.player2 = req.body.player2;
    newGame.setExtendedTwoPlayerGame(req.app.locals.player1, req.app.locals.player2);
    req.app.locals.newGame = newGame;

    res.redirect('/extendedMultiGame');
});
router.get('/', (req, res) => {
    const player = req.app.locals.newGame.currentPlayer();
    res.render('extendedFirstTurn', {
        name: player.name,
    });
});

