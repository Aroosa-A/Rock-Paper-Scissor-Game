import { expect } from "chai";
import TwoPlayerGame from "../src/TwoPlayerGame.js";



describe('Tests for TwoPlayerGame', () => {
    it('setTwoPlayerGame should set array with what is passed in', () => {
        const newGame = new TwoPlayerGame();
        newGame.setTwoPlayerGame('aroosa', 'habiba');
        expect(newGame.playerArray).to.be.an('array');
    });
    it('getWinner should return correct result', () => {
        const newGame = new TwoPlayerGame();
        const result = newGame.getWinner('paper', 'paper', 'aroosa', 'habiba');
        expect(result).to.be.equal('Game is Draw');
    });
    it('chooseCase should return correct result', () => {
        const newGame = new TwoPlayerGame();
        const result = newGame.chooseCase('paper', 'rock', 'aroosa', 'habiba');
        expect(result).to.be.equal('aroosa');
    });
});