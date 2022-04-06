import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [UserModule, JobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
