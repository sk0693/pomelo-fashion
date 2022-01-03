import * as Hapi from '@hapi/hapi';
import * as Boom from '@hapi/boom';
import Logger from '../helper/logger';
import IRoute from '../helper/route';
import * as Handlebars from 'handlebars';
import TemplateController from './controller';
import HttpClient from '../helper/httpClient';
import Repo from '../model/repo';
import newResponse from '../helper/response';
import { Repository } from '../model/interfaces';
import Joi = require('@hapi/joi');
const Paginate = require('handlebars-paginate');


export default class TemplateRoute implements IRoute {

    private loadView = async (request: Hapi.Request, toolkit: Hapi.ResponseToolkit): Promise<any> => {
        try {
            const httpClient = new HttpClient();
            const templateContObj = new TemplateController(httpClient);

            const repositories: Repository = await templateContObj.getTemplateData(request.query);

            const RepoObj = new Repo({
                page: repositories.currentPage,
                pageCount: repositories.pageCount,
                items: repositories.items
            })

            return toolkit.view('index', {
                title: `Pomelo Fashion Node Js Challange`,
                headers: ['name', 'path', 'url'],
                data: RepoObj.items,
                pagination: RepoObj.toObject()
            });
        } catch (error) {
            Logger.info(`Server - There was something wrong: ${error}`);
            return toolkit.response(
                newResponse(request, {
                    boom: Boom.badImplementation(error),
                })
            );

        }

    }

    public async register(server: Hapi.Server): Promise<any> {
        return new Promise(resolve => {
            Logger.info('TemplateRoutes - Start adding');

            Handlebars.registerHelper('paginate', Paginate);

            server.views({
                engines: { html: Handlebars },
                relativeTo: __dirname,
                path: `./`,
                // helpersPath: `./helpers`,
                // isCached: false
                // layout: true,
                // layoutPath: './layouts'
            });

            server.route([
                {
                    method: 'GET',
                    path: '/',
                    options: {
                        description: 'Route returns template as view ',
                        tags: ['api', 'views'],
                        handler: this.loadView,
                        validate: {
                            query: {
                                page: Joi.string()
                            }
                        }
                    }
                },
            ]);

            Logger.info('TemplateRoutes - Finish adding');

            resolve();
        });
    }
}
