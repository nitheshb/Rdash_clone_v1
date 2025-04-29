import { PrismaClient } from '@prisma/client';

declare global {
    interface Global {
        prisma: PrismaClient | undefined;
    }
}

declare const global: Global;

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    global.prisma = db;
}
