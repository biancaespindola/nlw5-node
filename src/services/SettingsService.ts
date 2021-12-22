import { getCustomRepository } from "typeorm";
import { SettingsRespository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}


class SettingsService {

    async create({chat, username} : ISettingsCreate) {
        const settingsRespository = getCustomRepository(SettingsRespository);

        /**
         * Vefrificando se o usuario existe
         */
        const userAlreadyExists = await settingsRespository.findOne({
            username
        });

        if(userAlreadyExists) {
            throw new Error("User already exists!");
        }


        const settings = settingsRespository.create({
            chat,
            username,
        });

        await settingsRespository.save(settings);

        return settings;
    }
}

export { SettingsService }