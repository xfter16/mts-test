import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 200, nullable: false})
  login: string;

  @Column('timestamp', { precision: 3, default: () => 'CURRENT_TIMESTAMP(3)' })
  createdAt: Date;

  @Column('timestamp', { precision: 3, default: () => 'CURRENT_TIMESTAMP(3)', onUpdate: 'CURRENT_TIMESTAMP(3)'})
  updatedAt: Date;

  @Column('timestamp', { default: () => null, nullable: true })
  deletedAt: Date;
}
