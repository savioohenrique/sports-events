import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
  } from "typeorm";

export class CreateEvents1644333881748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
          new Table({
            name: "events",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
                default: "uuid_generate_v4()",
              },
              {
                name: "name",
                type: "varchar",
              },
              {
                name: "description",
                type: "varchar",
              },
              {
                name: "gym_id",
                type: "uuid",
              },
              {
                name: "capacity",
                type: "int",
              },
              {
                name: "active",
                type: "boolean",
                default: true,
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
            ],
          })
        );
    
        await queryRunner.createForeignKey(
          "events",
          new TableForeignKey({
            columnNames: ["gym_id"],
            referencedTableName: "gyms",
            referencedColumnNames: ["id"],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("events");
      }

}
