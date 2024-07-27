import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
/** express */
const app = express();

/** port */
const port = process.env.PORT;
const localhost = `http://localhost:`;
/** express */

app.get('/', (req, res) => {
	res.send('Welcome');
});

app.listen(port, () => {
	console.log(`${localhost}${port}`);
});
