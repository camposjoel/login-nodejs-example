require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
    .then(db => console.log('Conectado a MongoDB'))
    .catch(err => console.error(err));