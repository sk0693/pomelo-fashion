import Config from '../config';
import * as Hapi from '@hapi/hapi';
import Logger from '../helper/logger';

export default class Plugins {

  public static async registerAll(server: Hapi.Server): Promise<Error | any> {
    if (process.env.NODE_ENV === 'development') {
      await Plugins.swagger(server);
    }
  }

  public static async swagger(server: Hapi.Server): Promise<Error | any> {
    try {
      Logger.info('Plugins - Registering swagger-ui');

      await Plugins.register(server, [
        require('@hapi/inert'),
        require('@hapi/vision'),
        {
          plugin: require('hapi-swagger'),
          options: Config.swagger.options,
        },
      ]);
    } catch (error) {
      Logger.info(
        `Plugins - Ups, something went wrong when registering swagger-ui plugin: ${error}`
      );
    }
  }

  private static async register(
    server: Hapi.Server,
    plugin: any
  ): Promise<void> {
    Logger.debug('registering: ' + JSON.stringify(plugin));

    return new Promise((resolve, reject) => {
      server.register(plugin);
      resolve();
    });
  }
}
