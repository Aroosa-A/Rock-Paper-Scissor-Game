import express from 'express';
import dotenv from 'dotenv';
import { router as singleIndexRouter } from './routes/singlePlayerGame/singleIndex.js';
import { router as singleGameRouter } from './routes/singlePlayerGame/singleGame.js';
import { router as singleWinnerRouter } from './routes/singlePlayerGame/singleWinner.js';
import { router as indexRouter } from './routes/twoPlayerGame/index.js';
import { router as gameRouter } from './routes/twoPlayerGame/game.js';
import { router as turnRouter } from './routes/twoPlayerGame/turn.js';
import { router as winnerRouter } from './routes/twoPlayerGame/winner.js';
import { router as chooseGameRouter } from './routes/twoPlayerGame/chooseGame.js';
import { router as extendedIndexRouter } from './routes/extendedSinglePlayerGame/extendedSingleIndex.js';
import { router as extendedGameRouter } from './routes/extendedSinglePlayerGame/extendedSingleGame.js';
import { router as extendedWinnerRouter } from './routes/extendedSinglePlayerGame/extendedSingleWinner.js';
import { router as extendedMultiIndexRouter } from './routes/extendedTwoPlayerGame/extendedMultiIndex.js';
import { router as extendedMultiGameRouter } from './routes/extendedTwoPlayerGame/extendedMultiGame.js';
import { router as extendedTurnRouter } from './routes/extendedTwoPlayerGame/extendedTurn.js';
import { router as extendedMultiWinnerRouter } from './routes/extendedTwoPlayerGame/extendedMultiWinner.js';


dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});
const port = process.env.PORT;
const host = process.env.HOST;


const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', chooseGameRouter);

app.use('/singleIndex', singleIndexRouter);
app.use('/singleGame', singleGameRouter);
app.use('/singleWinner', singleWinnerRouter);

app.use('/twoPlayerIndex', indexRouter);
app.use('/twoPlayerGame', gameRouter);
app.use('/turn', turnRouter);
app.use('/twoPlayerWinner', winnerRouter);

app.use('/extendedSinglePlayerIndex', extendedIndexRouter);
app.use('/extendedSinglePlayerGame', extendedGameRouter);
app.use('/extendedSingleWinner', extendedWinnerRouter);

app.use('/extendedMultiIndex', extendedMultiIndexRouter);
app.use('/extendedMultiGame', extendedMultiGameRouter);
app.use('/extendedTurn', extendedTurnRouter);
app.use('/extendedMultiWinner', extendedMultiWinnerRouter);


const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});



export default server;