import axios from "axios";
import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("gyms")
class Gym {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  user_id: string;

  @Column()
  cep?: string;

  @Column()
  number?: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  address?: object;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Gym };
