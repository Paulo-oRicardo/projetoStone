"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactions1622073139344 = void 0;
const typeorm_1 = require("typeorm");
class CreateTransactions1622073139344 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "transactions",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "user_id",
                    type: "uuid",
                },
                {
                    name: "fundraising_id",
                    type: "uuid",
                },
                {
                    name: "value_donated",
                    type: "int",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
            foreignKeys: [
                {
                    name: "FKUser",
                    referencedTableName: "user",
                    referencedColumnNames: ["user_id"],
                    columnNames: ["user_id"],
                },
                {
                    name: "FKFundraising",
                    referencedTableName: "fundraising",
                    referencedColumnNames: ["id"],
                    columnNames: ["fundraising_id"],
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('transactions');
    }
}
exports.CreateTransactions1622073139344 = CreateTransactions1622073139344;
