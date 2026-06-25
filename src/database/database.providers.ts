
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [

    {
     provide: 'DATABASE_CONNECTION',
     inject: [ConfigService],
     useFactory: async (config: ConfigService) => {
      const dataSource = new DataSource({
       type: 'postgres',
       host: config.get('HOST') || 'localhost',
       port: +(config.get('PORT') || '5432'),
       username: config.get('USERNAME') || 'postgres',
       password: config.get('PASSWORD') || '123456',
       database: config.get('DATABASE') || 'back_nest_angular',
      });
      return dataSource.initialize();
     }
    }
];