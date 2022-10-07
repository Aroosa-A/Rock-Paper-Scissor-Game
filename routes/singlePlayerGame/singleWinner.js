import express from 'express';
export const router = express.Router();


router.post('/', (req, res) => {
    const game = req.app.locals.newGame;
    game.player1Choice = req.body.choice;
    req.app.locals.result = game.decideWinner();

    res.redirect('/singleWinner');
});
router.get('/', (req, res) => {
    const result = req.app.locals.result;
    res.render('singleWinner', {
        result
    });
});



