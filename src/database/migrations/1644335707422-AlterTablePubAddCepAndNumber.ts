import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableGymAddCepAndNumber1644335707422
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "gyms",

      new TableColumn({
        name: "cep",

        type: "varchar",

        isNullable: true,
      })
    );
    await queryRunner.addColumn(
      "gyms",

      new TableColumn({
        name: "number",

        type: "varchar",

        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("gyms", "CEP");
    await queryRunner.dropColumn("gyms", "number");
  }
}
