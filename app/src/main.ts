import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as functions from 'firebase-functions';
import { RenderModule } from 'nest-next';
import Next from 'next';
import 'reflect-metadata';
import { AppModule } from './app.module';
const express = require('express');

const server = express();

export const createNestServer = async (expressInstance: any) => {
    const dev = process.env.NODE_ENV === 'development' ? true : false;
    const app = Next({ dev });
    await app.prepare();

    const server = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));

    const renderer = server.get(RenderModule);
    renderer.register(server, app, { viewsDir: null });

    console.log(`Nest app running in ${dev ? 'development' : 'production'} mode`);

    if (dev) {
        const port = 3000;
        await server.listen(port);
        console.log(`Nest dev server is running on http://localhost:${port}`);
        return null;
    } else {
        return server.init();
    }
};

const promise = createNestServer(server);

if (promise) {
    promise.then(v => console.log('Nest Ready')).catch(err => console.error('Nest broken', err));
}

export const nest = functions.https.onRequest(server);
