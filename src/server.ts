import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { SimpleConsoleLogger } from 'typeorm';

import './database';
import { routes } from './routes';

const app = express();

//criando proptocolo http
const http = createServer(app);
// criando protocolo ws
const io = new Server(http);

io.on('conection', (socket: Socket) => {
	console.log('Se conectou', socket.id);
});

/**
 * GET = buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = deletar
 * PATCH = Alterar uma infoação específica
 */

app.use(express.json());

app.use(routes);

http.listen(3333, () => console.log('Server is running on port 3333'));
