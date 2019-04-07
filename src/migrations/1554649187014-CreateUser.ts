import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateUser1554648065577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'users',
        columns: [{
          name: 'id',
          type: 'int',
          isPrimary: true,
        }, {
          name: 'login',
          type: 'varchar',
          isUnique: true,
        }, {
          name: 'createdAt',
          default: 'NOW()',
          type: 'timestamp',
          isNullable: false,
        }, {
          name: 'updatedAt',
          default: 'NOW()',
          type: 'timestamp',
          isNullable: false,
        }, {
          name: 'deletedAt',
          type: 'timestamp',
          isNullable: true,
        }],
    }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('users');
    }

}
