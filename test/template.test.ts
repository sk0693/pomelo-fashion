const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const {
    beforeEach,
    afterEach,
    describe,
    it,
} = exports.lab = Lab.script();

import Server from '../src/server';
import TemplateController from '../src/templates/controller';
import Data from '../data';

describe('Mock Github Api', () => {

    const mockHttpClient = {
        get: (url: string) => {
            return Data.GitHubMockData
        }
    }

    it('Check returned data to be an object', async () => {
        const currentPage = 1;
        const templateObject = new TemplateController(mockHttpClient)

        const githubMockData = await templateObject.getTemplateData({
            page: currentPage.toString()
        });

        expect(githubMockData).to.be.object();
    });

    it('Check page number is equal to requested page number', async () => {
        const currentPage = 5;
        const templateObject = new TemplateController(mockHttpClient)

        const githubMockData = await templateObject.getTemplateData({
            page: currentPage.toString()
        });

        expect(githubMockData.currentPage).to.be.an.number().and.to.equal(currentPage);
    });

});

describe('GET template', () => {

    beforeEach(async () => {
        await Server.start();
    });

    afterEach(async () => {
        await Server.stop();
    });

    it('responds with 200', async () => {
        const response: any = await Server.inject({
            method: 'GET',
            url: '/',
        });
        expect(response.statusCode).to.equal(200);
    });
});
