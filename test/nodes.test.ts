const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const {
    beforeEach,
    afterEach,
    describe,
    it,
} = exports.lab = Lab.script();

import Server from '../src/server';
import Data from '../data';


interface NodesPayload {
    meta: object;
    data: object[];
    errors: string[];
}

describe('POST route for formatting child nodes', () => {

    beforeEach(async () => {
        await Server.start();
    });

    afterEach(async () => {
        await Server.stop();
    });

    it('responds with 200', async () => {
        const res = await Server.inject({
            method: 'post',
            url: '/api/nodes/formatNodes',
            payload: Data.Appendix1
        });
        expect(res.statusCode).to.equal(200);
    });

    it('responds having properties [meta, data, error]', async () => {
        const response: any = await Server.inject({
            method: 'post',
            url: '/api/nodes/formatNodes',
            payload: Data.Appendix1
        });

        const payload: any = JSON.parse(response.payload);
        expect(payload.meta).to.be.an.object();
        expect(payload.data).to.be.an.array();
        expect(payload.errors).to.be.an.array();
    });

    it('Match output for given input', async () => {
        const response: any = await Server.inject({
            method: 'post',
            url: '/api/nodes/formatNodes',
            payload: Data.Appendix1
        });

        const payload: any = JSON.parse(response.payload);
        expect(payload).to.equal(Data.Appendix2);
    });
});