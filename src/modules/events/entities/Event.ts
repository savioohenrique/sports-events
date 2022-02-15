import { Entity, Column, PrimaryColumn, CreateDateColumn} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("events")
class Event {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  capacity: number;

  @Column()
  gym_id: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Event };
