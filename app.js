const express = require('express');
const helmet = require("helmet");
const mongoose = require('mongoose');
const path = require('path');
const rateLimit = require('express-rate-limit');
const xss = require("xss");
const dotenv = require('dotenv');
const cors = require('cors');

const ejsMate = require('ejs-mate');
const bodyParser = require("body-parser");
const compression = require('compression');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');

dotenv.config();
const app = express();

// ---------- MongoDB Connection ----------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ---------- EJS Setup ----------
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parser + compression + logging
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(morgan("dev")); // ✅ fixed

// XSS sanitization
app.use((req, res, next) => {
  if (req.query) {
    for (let key in req.query) {
      req.query[key] = xss(req.query[key]);
    }
  }
  if (req.body) {
    for (let key in req.body) {
      req.body[key] = xss(req.body[key]);
    }
  }
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Rate Limiting ----------
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests from this IP, try again later.'
});
app.use(limiter);

// ---------- Security ----------
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);
// ❌ removed deprecated helmet.xssFilter()

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "sameorigin" }));

// ---------- Session (if needed) ----------
app.use(session({
  secret: process.env.SESSION_SECRET || 'supersecret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

// ---------- Routes ----------
const pagesRoutes = require('./routes/pages');
const blogsRoutes = require('./routes/blogs');
const archivesRoutes = require('./routes/archives');
const categoriesRoutes = require('./routes/categories');
const faqsRoutes = require('./routes/faqs');
const faqPages = require('./routes/faqPages');
const tagsRoutes = require('./routes/tags');
const servicesRoutes = require('./routes/services');
const projectsRoutes = require('./routes/projects');
const commitmentRoutes = require('./routes/commitment');
const aboutRoutes = require('./routes/about');
const searchRoutes = require('./routes/search');
const adminRoutes = require('./routes/admin');

app.use('/', pagesRoutes);
app.use('/blogs', blogsRoutes);
app.use('/archives', archivesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/tags', tagsRoutes);
app.use('/faqs', faqsRoutes);
app.use('/faq-pages', faqPages);
app.use('/services', servicesRoutes);
app.use('/projects', projectsRoutes);
app.use('/commitment', commitmentRoutes);
app.use('/about', aboutRoutes);
app.use('/search', searchRoutes);
app.use('/admin', adminRoutes);

// ---------- Error Handling ----------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error/500', { error: err });
});

app.use((req, res) => {
  res.status(404).render('error/404', { url: req.originalUrl });
});

// ---------- Start Server ----------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

module.exports = app;