import type { PrismaClient } from '@prisma/client';
import type { SocketConfig } from '@whiskeysockets/baileys';
export declare function setPrisma(prismaClient: PrismaClient): void;
export declare function setLogger(pinoLogger?: SocketConfig['logger']): void;
export declare function usePrisma(): PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined, import("@prisma/client/runtime").DefaultArgs>;
export declare function useLogger(): import("pino").Logger<import("pino").LoggerOptions>;
