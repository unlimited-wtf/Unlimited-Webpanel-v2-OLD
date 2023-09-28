import winston from 'winston';
import path from 'path';

const folderPath = './logs';
const relativeFolderPath = path.relative(process.cwd(), folderPath);

const transports = [
    new winston.transports.File({
        filename: `${relativeFolderPath}/error.log`,
        level: 'error'
    }),
    new winston.transports.File({
        filename: `${relativeFolderPath}/info.log`
    }),
    new winston.transports.Console({})
];

export const timestamp = () => {
    const date = new Date();
    return (
        date.getFullYear() +
        '/' +
        ('0' + (date.getMonth() + 1)).slice(-2) +
        '/' +
        ('0' + date.getDate()).slice(-2) +
        ' ' +
        ('0' + date.getHours()).slice(-2) +
        ':' +
        ('0' + date.getMinutes()).slice(-2) +
        ':' +
        ('0' + date.getSeconds()).slice(-2)
    );
};

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.label({
            label: `Unlimited`
        }),
        winston.format.timestamp({
            format: timestamp
        }),
        winston.format.printf((info) => `[${info.level}][${info.label}][${[info.timestamp]}]: ${info.message}`)
    ),
    transports: transports
});

export function logServerError(err: any, message: string) {
    logger.log('error', message, err);
}

export function logServerWarn(message: string) {
    logger.log('warn', message);
}

export function logServerInfo(message: string) {
    logger.log('info', message);
}
