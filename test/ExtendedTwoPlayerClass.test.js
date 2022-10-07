import { expect } from "chai";
import ExtendedTwoPlayer from "../src/ExtendedTwoPlayer.js";




describe('Tests for ExtendedTwoPlayer class', () => {
    it('setExtendedTwoPlayerGame should set array with what is passed in', () => {
        const newGame = new ExtendedTwoPlayer();
        newGame.setExtendedTwoPlayerGame('aroosa', 'habiba');
        expect(newGame.playerArray).to.be.an('array');
    });
    it('getWinner should return correct result', () => {
        const newGame = new ExtendedTwoPlayer();
        const result = newGame.getWinner('lizard', 'lizard', 'aroosa', 'habiba');
        expect(result).to.be.equal('Game is Draw');
    });
    it('chooseCase should return correct result', () => {
        const newGame = new ExtendedTwoPlayer();
        const result = newGame.chooseCase('lizard', 'spock', 'aroosa', 'habiba');
        expect(result).to.be.equal('aroosa');
    });
});


