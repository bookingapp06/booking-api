import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddBookingTable1700314389517 implements MigrationInterface {
  private tableName = 'booking';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: this.tableName,
      columns: [
        {
          name: 'id',
          type: 'int',
          isNullable: false,
          unsigned: true,
          isGenerated: true,
          isPrimary: true,
          isUnique: true,
          generationStrategy: 'increment',
        },
        {
          name: 'service',
          type: 'varchar',
          isNullable: false,
          isUnique: false,
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
