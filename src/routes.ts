import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

const settingsController = new SettingsController();

/**
 * Tipos de parametros:
 * Routes Params => Parametros de rotas
 *  http://localhost:3333/settings/1
 *
 * Query Param =>  Filtros e buscas
 *  http://localhost:3333/settings/1?search=algumacoisa
 *
 * Body params =>  {
 *
 * }
 *
 */

routes.post('/settings', settingsController.create);

export { routes };
