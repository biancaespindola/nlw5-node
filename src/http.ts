import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from "path";

import './database';
import { routes } from './routes';

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine","html");

app.get("/", (request, response) => {
    return response.render("html/client.html")
})

//criando proptocolo http
const http = createServer(app);
// criando protocolo ws
const io = new Server(http);

io.on('connection', (socket: Socket) => {
	// console.log('Se conectou', socket.id);
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

export { http, io };