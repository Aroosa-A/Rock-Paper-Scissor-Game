import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
import server from '../server.js';


describe('Tests for TwoPlayerGame', () => {

    describe('Tests for /twoPlayerIndex', () => {
        it('should give status ok for get req', async () => {
            const res = await chai.request(server)
                .get('/twoPlayerIndex')
                .send()
            expect(res).to.have.status(200);
        });
    });

    describe('Tests for /twoPlayerGame', () => {

        it('should add player as object', async () => {
            const player1 = {
                name: 'aroosa'
            }
            const player2 = {
                name: 'habiba'
            }
            const res = await chai.request(server)
                .post('/twoPlayerGame')
                .send(player1, player2)
            expect(res.body).to.be.an('object');
        });

        it('should give status ok for get req', async () => {
            const res = await chai.request(server)
                .get('/twoPlayerGame')
                .send()
            expect(res).to.have.status(200);
        });
        it('should give what stored in player is object', async () => {
            const res = await chai.request(server)
                .get('/twoPlayerGame')
                .send()
            expect(res.body).to.be.an('object');
        });
    });

    describe('Tests for /turn', () => {

        it('should add choice as object', async () => {
            const choice1 = {
                choice: 'paper'
            }
            const res = await chai.request(server)
                .post('/turn')
                .send(choice1)
            expect(res.body).to.be.an('object');
        });

        it('should give what stored in player is object', async () => {
            const res = await chai.request(server)
                .get('/turn')
                .send()
            expect(res.body).to.be.an('object');
        });
    });
    describe('Tests for /twoPlayerWinner', () => {
        it('test for post request value in object', async () => {
            const player1Choice = { choice: 'paper' };
            const res = await chai.request(server)
                .post('/twoPlayerWinner')
                .send(player1Choice)
            expect(res.body).to.be.an('object');
        });

        it('test for get request', async () => {
            const res = await chai.request(server)
                .get('/twoPlayerWinner')
                .send()
            expect(res).to.have.status(200);
        });
    });
});