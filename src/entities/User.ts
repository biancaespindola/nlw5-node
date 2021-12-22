import { Entity, PrimaryColumn, Column, CreateDateColumn} from "typeorm";
import { v4 as uuid  } from "uuid";

@Entity("settings")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @CreateDateColumn()
    updated_at: Date;
    
    constructor() {
        /**
         * é chamado sempre que é instranciado um objeto
         * nesse caso um new User()
         */
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User }