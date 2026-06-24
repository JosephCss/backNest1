
import { DataSource } from 'typeorm';
import { ConfigService } from 'src/config/config.service';

export const databaseProviders = [

    {
     provide: 'DATABASE_CONNECTION',
     inject: [ConfigService],
     useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
       type: 'postgres',
       host: configService.get('HOST'),
       port: +configService.get('PORT'),
       username: configService.get('USERNAME'),
       password: configService.get('PASSWORD'),
       database: configService.get('DATABASE'),
      });
      return dataSource.initialize();
     },
    }
];