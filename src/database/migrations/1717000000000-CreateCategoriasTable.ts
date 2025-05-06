import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategoriasTable1717000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categorias',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nombre',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    // Insertar datos iniciales
    await queryRunner.query(`
      INSERT INTO categorias (id, nombre) VALUES 
      (1, 'Neumáticos'),
      (2, 'Chasis'),
      (3, 'Motor'),
      (4, 'Accesorios')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categorias');
  }
}