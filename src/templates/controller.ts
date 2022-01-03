import * as Hapi from '@hapi/hapi';
import Logger from '../helper/logger';
import { Repository } from '../model/interfaces';


export default class TemplateController {

    private httpClient: any;

    constructor(client: any) {
        this.httpClient = client;
    }

    private pageConfig = {
        initialPage: 1,
        perPage: 10
    }

    public getTemplateData = async (queryParams: Hapi.RequestQuery) => {

        try {
            const page = Number(queryParams.page || this.pageConfig.initialPage);

            const url = `${process.env.GITHUB_URI}+${process.env.USER_AGENT}&page=${page}&per_page=${this.pageConfig.perPage}`;

            const response: Repository = await this.httpClient.get(url);

            response.pageCount = Math.ceil(response.total_count / this.pageConfig.perPage);
            response.currentPage = page;

            return response

        } catch (error) {
            Logger.info(`Server - There was something wrong: ${error}`);
            throw error;
        }

    }
}
