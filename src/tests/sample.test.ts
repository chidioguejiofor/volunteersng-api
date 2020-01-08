import {describe, it} from 'mocha';
import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';
chai.use(chaiHttp);

describe('Sample tests', ()=>{
    it('Should return 1 + 1 == 2', (done)=>{
        chai.assert(1+1 === 2);
        done();
    });

    it('GET /index route should return message', async ()=>{
        const {body:{message}, status} = await chai.request(server)
            .get('/');
        expect(status).eql(200)
        expect(message).eql('Welcome All!');
    })
});
