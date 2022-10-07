import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';


chai.use(chaiHttp);

describe('Tests for extendedTwoPlayerGame', () => {
    describe('Tests for /extendedMultiIndex', () => {
        it('should complete the get request', async () => {
            const res = await chai.request(server)
                .get('/extendedMultiIndex')
                .send()
            expect(res).to.have.status(200);
        });
    });
    describe('Tests for /extendedMultiGame', () => {

        it('should add player as object', async () => {
            const player1 = {
                name: 'aroosa'
            }
            const player2 = {
                name: 'habiba'
            }
            const res = await chai.request(server)
                .post('/extendedMultiGame')
                .send(player1, player2)
            expect(res.body).to.be.an('object');
        });

        it('should give status ok for get req', async () => {
            const res = await chai.request(server)
                .get('/extendedMultiGame')
                .send()
            expect(res).to.have.status(200);
        });
        it('should give what stored in player is object', async () => {
            const res = await chai.request(server)
                .get('/extendedMultiGame')
                .send()
            expect(res.body).to.be.an('object');
        });
    });
    describe('Tests for /extendedTurn', () => {

        it('should add choice as object', async () => {
            const choice1 = {
                choice: 'paper'
            }
            const res = await chai.request(server)
                .post('/extendedTurn')
                .send(choice1)
            expect(res.body).to.be.an('object');
        });

        it('should give what stored in player is object', async () => {
            const res = await chai.request(server)
                .get('/extendedTurn')
                .send()
            expect(res.body).to.be.an('object');
        });
    });
    describe('Tests for /extendedMultiWinner', () => {
        it('test for post request value in object', async () => {
            const player1Choice = { choice: 'paper' };
            const res = await chai.request(server)
                .post('/extendedMultiWinner')
                .send(player1Choice)
            expect(res.body).to.be.an('object');
        });

        it('test for get request', async () => {
            const res = await chai.request(server)
                .get('/extendedMultiWinner')
                .send()
            expect(res).to.have.status(200);
        });
    });
});


