import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { PrismaModule } from './prisma/prisma.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [PessoasModule, PrismaModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
