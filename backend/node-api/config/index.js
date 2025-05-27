const express = require('express');
const cors = require('cors');
const app = express();
const queryRoutes = require('./routes/queryRoutes');
const { PORT } = require('./config/env');

app.use(cors());
app.use(express.json());

app.use('/api', queryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));