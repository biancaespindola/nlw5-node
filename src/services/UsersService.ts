import { getCustomRepository, Repository } from "typeorm";
// import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
//   private usersRepository: Repository<User>;

//   constructor() {
//     this.usersRepository = getCustomRepository(UsersRepository);
//   }

  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    // Verificar se usuario existe

    const userExists = await usersRepository.findOne({
      email,
    });

    // Se existir, retornar user
    if (userExists) {
      return userExists;
    }

    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

    // Se não existir, salvar no DB
    return user;
  }

//   async findByEmail(email: string) {
//     const user = await this.usersRepository.findOne({
//       email,
//     });
//     return user;
//   }
}

export { UsersService };