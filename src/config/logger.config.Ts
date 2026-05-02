import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { asyncLocalStorage } from '../helper/request.helper';

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json(),
        winston.format.printf(({ level, timestamp, message, ...data }) => {
            const output = {
                level,
                timestamp,
                message,
                data,
                requestId: asyncLocalStorage.getStore()?.requestId||"This fucntion is not in asyncLocalStorage context",
            }
            return JSON.stringify(output)
        })
    ),
    transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
            filename: 'app.log',
            dirname: 'logs',
            maxSize: '20m',
            maxFiles: '14d'
        })
    ]

});