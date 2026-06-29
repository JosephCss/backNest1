
import { DataSource } from 'typeorm';

export const databaseProviders = [

    {
     provide: 'DATABASE_CONNECTION',
     useFactory: async () => {
      console.log('Environment variables:', {
        host: process.env.HOST,
        port: process.env.PORT,
        username: process.env.USERNAME,
        password: process.env.PASSWORD ? '***' : undefined,
        database: process.env.DATABASE,
      });

      const dataSource = new DataSource({
       type: 'postgres',
       host: process.env.HOST || 'localhost',
       port: +(process.env.PORT || '5432'),
       username: process.env.USERNAME || 'postgres',
       password: process.env.PASSWORD || '123456',
       database: process.env.DATABASE || 'back_nest_angular',
      });
      return dataSource.initialize();
     }
    }
];