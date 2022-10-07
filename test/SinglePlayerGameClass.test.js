import { expect } from "chai";
import SinglePlayerGame from "../src/SinglePlayerGame.js";




describe('Tests for singlePlayerGame', () => {
    it('should create instance of singlePlayerGame', () => {
        const newGame = new SinglePlayerGame();
        expect(newGame).to.have.an('object');
    });
    it('setSinglePlayerGame should set object with what is passed in', () => {
        const newGame = new SinglePlayerGame();
        newGame.setSinglePlayerGame('aroosa');
        expect(newGame.player1.name).to.contain('aroosa');
    });
    it('get random value from computer(player)', () => {
        const newGame = new SinglePlayerGame();
        expect(newGame.player2Choice()).to.be.lessThan(3);
    });

});


