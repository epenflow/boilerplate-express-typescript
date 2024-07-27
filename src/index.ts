import express from 'express';
import dotenv from 'dotenv';
import route from './routes/api';
import bodyParser from 'body-parser';
dotenv.config();
/** express */
const app = express();

/** port */
const port = process.env.PORT;

/** express */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', route.export());

/** express listener */
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
