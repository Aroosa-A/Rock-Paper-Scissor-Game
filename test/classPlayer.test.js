import { expect } from 'chai';
import Player from '../src/classPlayer.js';


describe('Tests for classPlayer', () => {
    it('should create instance of Player class', () => {
        const newPlayer = new Player('aroosa');
        expect(newPlayer).to.be.an('Object');
    });
});





