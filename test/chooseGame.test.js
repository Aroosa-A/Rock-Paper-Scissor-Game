import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
import server from '../server.js';



describe('Tests for chooseGame', () => {
    it('should give status ok for get req', async () => {
        const res = await chai.request(server)
            .get('/')
            .send()
        expect(res).to.have.status(200);
    });
});


