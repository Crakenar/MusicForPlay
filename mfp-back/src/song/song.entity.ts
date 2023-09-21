import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import {
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ nullable: true })
  description: string;
  @CreateDateColumn()
  createdAt?: Date;
  @UpdateDateColumn()
  updatedAt?: Date;
  publishedAt?: Date;
  @DeleteDateColumn()
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.songs)
  author: User;
}
