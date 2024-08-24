const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Routing
app.use('/api/auth', require('./routes/auth'));
app.use('/api/owners', require('./routes/owners'));
app.use('/api/landholdings', require('./routes/landHoldings'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
