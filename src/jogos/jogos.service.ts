
import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class JogosService {

    async create(data: any) {
        return await prisma.jogo.create({ data });
    }

    async findAll() {

        return await prisma.jogo.findMany();
    }

    async findOne(id: number) {

        return await prisma.jogo.findUnique({ where: { id } });
    }

    async update(id: number, data: any) {

        return await prisma.jogo.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {

        return await prisma.jogo.delete({ where: { id } });
    }
}