const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const path = require("path");
// const rateLimit = require("express-rate-limit"); // ❌ disabled
const xss = require("xss");
const cors = require("cors");
const ejsMate = require("ejs-mate");
const bodyParser = require("body-parser");
const compression = require("compression");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();

// ---------- Database Connection ----------
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ---------- EJS Setup ----------
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---------- Middleware ----------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression()); // Compress responses
app.use(morgan("dev"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// ---------- Input Sanitization ----------
app.use((req, res, next) => {
  if (req.query) {
    for (let key in req.query) {
      if (req.query[key]) req.query[key] = xss(req.query[key]);
    }
  }
  if (req.body) {
    for (let key in req.body) {
      if (req.body[key]) req.body[key] = xss(req.body[key]);
    }
  }
  next();
});

// ---------- Disable Rate Limiting (Render fix) ----------
// Commented out to prevent "Too many requests" on Render
/*
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10000, // allow 10,000 requests per minute
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);
*/

// Trust Render’s proxy (important for correct IP handling)
app.set("trust proxy", 1);

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
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "sameorigin" }));

// ---------- Session ----------
app.use(
  session({
    secret: process.env.SESSION_SECRET || "fallbacksecret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      ttl: 14 * 24 * 60 * 60, // 14 days
    }),
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  })
);

// ---------- Routes ----------
const pagesRoutes = require("./routes/pages");
const blogsRoutes = require("./routes/blogs");
const archivesRoutes = require("./routes/archives");
const categoriesRoutes = require("./routes/categories");
const faqRoutes = require("./routes/faqs");
const tagsRoutes = require("./routes/tags");
const servicesRoutes = require("./routes/services");
const projectsRoutes = require("./routes/projects");
const commitmentRoutes = require("./routes/commitment");
const aboutRoutes = require("./routes/about");
const searchRoutes = require("./routes/search");
const adminRoutes = require("./routes/admin");

app.use("/", pagesRoutes);
app.use("/blogs", blogsRoutes);
app.use("/archives", archivesRoutes);
app.use("/categories", categoriesRoutes);
app.use("/tags", tagsRoutes);
app.use("/faqs", faqRoutes);
app.use("/services", servicesRoutes);
app.use("/projects", projectsRoutes);
app.use("/commitment", commitmentRoutes);
app.use("/about", aboutRoutes);
app.use("/search", searchRoutes);
app.use("/admin", adminRoutes);

// ---------- Error Handling ----------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("pages/500", { error: err });
});

app.use((req, res) => {
  res
    .status(404)
    .render("error/404", { url: req.originalUrl, layout: "partials/layout" });
});

// ---------- Start Server ----------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

module.exports = app;