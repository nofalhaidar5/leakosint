import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// API proxy ke LeakOSINT
app.post('/api/leakosint', async (req, res) => {
  try {
    const data = req.body;

    const response = await fetch('https://leakosintapi.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Gagal memproses request', detail: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
