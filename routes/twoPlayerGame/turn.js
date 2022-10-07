import express from 'express';
export const router = express.Router();


router.post('/', (req, res) => {
    const newGame = req.app.locals.newGame;
    req.app.locals.value1 = req.body.choice;
    newGame.switchTurn();

    res.redirect('/turn');
});

router.get('/', (req, res) => {
    const player = req.app.locals.newGame.currentPlayer();
    res.render('secondPlayerTurn', {
        name: player.name
    })
});