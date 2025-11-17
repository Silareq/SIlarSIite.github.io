// server/server.js
const express = require('express');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const helmet = require('helmet');
const sanitize = require('sanitize-filename');

const UPLOADS_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const app = express();
app.use(helmet());
app.use(cors({
  origin: true, // adjust in production to specific origin(s)
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer storage with sanitized filenames
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const base = path.parse(sanitize(file.originalname)).name || 'file';
    const ext = path.extname(file.originalname) || '.bin';
    cb(null, `${timestamp}-${base}${ext}`);
  }
});

// Accept only audio mime-types and common extensions
const audioMime = /^audio\/.+$/i;
const allowedExt = ['.mp3', '.wav', '.flac', '.m4a', '.aac', '.ogg', '.wav', '.aiff', '.aif'];

function fileFilter(req, file, cb) {
  const ext = path.extname(file.originalname).toLowerCase();
  if (audioMime.test(file.mimetype) && allowedExt.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only audio files are allowed (mp3, wav, flac, m4a, ogg, etc.)'));
  }
}

// Limits: max 3 files, max 50MB per file
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 50 * 1024 * 1024, files: 3 }
}).array('demos', 3);

// Endpoint
app.post('/upload-demo', (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // Multer error (e.g. file too large)
      return res.status(400).json({ ok:false, error: err.message });
    } else if (err) {
      return res.status(400).json({ ok:false, error: err.message });
    }

    // Access metadata fields
    const name = req.body.name || '';
    const email = req.body.email || '';
    const title = req.body.title || '';

    // Save a short metadata JSON next to each upload (or one file)
    const meta = {
      name, email, title, receivedAt: new Date().toISOString(),
      files: (req.files || []).map(f => ({ filename: f.filename, originalname: f.originalname, size: f.size }))
    };

    // write metadata file
    const metaPath = path.join(UPLOADS_DIR, `${Date.now()}-meta.json`);
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');

    return res.json({ ok: true, message: 'Files uploaded', meta });
  });
});

// Optionally serve uploaded files (careful in prod)
app.use('/uploads', express.static(UPLOADS_DIR, { index: false }));

// Simple health
app.get('/ping', (req,res) => res.json({ ok:true, ts: Date.now() }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Upload server running on http://localhost:${PORT}`));
