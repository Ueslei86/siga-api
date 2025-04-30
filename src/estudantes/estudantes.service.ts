
import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EstudantesService {

    async create(data: any) {
        return await prisma.estudante.create({ data });
    }

    async findAll() {

        return await prisma.estudante.findMany();
    }

    async findOne(id: number) {

        return await prisma.estudante.findUnique({ where: { id } });
    }

    async update(id: number, data: any) {

        return await prisma.estudante.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {

        return await prisma.estudante.delete({ where: { id } });
    }
}