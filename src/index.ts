import Logger from './helper/logger';
import Server from './server';
import * as Hapi from '@hapi/hapi';


export interface IPayload<T> {
  status: number;
  data: T;
}

export const startServer = async (): Promise<Hapi.Server> => {
  return await Server.start();
};

export const stopServer = async (): Promise<void | Error> => {
  return await Server.stop();
};

(async () => {
  await startServer()
})();


// listen on SIGINT signal and gracefully stop the server
process.on('SIGINT', () => {
  Logger.info('Stopping hapi server');

  Server.stop().then(err => {
    Logger.info(`Server stopped`);
    process.exit(err ? 1 : 0);
  });
});
