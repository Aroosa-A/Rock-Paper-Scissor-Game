import express from 'express';
import TwoPlayerGame from '../../src/TwoPlayerGame.js';
export const router = express.Router();



router.post('/', (req, res) => {
    const newGame = new TwoPlayerGame();
    req.app.locals.player1 = req.body.player1;
    req.app.locals.player2 = req.body.player2;
    newGame.setTwoPlayerGame(req.app.locals.player1, req.app.locals.player2);
    req.app.locals.newGame = newGame;

    res.redirect('/twoPlayerGame');
});
router.get('/', (req, res) => {
    const player = req.app.locals.newGame.currentPlayer();
    res.render('firstPlayerTurn', {
        name: player.name,
    });
});

