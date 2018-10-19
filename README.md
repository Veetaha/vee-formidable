# vee-formidable
[![npm version](https://badge.fury.io/js/vee-formidable.svg)](https://badge.fury.io/js/vee-formidable)


This is a nice ExpressJS middleware for 'formidable' library. 

Written in TypeScript, declaration files are available by default.

### API

This package exports a single object with a single field `makeMiddleware` containing a function described bellow.

#### makeMiddleware(options?: FormidableOptions)
Accepts one **optional** argument of type `FormidableOptions`, which is `Object.assign`ed to the original `formidable.IncommingForm`. See [formidable API](https://www.npmjs.com/package/formidable) for an up-to-date reference.

  After applying this middleware, you can utilize `req.fields` as an object, with each key being the name of the form input and its corresponding value contains input's data, which is of type `string | string[]`. 
  
  
  All files sent by the form are stored in a directory specified as `uploadDir` option, which is `os.tmpdir()` by default. 
  Information about forwarded files is available as `req.files`. 
  It is an object with keys of form input
   names and values of `formidable.File | formidable.File[]`  type (see
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

This middleware is a problem fixed and rewritten to TypeScript [express-formidable]('https://www.npmjs.com/package/express-formidable') npm package.

Type declaration file is based on ['@types/express-formidable'](https://www.npmjs.com/package/@types/express-formidable) npm package.