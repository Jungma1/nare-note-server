import './env';
import './database'
import app from './app';

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Start Server Port: ${PORT}`));
