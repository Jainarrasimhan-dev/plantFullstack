import express from 'express';
import Connection from './database/db.js';
import userRouter from './routes/userRouter.js';
import bodyParser from 'body-parser';
import cors from 'cors'


const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())



app.use('/api/user', userRouter);



const port = 5001;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

Connection()