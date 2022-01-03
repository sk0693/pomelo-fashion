import * as Hapi from '@hapi/hapi';
// import * as test from 'tape';
// import { Test } from 'tape';
import Server from '../src/server';

// export interface IPayload<T> {
//   status: number;
//   data: T;
// }

export const startServer = async (): Promise<Hapi.Server> => {
  return await Server.start();
};

export const stopServer = async (): Promise<void | Error> => {
  return await Server.stop();
};

// export const serverTest = async (
//   description: string,
//   testFunc: (server: Hapi.Server, t: Test) => void
// ) => {
//   test(description, async t => {
//     const server = await startServer();
//     await testFunc(server, t);
//     await stopServer();
//     t.end();
//   });
// };
