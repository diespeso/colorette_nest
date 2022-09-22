import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageController } from './modules/image/image.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ImageModule } from './modules/image/image.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'test_colorette',
      models: [],
      synchronize: true,
      autoLoadModels: true,
      logging: false,
    }),
    ImageModule,
  ],
  controllers: [AppController, ImageController],
  providers: [AppService],
})
export class AppModule {}
