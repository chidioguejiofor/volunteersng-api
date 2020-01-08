import 'dotenv/config';
import app from './app';
const PORT = process.env.PORT || 8787;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



