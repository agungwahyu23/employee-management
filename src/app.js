const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.json({ info: 'Ini adalah API dengan node js, express dan postgre' })
})

app.use('/api/', employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));