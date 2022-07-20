import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { EngineerModule } from './engineer/engineer.module';
import { ProjectManagerModule } from './project-manager/project-manager.module';
import { TicketModule } from './ticket/ticket.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ClientModule,
    EngineerModule,
    ProjectManagerModule,
    TicketModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
