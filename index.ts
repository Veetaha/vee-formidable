import * as express from 'express';
import * as formidable   from 'formidable';

// Extend the express request object with attached formidable files and fields
declare global {
    namespace Express {
        interface Request {
            fields?: formidable.Fields;
            files?: formidable.Files;
        }
    }
}

interface FormidableOptions {
    encoding?: string;
    uploadDir?: string;
    keepExtensions?: boolean;
    type?: "multipart" | "urlencoded";
    maxFileSize?: number;
    maxFieldsSize?: number;
    maxFields?: number;
    hash?: boolean | "sha1" | "md5";
    multiples?: boolean;
}

export function makeMiddleware(options?: FormidableOptions): express.RequestHandler {
    return (req, _res, next) => {
        Object.assign(new formidable.IncomingForm(), options)
            .parse(req, (err, fields, files) => {
            if (err) {
                next(err);
                return;
            }

            Object.assign(req, { fields, files });
            next();
        });
    };
}

