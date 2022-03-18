
import winston  from 'winston';
import appRoot from 'app-root-path';

const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app-info.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    fileError: {
        level: 'error',
        filename: `${appRoot}/logs/app-error.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};


const logger = winston.loggers.add('trastero', {
    level: 'info',
    //format: winston.format.json(),
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.File(options.fileError),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

if (process.env.NODE_ENV === 'test') {
    logger.transports.forEach((t) => {
        t.silent = true; 
    });
}
export const stream = {
    write: (message) => {
      logger.info(message);
    },
  };

export default logger;