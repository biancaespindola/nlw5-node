import { getCustomRepository, Repository } from 'typeorm';
import { SettingsRespository } from '../repositories/SettingsRepository';
import { Setting } from '../entities/Setting';

interface ISettingsCreate {
	chat: boolean;
	username: string;
}

class SettingsService {
	private settingsRepository: Repository<Setting>;

	cosntructor() {
		this.settingsRepository = getCustomRepository(SettingsRespository);
	}

	async create({ chat, username }: ISettingsCreate) {
		/**
		 * Vefrificando se o usuario existe
		 */
		const userAlreadyExists = await this.settingsRepository.findOne({
			username,
		});

		if (userAlreadyExists) {
			throw new Error('User already exists!');
		}

		const settings = this.settingsRepository.create({
			chat,
			username,
		});

		await this.settingsRepository.save(settings);

		return settings;
	}
}

export { SettingsService };
