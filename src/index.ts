import express from 'express';
import dotenv from 'dotenv';
import route from './routes/api';

dotenv.config();
/** express */
const app = express();

/** port */
const port = process.env.PORT;

/** express */
app.use('/api', route.export());
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
