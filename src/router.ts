import * as Hapi from '@hapi/hapi';
import NodesRoutes from './api/nodes/routes';
import ViewRoutes from './templates/routes';
import Logger from './helper/logger';

export default class Router {
  public static async loadRoutes(server: Hapi.Server): Promise<any> {
    Logger.info('Router - Start adding routes');

    await new NodesRoutes().register(server);
    await new ViewRoutes().register(server);

    Logger.info('Router - Finish adding routes');
  }
}
