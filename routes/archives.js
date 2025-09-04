const express = require('express');
const router = express.Router();
const Archive = require('../models/archive');
const Blog = require('../models/blog');

router.get("/", (req, res) => {
  const archives = [{ slug: "deprof_archive", title: "By, DEPROF" }];
  res.render("jefcon_associates", { archives });
});

// ✅ SPECIFIC ROUTES FIRST
router.get("/deprof_archive", (req, res) => {
  res.render("archives/deprof_archive");
});

router.get("/deprof_archive2", (req, res) => {
  res.render("archives/deprof_archive2");
});

router.get("/deprof_archive3", (req, res) => {
  res.render("archives/deprof_archive3");
});

router.get("/deprof_archive4", (req, res) => {
  res.render("archives/deprof_archive4");
});

router.get("/archives/Jefcon_more", (req, res) => {
  res.render("archives/Jefcon_more");
});

router.get("/archives/abdul_yahaya_Archive", (req, res) => {
  res.render("archives/abdul_yahaya_Archive");
});

router.get("/archives/contact_notfound", (req, res) => {
  res.render("archives/contact_notfound");
});

router.get("/archives/website", (req, res) => {
  res.render("archives/website");
});

router.get("/archives/website2", (req, res) => {
  res.render("archives/website2");
});

router.get("/archives/website3", (req, res) => {
  res.render("archives/website3");
});

router.get("/archives/website4", (req, res) => {
  res.render("archives/website4");
});

router.get("/archives/website5", (req, res) => {
  res.render("archives/website5");
});

router.get("/archives/archives_2025_june", (req, res) => {
  res.render("archives/archives_2025_june");
});

router.get("/archives/archives_2025_april", (req, res) => {
  res.render("archives/archives_2025_april");
});

router.get("/archives/archives_2024_july", (req, res) => {
  res.render("archives/archives_2024_july");
});

router.get("/archives/archives_2024_june", (req, res) => {
  res.render("archives/archives_2024_june");
});

router.get("/archives/archives_2024_may", (req, res) => {
  res.render("archives/archives_2024_may");
});

router.get("/archives/archives_2024_april", (req, res) => {
  res.render("archives/archives_2024_april");
});

router.get("/archives/archives_2024_march", (req, res) => {
  res.render("archives/archives_2024_march");
});

router.get("/archives/archives_2024_feb", (req, res) => {
  res.render("archives/archives_2024_feb");
});

router.get("/archives/archives_2024_jan", (req, res) => {
  res.render("archives/archives_2024_jan");
});

router.get("/archives/archives_2023_dec", (req, res) => {
  res.render("archives/archives_2023_dec");
});

router.get("/archives/archives_2023_nov", (req, res) => {
  res.render("archives/archives_2023_nov");
});

router.get("/archives/archives_2023_oct", (req, res) => {
  res.render("archives/archives_2023_oct");
});

router.get("/archives/archives_2023_march", (req, res) => {
  res.render("archives/archives_2023_march");
});

router.get("/archives/archives_2023_feb", (req, res) => {
  res.render("archives/archives_2023_feb");
});

router.get("/archives/archives_2023_jan", (req, res) => {
  res.render("archives/archives_2023_jan");
});

router.get("/archives/archives_2022_dec", (req, res) => {
  res.render("archives/archives_2022_dec");
});

router.get("/archives/archives_2022_nov", (req, res) => {
  res.render("archives/archives_2022_nov");
});

router.get("/archives/archives_2022_oct", (req, res) => {
  res.render("archives/archives_2022_oct");
});

router.get("/archives/archives_2022_sept", (req, res) => {
  res.render("archives/archives_2022_sept");
});

router.get("/archives/archives_2022_august", (req, res) => {
  res.render("archives/archives_2022_august");
});

router.get("/archives/archives_2022_july", (req, res) => {
  res.render("archives/archives_2022_july");
});

router.get("/archives/archives_2022_may", (req, res) => {
  res.render("archives/archives_2022_may");
});

router.get("/archives/archives_2022_april", (req, res) => {
  res.render("archives/archives_2022_april");
});

router.get("/archives/archives_2022_march", (req, res) => {
  res.render("archives/archives_2022_march");
});

router.get("/archives/archives_2022_feb", (req, res) => {
  res.render("archives/archives_2022_feb");
});

router.get("/archives/archives_2022_jan", (req, res) => {
  res.render("archives/archives_2022_jan");
});

router.get("/archives/archives_2021_dec", (req, res) => {
  res.render("archives/archives_2021_dec");
});

router.get("/archives/archives_2021_nov", (req, res) => {
  res.render("archives/archives_2021_nov");
});

router.get("/archives/archives_2021_august", (req, res) => {
  res.render("archives/archives_2021_august");
});

router.get("/archives/archives_2021_june", (req, res) => {
  res.render("archives/archives_2021_june");
});

router.get("/archives/archives_2021_may", (req, res) => {
  res.render("archives/archives_2021_may");
});

router.get("/archives/archives_2021_april", (req, res) => {
  res.render("archives/archives_2021_april");
});

router.get("/archives/archives_2021_jan", (req, res) => {
  res.render("archives/archives_2021_jan");
});

router.get("/archives/archives_2020_nov", (req, res) => {
  res.render("archives/archives_2020_nov");
});

router.get("/archives/archives_2020_oct", (req, res) => {
  res.render("archives/archives_2020_oct");
});

router.get("/archives/archives_2020_sept", (req, res) => {
  res.render("archives/archives_2020_sept");
});

router.get("/archives/archives_2020_august", (req, res) => {
  res.render("archives/archives_2020_august");
});

router.get("/archives/archives_2020_july", (req, res) => {
  res.render("archives/archives_2020_july");
});

router.get("/archives/archives_2020_may", (req, res) => {
  res.render("archives/archives_2020_may");
});

router.get("/:filename", async (req, res) => {
  const file = req.params.filename;
  res.render(`archives/${file}`); // ✅ correct
});

// All archives
router.get('/', async (req, res) => {
  const archives = await Archive.find().sort({ createdAt: -1 });
  res.render('archives/index', { archives, title: 'All Archives', layout: 'partials/layout' });
});

router.get('/:slug', async (req, res) => {
  const archive = await Archive.findOne({ slug: req.params.slug });
  if (!archive) return res.status(404).render('pages/404', { url: req.originalUrl, layout: 'partials/layout' });
  res.render('archives/show', { archive });

   const blogs = await Blog.find({ archives: archive._id });
  res.render('archives/show', { archive, blogs, title: `Archive: ${archive.title}`, layout: 'partials/layout' });
});


// Single archive by slug
// router.get('/:slug', async (req, res) => {
//   const archive = await Archive.findOne({ slug: req.params.slug });
//   if (!archive) return res.status(404).render('error/404', { url: req.originalUrl, layout: 'partials/layout' });

//   const blogs = await Blog.find({ archives: archive._id });
//   res.render('archives/show', { archive, blogs, title: `Archive: ${archive.title}`, layout: 'partials/layout' });
// });

module.exports = router;