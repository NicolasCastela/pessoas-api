import { Global, Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';


@Global()
@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
