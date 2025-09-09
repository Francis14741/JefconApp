const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");


router.get("/preventing_stormwater", async (req, res) => {
  const blog = await Blog.findOne({ slug: "preventing_stormwater" });
  res.render("blogs/preventing_stormwater", { blog });
});

router.get("/understan_geotechnical", async (req, res) => {
  const blog = await Blog.findOne({ slug: "understan_geotechnical" });
  res.render("blogs/understan_geotechnical", { blog });
});

router.get("/best_pract_stormwater", async (req, res) => {
  const blog = await Blog.findOne({ slug: "best_pract_stormwater" });
  res.render("blogs/best_pract_stormwater", { blog });
});

router.get("/rel_btw_landUseChange", async (req, res) => {
  const blog = await Blog.findOne({ slug: "rel_btw_landUseChange" });
  res.render("blogs/rel_btw_landUseChange", { blog });
});

router.get("/impact_land_use", async (req, res) => {
  const blog = await Blog.findOne({ slug: "impact_land_use" });
  res.render("blogs/impact_land_use", { blog });
});

router.get("/navigat_risk_flooding", async (req, res) => {
  const blog = await Blog.findOne({ slug: "navigat_risk_flooding" });
  res.render("blogs/navigat_risk_flooding", { blog });
});

router.get("/imp_commu_engagement", async (req, res) => {
  const blog = await Blog.findOne({ slug: "imp_commu_engagement" });
  res.render("blogs/imp_commu_engagement", { blog });
});

router.get("/eightfacts_about_storm", async (req, res) => {
  const blog = await Blog.findOne({ slug: "eightfacts_about_storm" });
  res.render("blogs/eightfacts_about_storm", { blog });
});

router.get("/seven_ways_handle_flood", async (req, res) => {
  const blog = await Blog.findOne({ slug: "seven_ways_handle_flood" });
  res.render("blogs/seven_ways_handle_flood", { blog });
});

router.get("/seven_things_toKnow", async (req, res) => {
  const blog = await Blog.findOne({ slug: "seven_things_toKnow" });
  res.render("blogs/seven_things_toKnow", { blog });
});

router.get("/merits_recomend_options", async (req, res) => {
  const blog = await Blog.findOne({ slug: "merits_recomend_options" });
  res.render("blogs/merits_recomend_options", { blog });
});

router.get("/channel_select_stormwater", async (req, res) => {
  const blog = await Blog.findOne({ slug: "channel_select_stormwater" });
  res.render("blogs/channel_select_stormwater", { blog });
});

router.get("/consideratns_stormwater", async (req, res) => {
  const blog = await Blog.findOne({ slug: "consideratns_stormwater" });
  res.render("blogs/consideratns_stormwater", { blog });
});

router.get("/engSurvey_forEffectEfficient", async (req, res) => {
  const blog = await Blog.findOne({ slug: "engSurvey_forEffectEfficient" });
  res.render("blogs/engSurvey_forEffectEfficient", { blog });
});

router.get("/desc_coreHydrolog_Term", async (req, res) => {
  const blog = await Blog.findOne({ slug: "desc_coreHydrolog_Term" });
  res.render("blogs/desc_coreHydrolog_Term", { blog });
});

router.get("/hydrological_basins", async (req, res) => {
  const blog = await Blog.findOne({ slug: "hydrological_basins" });
  res.render("blogs/hydrological_basins", { blog });
});

router.get("/global_warming", async (req, res) => {
  const blog = await Blog.findOne({ slug: "global_warming" });
  res.render("blogs/global_warming", { blog });
});

router.get("/rec_actions_youngEngr1", async (req, res) => {
  const blog = await Blog.findOne({ slug: "rec_actions_youngEngr1" });
  res.render("blogs/rec_actions_youngEngr1", { blog });
});

router.get("/rec_actions_youngEng2", async (req, res) => {
  const blog = await Blog.findOne({ slug: "rec_actions_youngEng2" });
  res.render("blogs/rec_actions_youngEng2", { blog });
});

router.get("/oilHubs_delta", async (req, res) => {
  const blog = await Blog.findOne({ slug: "oilHubs_delta" });
  res.render("blogs/oilHubs_delta", { blog });
});

router.get("/improvProf_efficiency", async (req, res) => {
  const blog = await Blog.findOne({ slug: "improvProf_efficiency" });
  res.render("blogs/improvProf_efficiency", { blog });
});

router.get("/youngEgineer_importance", async (req, res) => {
  const blog = await Blog.findOne({ slug: "youngEgineer_importance" });
  res.render("blogs/youngEgineer_importance", { blog });
});

router.get("/challenges_youngEngr", async (req, res) => {
  const blog = await Blog.findOne({ slug: "challenges_youngEngr" });
  res.render("blogs/challenges_youngEngr", { blog });
});

router.get("/workin_withStan_engCode", async (req, res) => {
  const blog = await Blog.findOne({ slug: "workin_withStan_engCode" });
  res.render("blogs/workin_withStan_engCode", { blog });
});

router.get("/tributaries_RivrNiger", async (req, res) => {
  const blog = await Blog.findOne({ slug: "tributaries_RivrNiger" });
  res.render("blogs/tributaries_RivrNiger", { blog });
});

router.get("/studyDesign_Stormwater", async (req, res) => {
  const blog = await Blog.findOne({ slug: "studyDesign_Stormwater" });
  res.render("blogs/studyDesign_Stormwater", { blog });
});

router.get("/findings_observation1", async (req, res) => {
  const { findings_observation1 } = req.params;
  res.render("findings_observation1", { findings_observation1 });
});

router.get("/findings_and_observation2", async (req, res) => {
  const blog = await Blog.findOne({ slug: "findings_and_observation2" });
  res.render("blogs/findings_and_observation2", { blog });
});

router.get("/engDesign_hydrolog_Analysis", async (req, res) => {
  const blog = await Blog.findOne({ slug: "engDesign_hydrolog_Analysis" });
  res.render("blogs/engDesign_hydrolog_Analysis", { blog });
});

router.get("/hydraulic_design", async (req, res) => {
  const blog = await Blog.findOne({ slug: "hydraulic_design" });
  res.render("blogs/hydraulic_design", { blog });
});

router.get("/recommend_stormWater", async (req, res) => {
  const blog = await Blog.findOne({ slug: "recommend_stormWater" });
  res.render("blogs/recommend_stormWater", { blog });
});

router.get("/accessin_qual_engPract", async (req, res) => {
  const blog = await Blog.findOne({ slug: "accessin_qual_engPract" });
  res.render("blogs/accessin_qual_engPract", { blog });
});

router.get("/risingTides_sinkinCities", async (req, res) => {
  const blog = await Blog.findOne({ slug: "risingTides_sinkinCities" });
  res.render("blogs/risingTides_sinkinCities", { blog });
});

router.get("/chal_posed_by_trad_storm", async (req, res) => {
  const blog = await Blog.findOne({ slug: "chal_posed_by_trad_storm" });
  res.render("blogs/chal_posed_by_trad_storm", { blog });
});

router.get("/urgent_need_4_sustainable", async (req, res) => {
  const blog = await Blog.findOne({ slug: "urgent_need_4_sustainable" });
  res.render("blogs/urgent_need_4_sustainable", { blog });
});

router.get("/ensuringStormwater", async (req, res) => {
  const blog = await Blog.findOne({ slug: "ensuringStormwater" });
  res.render("blogs/ensuringStormwater", { blog });
});

router.get("/exampl_Sustainable", async (req, res) => {
  const blog = await Blog.findOne({ slug: "exampl_Sustainable" });
  res.render("blogs/exampl_Sustainable", { blog });
});

router.get("/address_nig_wat_Pollution", async (req, res) => {
  const blog = await Blog.findOne({ slug: "address_nig_wat_Pollution" });
  res.render("blogs/address_nig_wat_Pollution", { blog });
});

router.get("/eval_succ_effec_exisDrain", async (req, res) => {
  const blog = await Blog.findOne({ slug: "eval_succ_effec_exisDrain" });
  res.render("blogs/eval_succ_effec_exisDrain", { blog });
});

router.get("/chal_stormwat_criticalAnal", async (req, res) => {
  const blog = await Blog.findOne({ slug: "chal_stormwat_criticalAnal" });
  res.render("blogs/chal_stormwat_criticalAnal", { blog });
});

router.get("/sample_post", async (req, res) => {
  const blog = await Blog.findOne({ slug: "sample_post" });
  res.render("blogs/sample_post", { blog });
});

// All blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.render('blogs/index', { blogs, title: 'All Blogs', layout: 'partials/layout' });
});


router.get("/blogs/:slug", async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug }).populate("tags categories archive");
  if (!blog) return res.status(404).render("404");
  res.render(`blogs/${blog.slug}`, { blog });
});

// List all blogs
router.get("/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
      .populate("archives")
      .populate("categories")
      .populate("tags")
      .lean();
    if (!blog) return res.status(404).send("Blog not found");

    res.render("blogs/show", { blog });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error loading blog");
  }
});

module.exports = router;
