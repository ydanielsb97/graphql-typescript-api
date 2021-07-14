import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from "typeorm";

import bcrypt from "bcrypt"
@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Generated("uuid")
  uuid!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  userName!: string;

  @Column()
  password!: string;

  @CreateDateColumn()
  createAt!: Date;

  @BeforeInsert()
  async hashPassword(){
    const salt = await bcrypt.genSalt(10)

    const newPassword = await bcrypt.hash(this.password, salt)
    
    return this.password = newPassword;
  }

  async comparePassword(password: string){
    return await bcrypt.compare(password, this.password);
  }
}
