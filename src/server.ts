import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes';

const app = Fastify({ logger: true})

const start = async () => {

    await app.register(cors, {
        origin: "*",
    });
    await app.register(routes);

    try{
        await app.listen({port: 3456 })
        app.log.info('Server listening on http://localhost:3456');
    } catch(err) {
        process.exit(1)
    }
}

start();