# vee-formidable
[![npm version](https://badge.fury.io/js/vee-formidable.svg)](https://badge.fury.io/js/vee-formidable)


It is a nice ExpressJS middleware for 'formidable' library. 

Written in TypeScript, declaration files are available by default.

### API

This package exports a single object with a single field `makeMiddleware` containing a function described bellow.

#### makeMiddleware(options?: FormidableOptions)
Accepts one **optional** argument of type `FormiddableOptions`, which is `Object.assign`ed to the original `formidable.IncommingForm`. See [formidable API](https://www.npmjs.com/package/formidable) for an up-to-date reference.

*TypeScript example*
~~~typescript
import * as express from 'express';
import * as formParser from 'vee-formidable';

const app = express();

app.use(formParser.makeMiddleware({
    uploadDir: 'data/form-files'
}));

app.use('/', (req, res, next) => {
   res.send('Index route'); 
});
~~~

*JavaScript example*

~~~javascript
const express = require('express');
const formParser = require('vee-formidable');

const app = express();

app.use(formParser.makeMiddleware({ 
    uploadDir: 'data/form-files'
}));

app.use('/', (req, res, next) => {
   res.send('Index route'); 
});
~~~

**Credits**

This middleware is a problem fixed and rewritten to TypeScript [express-formidable]('https://www.npmjs.com/package/express-formidable') npm package.

Type declaration file is based on ['@types/express-formidable'](https://www.npmjs.com/package/@types/express-formidable) npm package.