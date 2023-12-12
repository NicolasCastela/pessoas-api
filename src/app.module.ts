import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PessoasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
