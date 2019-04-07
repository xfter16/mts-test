import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { User } from './models/user.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'sergey',
      password: 'vicxfter',
      database: 'locale_test',
      entities: [__dirname + '/models/*.model{.ts,.js}'],
      migrations: ['./migrations/*.ts'],
      synchronize: true,
      cli: {
        migrationsDir: './migrations',
        entitiesDir: './models',
      },
    }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {
  constructor(private readonly user: User) {}
}
