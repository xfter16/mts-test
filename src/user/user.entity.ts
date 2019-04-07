import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

@Entity()
@Unique(['login'])
export class Users {
  @PrimaryGeneratedColumn()
  @ApiModelPropertyOptional({ description: 'user`s identificador' })
  id: number;

  @Column('varchar', {length: 200, nullable: false})
  @ApiModelPropertyOptional({ description: 'user`s login' })
  login: string;

  @Column('timestamp', { precision: 3, default: () => 'CURRENT_TIMESTAMP(3)' })
  @ApiModelPropertyOptional({ description: 'user`s created date' })
  createdAt: Date;

  @Column('timestamp', { precision: 3, default: () => 'CURRENT_TIMESTAMP(3)', onUpdate: 'CURRENT_TIMESTAMP(3)'})
  @ApiModelPropertyOptional({ description: 'user`s updated date' })
  updatedAt: Date;

  @Column('timestamp', { default: () => null, nullable: true })
  @ApiModelPropertyOptional({ description: 'user`s deleted date' })
  deletedAt: Date;
}
