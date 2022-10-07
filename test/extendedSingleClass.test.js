import { expect } from "chai";
import ExtendedSingle from "../src/ExtendedSingle.js";




describe('Tests for ExtendedSingle class', () => {
    it('should create instance of ExtendedSingle class', () => {
        const newGame = new ExtendedSingle();
        expect(newGame).to.have.an('object');
    });
    it('setSinglePlayerGame should set object with what is passed in', () => {
        const newGame = new ExtendedSingle();
        newGame.setExtendedOnePlayerGame('aroosa');
        expect(newGame.player1.name).to.contain('aroosa');
    });
    it('get random value from computer(player)', () => {
        const newGame = new ExtendedSingle();
        expect(newGame.player2Choice()).to.be.lessThan(5);
    });
});


