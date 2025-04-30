
import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class MatriculasService {

    async create(data: any) {
        return await prisma.matricula.create({ data });
    }

    async findAll() {

        return await prisma.matricula.findMany();
    }

    async findOne(id: number) {

        return await prisma.matricula.findUnique({ where: { id } });
    }

    async update(id: number, data: any) {

        return await prisma.matricula.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {

        return await prisma.matricula.delete({ where: { id } });
    }
}