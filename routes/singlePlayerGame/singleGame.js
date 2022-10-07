import express from 'express';
import SinglePlayerGame from '../../src/SinglePlayerGame.js';
export const router = express.Router();



router.post('/', (req, res) => {
    const newGame = new SinglePlayerGame();
    const player1 = req.body.player1;
    newGame.setSinglePlayerGame(player1);
    req.app.locals.newGame = newGame;

    res.redirect('/singleGame');
});
router.get('/', (req, res) => {
    const player = req.app.locals.newGame.player1;
    res.render('singleGame', {
        name: player.name,
    });
});

