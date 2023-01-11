import express from 'express';
import { config } from 'dotenv';

const app = express();
config();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/', (req, res) => res.send('Olá'));
