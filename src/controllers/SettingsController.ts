import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { SettingsRespository } from "../repositories/SettingsRepository";

class SettingsController {
	async create(request: Request, response: Response) {
		const { chat, username } = request.body;

		const settingsRespository = getCustomRepository(SettingsRespository);

		const settings = settingsRespository.create({
			chat,
			username,
		});

		await settingsRespository.save(settings);

		return response.json(settings);
	}
}

export { SettingsController };
