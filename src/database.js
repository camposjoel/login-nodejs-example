require('dotenv').config();
const mongoose = require('mongoose');
const logger = require('pino')();

mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
    .then(db => logger.info('Conectado a MongoDB'))
    .catch(err => logger.error('DB connection error', err));