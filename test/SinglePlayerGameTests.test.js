import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';

chai.use(chaiHttp);
describe('Tests for singlePlayerGame', () => {

    describe('Tests for /singleIndex', () => {
        it('should complete the get request', async () => {
            const res = await chai.request(server)
                .get('/singleIndex')
                .send()
            expect(res).to.have.status(200);
        })
    });
    describe('Tests for /singleGame', () => {

        it('should add player as object', async () => {
            const player = {
                name: 'aroosa'
            }
            const res = await chai.request(server)
                .post('/singleGame')
                .send(player)
            expect(res.body).to.be.an('object');
        });

        it('should give status ok for get req', async () => {
            const res = await chai.request(server)
                .get('/singleGame')
                .send()
            expect(res).to.have.status(200);
        });
        it('should give what stored in player is object', async () => {
            const res = await chai.request(server)
                .get('/singleGame')
                .send()
            expect(res.body).to.be.an('object');
        });
    });
    describe('Tests for /singleWinner', () => {
        it('test for post request value in object', async () => {
            const player1Choice = { choice: 'paper' };
            const res = await chai.request(server)
                .post('/singleWinner')
                .send(player1Choice)
            expect(res.body).to.be.an('object');
        });

        it('test for get request', async () => {
            const res = await chai.request(server)
                .get('/singleWinner')
                .send()
            expect(res).to.have.status(200);
        });
    });
});


