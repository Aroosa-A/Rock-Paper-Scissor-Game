import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';

chai.use(chaiHttp);
describe('Tests for /extendedSinglePlayerIndex', () => {
    describe('Tests for /extendedSinglePlayerIndex', () => {
        it('should complete the get request', async () => {
            const res = await chai.request(server)
                .get('/extendedSinglePlayerIndex')
                .send()
            expect(res).to.have.status(200);
        });
    });
    describe('Tests for /extendedSinglePlayerGame', () => {
        it('should add player as object', async () => {
            const player = {
                name: 'aroosa'
            }
            const res = await chai.request(server)
                .post('/extendedSinglePlayerGame')
                .send(player)
            expect(res.body).to.be.an('object');
        });
        it('should give status ok for get req', async () => {
            const res = await chai.request(server)
                .get('/extendedSinglePlayerGame')
                .send()
            expect(res).to.have.status(200);
        });
        it('should give what stored in player is object', async () => {
            const res = await chai.request(server)
                .get('/extendedSinglePlayerGame')
                .send()
            expect(res.body).to.be.an('object');
        });
    });
    describe('Tests for /extendedSingleWinner', () => {
        it('test for post request value in object', async () => {
            const player1Choice = { choice: 'lizard' };
            const res = await chai.request(server)
                .post('/extendedSingleWinner')
                .send(player1Choice)
            expect(res.body).to.be.an('object');
        });

        it('test for get request', async () => {
            const res = await chai.request(server)
                .get('/extendedSingleWinner')
                .send()
            expect(res).to.have.status(200);
        });
    });
});