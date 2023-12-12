import { Global, Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';

@Global()
@Module({
  controllers: [PessoasController],
  providers: [PessoasService],
})
export class PessoasModule {}
