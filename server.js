require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // ✅ Using your own db.js

const dataRoutes = require('./routes/dataRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Use your routes
app.use('/api', dataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
