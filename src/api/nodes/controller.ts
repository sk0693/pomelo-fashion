import * as Boom from '@hapi/boom';
import * as Hapi from '@hapi/hapi';
import Node from '../../model/node';
import Logger from '../../helper/logger';
import newResponse from '../../helper/response';
import NodesService from './service';

export default class NodesController extends NodesService {

  constructor() {
    super()
  }

  public formatChildNodes = async (request: Hapi.Request, toolkit: Hapi.ResponseToolkit): Promise<any> => {
    try {
      Logger.info(`POST - ${request.url.href}`);

      const output = this.processChildFormatting(request.payload);

      return toolkit.response(
        newResponse(request, {
          value: output,
        })
      );
    } catch (error) {
      return toolkit.response(
        newResponse(request, {
          boom: Boom.badImplementation(error),
        })
      );
    }
  };

}
