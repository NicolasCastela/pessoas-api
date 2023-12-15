/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PessoasService {
  constructor(private prisma: PrismaService) {}
  create(createPessoaDto: CreatePessoaDto) {
    return this.prisma.pessoas.create({
      data: createPessoaDto,
    });
  }

  findAll() {
    return this.prisma.pessoas.findMany();
  }

  findOne(id: number) {
    return this.prisma.pessoas.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return this.prisma.pessoas.update({
      where: {
        id,
      },
      data: updatePessoaDto,
    });
  }

  remove(id: number) {
    return this.prisma.pessoas.delete({
      where: {
        id,
      },
    });
  }
}
