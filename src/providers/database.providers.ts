import { Provider } from "@nestjs/common";
import { createConnection } from "typeorm";

export const databaseProviders : Provider<any>[] = [
    {
        provide: 'POSTGRES_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username : 'postgres',
            password : '12345',
            database : 'omar',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: false,
        })
    },
]