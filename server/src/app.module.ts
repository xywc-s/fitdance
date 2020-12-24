/*
 * @Description: 
 * @Author: xywc_s
 * @Date: 2020-11-27 14:10:11
 */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticalsController } from './articals/articals.controller';
import { ArticalsModule } from './articals/articals.module';
import { FilesController } from './files/files.controller';
import { FilesModule } from './files/files.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        database: 'fitdance',
        host: config.get('PG_HOST'),
        port: config.get('PG_PORT'),
        username: config.get('PG_USER'),
        password: config.get('PG_PWD'),
        entities: [
          __dirname+'/models/*.js'
        ],
        migrations:[
          __dirname+"/migrations/*.js"
        ],
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    // TypegooseModule.forRootAsync({
    //   useFactory:async (configService: ConfigService)=>({
    //     uri: `mongodb://${configService.get('DB_HOST')}/${configService.get('DB_NAME')}`,
    //     useNewUrlParser: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true,
    //     useUnifiedTopology: true
    //   }),
    //   inject:[ConfigService]
    // }),
    UsersModule,
    FilesModule,
    ArticalsModule,
  ],
  controllers: [AppController, UsersController, FilesController, ArticalsController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection:Connection){}
  
}
