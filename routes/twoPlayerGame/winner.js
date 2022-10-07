import express from 'express';
export const router = express.Router();


router.post('/', (req, res) => {
    const game = req.app.locals.newGame;
    req.app.locals.value2 = req.body.choice;
    const player1 = req.app.locals.player1;
    const player2 = req.app.locals.player2;
    req.app.locals.result = game.getWinner(req.app.locals.value1, req.app.locals.value2, player1, player2);

    res.redirect('/twoPlayerWinner');
});
router.get('/', (req, res) => {
    const result = req.app.locals.result;
    const string = ' Won';
    if (result === 'Game is Draw') {
        res.render('twoPlayerWinner', {
            result
        });
    }
    {
        res.render('twoPlayerWinner', {
            result,
            string
        });
    }
});



