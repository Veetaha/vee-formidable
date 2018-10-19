# vee-formidable
[![npm version](https://badge.fury.io/js/vee-formidable.svg)](https://badge.fury.io/js/vee-formidable)


This is a simple ExpressJS middleware which wraps ['formidable'](https://www.npmjs.com/package/formidable) `IncommingForm`. 

It is written TypeScript, declaration file is available by default.

### API

This package exports a single object with a single field `makeMiddleware` containing a function described bellow.

#### makeMiddleware(options?: FormidableOptions)
Accepts one **optional** argument of type `FormidableOptions`, which is `Object.assign`ed to the wrapped `formidable.IncommingForm`. See [formidable API](https://www.npmjs.com/package/formidable) for an up-to-date reference about available options.

  After applying this middleware, you can utilize `req.fields` as an object, with each key being the name of the form input and its corresponding value containing input's data, which is of type `string | string[]`. 
  
  
  All files sent by the form are stored in a directory specified as `uploadDir` option, which is `os.tmpdir()` by default. 
  Information about forwarded files is available at `req.files`. 
  It is an object mapping input's names to `formidable.File | formidable.File[]` (see
    ['@types/formidable'](https://www.npmjs.com/package/@types/express-formidable)  declaration file for precise info). 
  
  

*TypeScript example*
~~~typescript
import * as express from 'express';
import * as formParser from 'vee-formidable';

const app = express();

app.use(formParser.makeMiddleware({
    uploadDir: 'data/form-files'
}));

app.post('/entity/new', (req, res, next) => {
    console.log(
        `Form fields: ${req.fields}`, 
        `Form files: ${req.files}`
    );
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

app.post('/entity/new', (req, res, next) => {
    console.log(
        `Form fields: ${req.fields}`, 
        `Form files: ${req.files}`
    );
});
~~~

**Credits**

This middleware is a problem fixed and rewritten to TypeScript ['express-formidable']('https://www.npmjs.com/package/express-formidable') npm package.

Type declaration file is based on ['@types/express-formidable'](https://www.npmjs.com/package/@types/express-formidable) npm package.