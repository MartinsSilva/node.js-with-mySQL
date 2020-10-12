const express = require('express');
const routers = require('./routes');
require('dotenv').config();

const app = express();
app.use(routers);

app.listen(process.env.APP_PORT);