import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { JobsModule } from './jobs/jobs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Job } from './jobs/entities/job.entity';

@Module({
  imports: [UserModule, JobsModule],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'carlossecato',
      password: '1234',
      database: 'carlosdb',
      entities: [User,Job],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
