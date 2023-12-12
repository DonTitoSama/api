const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/api');

app.use(express.urlencoded());
app.use(express.json());

const postRoute = require(`./routes/postRoute`);
app.use('/posts', postRoute);

const comRoute = require(`./routes/comRoute`);
app.use('/', comRoute);

const userRoute = require(`./routes/userRoute`);
app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});