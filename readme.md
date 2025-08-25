# LeakOSINT Lookup Tool

Web interface untuk LeakOSINT API - OSINT Search Tool untuk pencarian informasi berdasarkan kata kunci, email, atau nama.

## Features

- Pencarian berdasarkan kata kunci, email, atau nama
- Dukungan bahasa Russia (ru) dan English (en)
- Atur jumlah hasil pencarian
- Interface responsive
- Copy hasil dalam format JSON
- Proxy API untuk keamanan token

## Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/nofalhaidar5/leakosint
   cd leakosint
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Dapatkan API Token**
   
   Ambil token API dari Telegram bot: https://T.me/CekNikEktp_Idbot

4. **Setup API Token**
   
   Edit file `index.html` pada baris 247:
   ```javascript
   token: "TOKEN_API_LEAKOSINT" // Ganti dengan token dari telegram bot
   ```

5. **Setup struktur folder**
   ```
   project-root/
   ├── server.js
   ├── public/
   │   └── index.html
   └── package.json
   ```
   
   Pindahkan `index.html` ke folder `public/`.

6. **Start server**
   ```bash
   npm start
   ```

7. **Akses aplikasi**
   
   Buka: `http://localhost:3000`

## Package.json

```json
{
  "name": "leakosint",
  "version": "1.0.0",
  "description": "Web interface for LeakOSINT API",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "node-fetch": "^3.3.2",
    "body-parser": "^1.20.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

## Technology Stack

- **Frontend**: HTML5, Tailwind CSS, JavaScript
- **Backend**: Node.js, Express.js
- **API**: LeakOSINT API via proxy

## Usage

1. Masukkan query (email, nama, atau kata kunci)
2. Pilih bahasa (opsional)
3. Set limit hasil (opsional)  
4. Klik "Cari Sekarang"
5. Copy hasil jika diperlukan

### Contoh Query
- Email: `example@gmail.com`
- Nama: `John Doe`
- Kata kunci: `tesla`

## API Token

Token API harus diambil dari Telegram bot: **https://T.me/CekNikEktp_Idbot**

Setelah mendapat token, ganti di file `index.html`:
```javascript
const data = { 
  request: request,
  token: "TOKEN_API_LEAKOSINT" // Token dari telegram bot
};
```
