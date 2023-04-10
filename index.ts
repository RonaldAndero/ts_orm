import mongoose from "mongoose";
import express, { Express, Request, Response } from "express";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";
const app: Express = express();
const database = mongoose.connection;
const bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://ronaldandero:oR2k0mlnerzHkjsJ@tsorm.swtx3xo.mongodb.net/test");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
database.on('error', (error) => {
    console.log(error)
})

app.use('/', commentController);
app.use('/', articleController);
app.use('/', authorController);
database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.use('/', articleController);
app.use('/', commentController);
app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});