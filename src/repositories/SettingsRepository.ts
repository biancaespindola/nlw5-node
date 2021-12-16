import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Setting";

@EntityRepository(Setting)
class SettingsRespository extends Repository<Setting> {}

export { SettingsRespository };