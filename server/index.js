import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb://ananya25:Monster%40123@ac-gfcg71u-shard-00-00.zjl65nl.mongodb.net:27017,ac-gfcg71u-shard-00-01.zjl65nl.mongodb.net:27017,ac-gfcg71u-shard-00-02.zjl65nl.mongodb.net:27017/?ssl=true&replicaSet=atlas-4wrnhj-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
