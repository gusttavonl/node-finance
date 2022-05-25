import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createTableCategory1653476824673 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'category',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        length: '250',
                        isNullable: false
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                        length: '50',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )

        await queryRunner.createForeignKey('category', new TableForeignKey({
            name: 'user_fk',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category')
    }

}
