const express = require("express");
const router = express.Router();
const Tag = require('../models/tag');
const Blog = require('../models/blog');

router.get("/tag_drainagesystembestpractices", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagesystembestpractices" });
  res.render("tags/tag_drainagesystembestpractices", { tag });
});

router.get("/tag_drainagesysteminspectiontips", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagesysteminspectiontips" });
  res.render("tags/tag_drainagesysteminspectiontips", { tag })
});

router.get("/tag_drainagesystemqualitycontrol", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagesystemqualitycontrol" });
  res.render("tags/tag_drainagesystemqualitycontrol", { tag })
});

router.get("/tag_easytipsfordrainagequality", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_easytipsfordrainagequality" });
  res.render("tags/tag_easytipsfordrainagequality", { tag })
});

router.get("/tag_effectivedrainageqc", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_effectivedrainageqc" });
  res.render("tags/tag_effectivedrainageqc", { tag })
});

router.get("/tag_howtoreduceurbanwaterpollution", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_howtoreduceurbanwaterpollution" });
  res.render("tags/tag_howtoreduceurbanwaterpollution", { tag })
});

router.get("/tag_nigeriadrainagesystemmaintenance", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_nigeriadrainagesystemmaintenance" });
  res.render("tags/tag_nigeriadrainagesystemmaintenance", { tag })
});

router.get("/tag_pollutionpreventiontechnique", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_pollutionpreventiontechnique" });
  res.render("tags/tag_pollutionpreventiontechnique", { tag })
});

router.get("/tag_drainagedesign", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagedesign" });
  res.render("tags/tag_drainagedesign", { tag })
});

router.get("/tag_compaction", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_compaction" });
  res.render("tags/tag_compaction", { tag })
});

router.get("/tag_preventingstormwaterpollution", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_preventingstormwaterpollution" });
  res.render("tags/tag_preventingstormwaterpollution", { tag })
});

router.get("/tag_climatechangeadaptation", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_climatechangeadaptation" });
  res.render("tags/tag_climatechangeadaptation", { tag })
});

router.get("/tag_rainwaterrun0ff", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_rainwaterrun0ff" });
  res.render("tags/tag_rainwaterrun0ff", { tag })
});

router.get("/tag_stormwatermanagementnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatermanagementnigeria" });
  res.render("tags/tag_stormwatermanagementnigeria", { tag })
});

router.get("/tag_stormwaterpollutioncontrolnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterpollutioncontrolnigeria" });
  res.render("tags/tag_stormwaterpollutioncontrolnigeria", { tag })
});

router.get("/tag_stormwaterpollutionguide", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterpollutionguide" });
  res.render("tags/tag_stormwaterpollutionguide", { tag })
});

router.get("/tag_stormwaterpollutiontrend2025", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterpollutiontrend2025" });
  res.render("tags/tag_stormwaterpollutiontrend2025", { tag })
});

router.get("/tag_stormwaterrunoffsolutions", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterrunoffsolutions" });
  res.render("tags/tag_stormwaterrunoffsolutions", { tag })
});

router.get("/tag_stormwaterrunoffsolution", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterrunoffsolution" });
  res.render("tags/tag_stormwaterrunoffsolution", { tag })
});

router.get("/tag_urbanwatersafety", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanwatersafety" });
  res.render("tags/tag_urbanwatersafety", { tag })
});

router.get("/tag_waterpollutionprevention2025", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_waterpollutionprevention2025" });
  res.render("tags/tag_waterpollutionprevention2025", { tag })
});

router.get("/tag_watersafetytipsnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_watersafetytipsnigeria" });
  res.render("tags/tag_watersafetytipsnigeria", { tag })
});

router.get("/tag_floodwatercontrol", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodwatercontrol" });
  res.render("tags/tag_floodwatercontrol", { tag })
});

router.get("/tag_stormwater", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwater" });
  res.render("tags/tag_stormwater", { tag })
});

router.get("/tag_stormwatermanagement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatermanagement" });
  res.render("tags/tag_stormwatermanagement", { tag })
});

router.get("/tag_civilengineering", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_civilengineering" });
  res.render("tags/tag_civilengineering", { tag })
});

router.get("/tag_complexengineeringproblems", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_complexengineeringproblems" });
  res.render("tags/tag_complexengineeringproblems", { tag })
});

router.get("/tag_construction", async (req, res) => {
 const tag = await Tag.findOne({ slug: "tag_construction" });
  res.render("tags/tag_construction", { tag })
});

router.get("/tag_drainage", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainage" });
  res.render("tags/tag_drainage", { tag })
});

router.get("/tag_drainagebasin", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagebasin" });
  res.render("tags/tag_drainagebasin", { tag })
});

router.get("/tag_drainagebresilien", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagebresilien" });
  res.render("tags/tag_drainagebresilien", { tag })
});

router.get("/tag_drainagecell", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagecell" });
  res.render("tags/tag_drainagecell", { tag })
});

router.get("/tag_drainagechannels", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagechannels" });
  res.render("tags/tag_drainagechannels", { tag })
});

router.get("/tag_drainagechannel", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagechannel" });
  res.render("tags/tag_drainagechannel", { tag })
});

router.get("/tag_drainagecontractor", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagecontractor" });
  res.render("tags/tag_drainagecontractor", { tag })
});

router.get("/tag_drainagecover", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagecover" });
  res.render("tags/tag_drainagecover", { tag })
});

router.get("/tagdrainagedesign", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagedesign" });
  res.render("tags/tag_drainagedesign", { tag })
});

router.get("/tag_drainageditch", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageditch" });
  res.render("tags/tag_drainageditch", { tag })
});

router.get("/tag_stormwaterlife", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterlife" });
  res.render("tags/tag_stormwaterlife", { tag })
});

router.get("/tag_stormwatersolutions", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatersolutions" });
  res.render("tags/tag_stormwatersolutions", { tag })
});

router.get("/tag_drainageengineer", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageengineer" });
  res.render("tags/tag_drainageengineer", { tag })
});

router.get("/tag_drainagehole", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagehole" });
  res.render("tags/tag_drainagehole", { tag })
});

router.get("/tag_drainageissues", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageissues" });
  res.render("tags/tag_drainageissues", { tag })
});

router.get("/tag_drainagelife", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagelife" });
  res.render("tags/tag_drainagelife", { tag })
});

router.get("/tag_drainageline", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageline" });
  res.render("tags/tag_drainageline", { tag })
});

router.get("/tag_drainagepathway", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagepathway" });
  res.render("tags/tag_drainagepathway", { tag })
});

router.get("/tag_drainagepipe", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagepipe" });
  res.render("tags/tag_drainagepipe", { tag })
});

router.get("/tag_drainagepipes", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagepipes" });
  res.render("tags/tag_drainagepipes", { tag })
});

router.get("/tag_drainageproblems", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageproblems" });
  res.render("tags/tag_drainageproblems", { tag })
});

router.get("/tag_drainageproducts", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageproducts" });
  res.render("tags/tag_drainageproducts", { tag })
});

router.get("/tag_drainageproject", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageproject" });
  res.render("tags/tag_drainageproject", { tag })
});

router.get("/tag_drainagesolution", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagesolution" });
  res.render("tags/tag_drainagesolution", { tag })
});

router.get("/tag_drainagesolutions", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagesolutions" });
  res.render("tags/tag_drainagesolutions", { tag })
});

router.get("/tag_drainagespecialists", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagespecialists" });
  res.render("tags/tag_drainagespecialists", { tag })
});

router.get("/tag_drainagesystem", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagesystem" });
  res.render("tags/tag_drainagesystem", { tag })
});

router.get("/tag_drainagesystems", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagesystems" });
  res.render("tags/tag_drainagesystems", { tag })
});

router.get("/tag_drainagetile", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagetile" });
  res.render("tags/tag_drainagetile", { tag })
});

router.get("/tag_drainagevisage", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagevisage" });
  res.render("tags/tag_drainagevisage", { tag })
});

router.get("/tag_drainagework", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagework" });
  res.render("tags/tag_drainagework", { tag })
});

router.get("/tag_drainageworks", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageworks" });
  res.render("tags/tag_drainageworks", { tag })
});

router.get("/tag_engineeringfundamentals", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringfundamentals" });
  res.render("tags/tag_engineeringfundamentals", { tag })
});

router.get("/tag_engineeringpractices", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringpractices" });
  res.render("tags/tag_engineeringpractices", { tag })
});

router.get("/tag_nigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_nigeria" });
  res.render("tags/tag_nigeria", { tag })
});

router.get("/tag_qualityofengineeringproducts", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_qualityofengineeringproducts" });
  res.render("tags/tag_qualityofengineeringproducts", { tag })
});

router.get("/tag_stormwaterdrainage", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterdrainage" });
  res.render("tags/tag_stormwaterdrainage", { tag })
});

router.get("/tag_sustainablestormwatermanagement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_sustainablestormwatermanagement" });
  res.render("tags/tag_sustainablestormwatermanagement", { tag })
});

router.get("/tag_youngengineer", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_youngengineer" });
  res.render("tags/tag_youngengineer", { tag })
});

router.get("/tag_drainageinspectionmethod", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageinspectionmethod" });
  res.render("tags/tag_drainageinspectionmethod", { tag })
});

router.get("/tag_rainwaterrunoff", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_rainwaterrunoff" });
  res.render("tags/tag_rainwaterrunoff", { tag })
});

router.get("/tag_rainwaterrunoffsafety", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_rainwaterrunoffsafety" });
  res.render("tags/tag_rainwaterrunoffsafety", { tag })
});

router.get("/tag_urbanwatersafety", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanwatersafety" });
  res.render("tags/tag_urbanwatersafety", { tag })
});

router.get("/tag_floodwatercontrol", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodwatercontrol" });
  res.render("tags/tag_floodwatercontrol", { tag })
});

router.get("/tag_stormwater", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwater" });
  res.render("tags/tag_stormwater", { tag })
});

router.get("/tag_bearingcapacity", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_bearingcapacity" });
  res.render("tags/tag_bearingcapacity", { tag })
});

router.get("/tag_geosynthetics", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_geosynthetics" });
  res.render("tags/tag_geosynthetics", { tag })
});

router.get("/tag_erosioncontrol", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_erosioncontrol" });
  res.render("tags/tag_erosioncontrol", { tag })
});

router.get("/tag_storm_water_management", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_storm_water_management" });
  res.render("tags/tag_storm_water_management", { tag })
});

router.get("/tag_constructionproffesionalsinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_constructionproffesionalsinnigeria" });
  res.render("tags/tag_constructionproffesionalsinnigeria", { tag })
});

router.get("/tag_foundationdesign", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_foundationdesign" });
  res.render("tags/tag_foundationdesign", { tag })
});

router.get("/tag_geotechnicalengineering", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_geotechnicalengineering" });
  res.render("tags/tag_geotechnicalengineering", { tag })
});

router.get("/tag_hydrology", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_hydrology" });
  res.render("tags/tag_hydrology", { tag })
});

router.get("/tag_infrastructure", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_infrastructure" });
  res.render("tags/tag_infrastructure", { tag })
});

router.get("/tag_nigerianconstruction", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_nigerianconstruction" });
  res.render("tags/tag_nigerianconstruction", { tag })
});

router.get("/tag_pavementdesign", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_pavementdesign" });
  res.render("tags/tag_pavementdesign", { tag })
});

router.get("/tag_permeability", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_permeability" });
  res.render("tags/tag_permeability", { tag })
});

router.get("/tag_qualitycontrol-qc-nigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_qualitycontrol-qc-nigeria" });
  res.render("tags/tag_qualitycontrol-qc-nigeria", { tag })
});

router.get("/tag_sedimentcontrol", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_sedimentcontrol" });
  res.render("tags/tag_sedimentcontrol", { tag })
});

router.get("/tag_slopestability", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_slopestability" });
  res.render("tags/tag_slopestability", { tag })
});

router.get("/tag_soilinvestigation", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_soilinvestigation" });
  res.render("tags/tag_soilinvestigation", { tag })
});

router.get("/tag_siteinvestigation", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_siteinvestigation" });
  res.render("tags/tag_siteinvestigation", { tag })
});

router.get("/tag_soilmechanics", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_soilmechanics" });
  res.render("tags/tag_soilmechanics", { tag })
});

router.get("/tag_soilproperties", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_soilproperties" });
  res.render("tags/tag_soilproperties", { tag })
});

router.get("/tag_watermanagement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_watermanagement" });
  res.render("tags/tag_watermanagement", { tag })
});

router.get("/tag_civilengineers", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_civilengineers" });
  res.render("tags/tag_civilengineers", { tag })
});

router.get("/tag_constructionproffessionalsinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_constructionproffessionalsinnigeria" });
  res.render("tags/tag_constructionproffessionalsinnigeria", { tag })
});

router.get("/tag_efficiency", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_efficiency" });
  res.render("tags/tag_efficiency", { tag })
});

router.get("/tag_nigeriagovtpolicymakers", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_nigeriagovtpolicymakers" });
  res.render("tags/tag_nigeriagovtpolicymakers", { tag })
});

router.get("/tag_qualitycontrol", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_qualitycontrol" });
  res.render("tags/tag_qualitycontrol", { tag })
});

router.get("/tag_urbanplanners", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanplanners" });
  res.render("tags/tag_urbanplanners", { tag })
});

router.get("/tag_sustainabledevelopment", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_sustainabledevelopment" });
  res.render("tags/tag_sustainabledevelopment", { tag })
});

router.get("/tag_climatechange", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_climatechange" });
  res.render("tags/tag_climatechange", { tag })
});

router.get("/tag_urbanareas", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanareas" });
  res.render("tags/tag_urbanareas", { tag })
});

router.get("/tag_urbanization", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanization" });
  res.render("tags/tag_urbanization", { tag })
});

router.get("/tag_drainageplanning", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageplanning" });
  res.render("tags/tag_drainageplanning", { tag })
});

router.get("/tag_environmentalimpact", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_environmentalimpact" });
  res.render("tags/tag_environmentalimpact", { tag })
});

router.get("/tag_nigeriaenvironment", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_nigeriaenvironment" });
  res.render("tags/tag_nigeriaenvironment", { tag })
});

router.get("/tag_urbanplanning", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanplanning" });
  res.render("tags/tag_urbanplanning", { tag })
});

router.get("/tag_waterinfrastructure", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_waterinfrastructure" });
  res.render("tags/tag_waterinfrastructure", { tag })
});

router.get("/tag_nigeriawaterpollution", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_nigeriawaterpollution" });
  res.render("tags/tag_nigeriawaterpollution", { tag })
});

router.get("/tag_urbanizationchallenges", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanizationchallenges" });
  res.render("tags/tag_urbanizationchallenges", { tag })
});

router.get("/tag_greeninfrastructure", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_greeninfrastructure" });
  res.render("tags/tag_greeninfrastructure", { tag })
});

router.get("/tag_resilientcities", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_resilientcities" });
  res.render("tags/tag_resilientcities", { tag })
});

router.get("/tag_stormwatermitigation", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatermitigation" });
  res.render("tags/tag_stormwatermitigation", { tag })
});

router.get("/tag_sustainability", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_sustainability" });
  res.render("tags/tag_sustainability", { tag })
});

router.get("/tag_watersustainability", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_watersustainability" });
  res.render("tags/tag_watersustainability", { tag })
});

router.get("/tag_landusechange", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_landusechange" });
  res.render("tags/tag_landusechange", { tag })
});

router.get("/tag_urbanenvironment", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanenvironment" });
  res.render("tags/tag_urbanenvironment", { tag })
});

router.get("/tag_urbanhydrology", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanhydrology" });
  res.render("tags/tag_urbanhydrology", { tag })
});

router.get("/tag_urbanwatermanagement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanwatermanagement" });
  res.render("tags/tag_urbanwatermanagement", { tag })
});

router.get("/tag_bioswales", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_bioswales" });
  res.render("tags/tag_bioswales", { tag })
});

router.get("/tag_lowimpactdevelopment", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_lowimpactdevelopment" });
  res.render("tags/tag_lowimpactdevelopment", { tag })
});

router.get("/tag_permeablepavement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_permeablepavement" });
  res.render("tags/tag_permeablepavement", { tag })
});

router.get("/tag_rainbarrels", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_rainbarrels" });
  res.render("tags/tag_rainbarrels", { tag })
});

router.get("/tag_raingardens", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_raingardens" });
  res.render("tags/tag_raingardens", { tag })
});

router.get("/tag_rainwaterharvesting", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_rainwaterharvesting" });
  res.render("tags/tag_rainwaterharvesting", { tag })
});

router.get("/tag_stormwaterbestpractices", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterbestpractices" });
  res.render("tags/tag_stormwaterbestpractices", { tag })
});

router.get("/tag_stormwatereducation", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatereducation" });
  res.render("tags/tag_stormwatereducation", { tag })
});

router.get("/tag_stormwaterfiltration", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterfiltration" });
  res.render("tags/tag_stormwaterfiltration", { tag })
});

router.get("/tag_sustainableurbanplanning", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_sustainableurbanplanning" });
  res.render("tags/tag_sustainableurbanplanning", { tag })
});

router.get("/tag_urbanrunoffmitigation", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_urbanrunoffmitigation" });
  res.render("tags/tag_urbanrunoffmitigation", { tag })
});

router.get("/tag_waterconservation", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_waterconservation" });
  res.render("tags/tag_waterconservation", { tag })
});

router.get("/tag_environmentalprotection", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_environmentalprotection" });
  res.render("tags/tag_environmentalprotection", { tag })
});

router.get("/tag_greensolutions", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_greensolutions" });
  res.render("tags/tag_greensolutions", { tag })
});

router.get("/tag_stormwaterchallenge", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterchallenge" });
  res.render("tags/tag_stormwaterchallenge", { tag })
});

router.get("/tag_communityinvolvement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_communityinvolvement" });
  res.render("tags/tag_communityinvolvement", { tag })
});

router.get("/tag_detectivesystems", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_detectivesystems" });
  res.render("tags/tag_detectivesystems", { tag })
});

router.get("/tag_drainagesystemsdesignandconstruction", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainagesystemsdesignandconstruction" });
  res.render("tags/tag_drainagesystemsdesignandconstruction", { tag })
});

router.get("/tag_ecologicalrehabilitationandsustainaibility", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_ecologicalrehabilitationandsustainaibility" });
  res.render("tags/tag_ecologicalrehabilitationandsustainaibility", { tag })
});

router.get("/tag_floodmanagement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodmanagement" });
  res.render("tags/tag_floodmanagement", { tag })
});

router.get("/tag_floodproneareas", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodproneareas" });
  res.render("tags/tag_floodproneareas", { tag })
});

router.get("/tag_floodproofconstructiontechniques", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodproofconstructiontechniques" });
  res.render("tags/tag_floodproofconstructiontechniques", { tag })
});

router.get("/tag_infrastructuredevelopment", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_infrastructuredevelopment" });
  res.render("tags/tag_infrastructuredevelopment", { tag })
});

router.get("/tag_mitigationstrategies", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_mitigationstrategies" });
  res.render("tags/tag_mitigationstrategies", { tag })
});

router.get("/tag_preventativemeasures", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_preventativemeasures" });
  res.render("tags/tag_preventativemeasures", { tag })
});

router.get("/tag_restorativeengagementstrategies", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_restorativeengagementstrategies" });
  res.render("tags/tag_restorativeengagementstrategies", { tag })
});

router.get("/tag_riskawarenessandplanning", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_riskawarenessandplanning" });
  res.render("tags/tag_riskawarenessandplanning", { tag })
});

router.get("/tag_asabadrainage", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_asabadrainage" });
  res.render("tags/tag_asabadrainage", { tag })
});

router.get("/tag_deltadrainage", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_deltadrainage" });
  res.render("tags/tag_deltadrainage", { tag })
});

router.get("/tag_nigeriadrainage", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_nigeriadrainage" });
  res.render("tags/tag_nigeriadrainage", { tag })
});

router.get("/tag_flooding", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_flooding" });
  res.render("tags/tag_flooding", { tag })
});

router.get("/tag_flooding2018", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_flooding2018" });
  res.render("tags/tag_flooding2018", { tag })
});

router.get("/tag_flooding2019", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_flooding2019" });
  res.render("tags/tag_flooding2019", { tag })
});

router.get("/tag_floodingalert", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingalert" });
  res.render("tags/tag_floodingalert", { tag })
});

router.get("/tag_floodingcookie", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingcookie" });
  res.render("tags/tag_floodingcookie", { tag })
});

router.get("/tag_floodingcookies", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingcookies" });
  res.render("tags/tag_floodingcookies", { tag })
});

router.get("/tag_floodingcookieswithroyalicing", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingcookieswithroyalicing" });
  res.render("tags/tag_floodingcookieswithroyalicing", { tag })
});

router.get("/tag_floodingeverywhere", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingeverywhere" });
  res.render("tags/tag_floodingeverywhere", { tag })
});

router.get("/tag_floodingfeeds", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingfeeds" });
  res.render("tags/tag_floodingfeeds", { tag })
});

router.get("/tag_floodingfriday", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingfriday" });
  res.render("tags/tag_floodingfriday", { tag })
});

router.get("/tag_floodingicing", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingicing" });
  res.render("tags/tag_floodingicing", { tag })
});

router.get("/tag_floodingig", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingig" });
  res.render("tags/tag_floodingig", { tag })
});

router.get("/tag_floodinginsta", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodinginsta" });
  res.render("tags/tag_floodinginsta", { tag })
});

router.get("/tag_floodinginstagram", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodinginstagram" });
  res.render("tags/tag_floodinginstagram", { tag })
});

router.get("/tag_floodinginstagramwithcutepicsofzeus", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodinginstagramwithcutepicsofzeus" });
  res.render("tags/tag_floodinginstagramwithcutepicsofzeus", { tag })
});

router.get("/tag_floodingintexas", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingintexas" });
  res.render("tags/tag_floodingintexas", { tag })
});

router.get("/tag_floodingmytimeline", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingmytimeline" });
  res.render("tags/tag_floodingmytimeline", { tag })
});

router.get("/tag_floodingrain", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingrain" });
  res.render("tags/tag_floodingrain", { tag })
});

router.get("/tag_floodingrains", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingrains" });
  res.render("tags/tag_floodingrains", { tag })
});

router.get("/tag_floodingriver", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingriver" });
  res.render("tags/tag_floodingriver", { tag })
});

router.get("/tag_floodingroads", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingroads" });
  res.render("tags/tag_floodingroads", { tag })
});

router.get("/tag_floodings", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodings" });
  res.render("tags/tag_floodings", { tag })
});

router.get("/tag_drainageholes", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_drainageholes" });
  res.render("tags/tag_drainageholes", { tag })
});

router.get("/tag_warri", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_warri" });
  res.render("tags/tag_warri", { tag })
});

router.get("/tag_valleys", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_valleys" });
  res.render("tags/tag_valleys", { tag })
});

router.get("/tag_swamps", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_swamps" });
  res.render("tags/tag_swamps", { tag })
});

router.get("/tag_nigeriadevastatingfloods", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_nigeriadevastatingfloods" });
  res.render("tags/tag_nigeriadevastatingfloods", { tag })
});

router.get("/tag_floodingsucks", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingsucks" });
  res.render("tags/tag_floodingsucks", { tag })
});

router.get("/tag_civilengineer", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_civilengineer" });
  res.render("tags/tag_civilengineer", { tag })
});

router.get("/tag_standardsandguidelinesforconstructingstormsites", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_standardsandguidelinesforconstructingstormsites" });
  res.render("tags/tag_standardsandguidelinesforconstructingstormsites", { tag })
});

router.get("/tag_developingandremediationsofbasinscausedbyconstructionprojects", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_developingandremediationsofbasinscausedbyconstructionprojects" });
  res.render("tags/tag_developingandremediationsofbasinscausedbyconstructionprojects", { tag })
});

router.get("/tag_sedimentcontrolandstormwaterrunningoffonconstructionsites", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_sedimentcontrolandstormwaterrunningoffonconstructionsites" });
  res.render("tags/tag_sedimentcontrolandstormwaterrunningoffonconstructionsites", { tag })
});

router.get("/tag_floodingsituationinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingsituationinnigeria" });
  res.render("tags/tag_floodingsituationinnigeria", { tag })
});

router.get("/tag_floodsinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodsinnigeria" });
  res.render("tags/tag_floodsinnigeria", { tag })
});

router.get("/tag_floodingtechnique", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingtechnique" });
  res.render("tags/tag_floodingtechnique", { tag })
});

router.get("/tag_floodsafety", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodsafety" });
  res.render("tags/tag_floodsafety", { tag })
});

router.get("/tag_floodingyournewsfeeds", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyournewsfeeds" });
  res.render("tags/tag_floodingyournewsfeeds", { tag })
});

router.get("/tag_floodingyourtime", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyourtime" });
  res.render("tags/tag_floodingyourtime", { tag })
});

router.get("/tag_floodingyourtimelinetoday", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyourtimelinetoday" });
  res.render("tags/tag_floodingyourtimelinetoday", { tag })
});

router.get("/tag_floodingtimelinestonight", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingtimelinestonight" });
  res.render("tags/tag_floodingtimelinestonight", { tag })
});

router.get("/tag_floodingyourfeeds", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyourfeeds" });
  res.render("tags/tag_floodingyourfeeds", { tag })
});

router.get("/tag_floodingyourfeed", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyourfeed" });
  res.render("tags/tag_floodingyourfeed", { tag })
});

router.get("/tag_floodingyourtimeline", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyourtimeline" });
  res.render("tags/tag_floodingyourtimeline", { tag })
});

router.get("/tag_floodingyourtimelines", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyourtimelines" });
  res.render("tags/tag_floodingyourtimelines", { tag })
});

router.get("/tag_floodingyourig", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyourig" });
  res.render("tags/tag_floodingyourig", { tag })
});

router.get("/tag_stormwreck", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwreck" });
  res.render("tags/tag_stormwreck", { tag })
});

router.get("/tag_stormwaterbmp", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterbmp" });
  res.render("tags/tag_stormwaterbmp", { tag })
});

router.get("/tag_stormwatercm", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatercm" });
  res.render("tags/tag_stormwatercm", { tag })
});

router.get("/tag_stormwatercompliance", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatercompliance" });
  res.render("tags/tag_stormwatercompliance", { tag })
});

router.get("/tag_stormwatercreek", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatercreek" });
  res.render("tags/tag_stormwatercreek", { tag })
});

router.get("/tag_stormwaterdesign", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterdesign" });
  res.render("tags/tag_stormwaterdesign", { tag })
});

router.get("/tag_stormwaterdrain", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterdrain" });
  res.render("tags/tag_stormwaterdrain", { tag })
});

router.get("/tag_stormwaterdrains", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterdrains" });
  res.render("tags/tag_stormwaterdrains", { tag })
});

router.get("/tag_stormwaterengineering", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterengineering" });
  res.render("tags/tag_stormwaterengineering", { tag })
});

router.get("/tag_stormwaterrunoffs", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterrunoffs" });
  res.render("tags/tag_stormwaterrunoffs", { tag })
});

router.get("/tag_stormwaterharvesting", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterharvesting" });
  res.render("tags/tag_stormwaterharvesting", { tag })
});

router.get("/tag_stormwater360", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwater360" });
  res.render("tags/tag_stormwater360", { tag })
});

router.get("/tag_stormwateraustralia", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwateraustralia" });
  res.render("tags/tag_stormwateraustralia", { tag })
});

router.get("/tag_stormwaterfactoftheday", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterfactoftheday" });
  res.render("tags/tag_stormwaterfactoftheday", { tag })
});

router.get("/tag_stormwaterpollution", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterpollution" });
  res.render("tags/tag_stormwaterpollution", { tag })
});

router.get("/tag_stormwaterpollutionprevention", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterpollutionprevention" });
  res.render("tags/tag_stormwaterpollutionprevention", { tag })
});

router.get("/tag_stormwaterpond", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterpond" });
  res.render("tags/tag_stormwaterpond", { tag })
});

router.get("/tag_stormwaterretention", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterretention" });
  res.render("tags/tag_stormwaterretention", { tag })
});

router.get("/tag_stormwatersavvy", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatersavvy" });
  res.render("tags/tag_stormwatersavvy", { tag })
});

router.get("/tag_stormwatersmart", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatersmart" });
  res.render("tags/tag_stormwatersmart", { tag })
});

router.get("/tag_stormwatertreatment", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatertreatment" });
  res.render("tags/tag_stormwatertreatment", { tag })
});

router.get("/tag_stormwatersystems", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatersystems" });
  res.render("tags/tag_stormwatersystems", { tag })
});

router.get("/tag_stormwatersystem", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatersystem" });
  res.render("tags/tag_stormwatersystem", { tag })
});

router.get("/tag_stormwaterstewards", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterstewards" });
  res.render("tags/tag_stormwaterstewards", { tag })
});

router.get("/tag_stormwaterpit", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterpit" });
  res.render("tags/tag_stormwaterpit", { tag })
});

router.get("/tag_stormwaterpipe", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterpipe" });
  res.render("tags/tag_stormwaterpipe", { tag })
});

router.get("/tag_stormwatermaintenance", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatermaintenance" });
  res.render("tags/tag_stormwatermaintenance", { tag })
});

router.get("/tag_stormwaterhawaii", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterhawaii" });
  res.render("tags/tag_stormwaterhawaii", { tag })
});

router.get("/tag_stormwaterawarenessweek", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterawarenessweek" });
  res.render("tags/tag_stormwaterawarenessweek", { tag })
});

router.get("/tag_stormwaterstudios", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterstudios" });
  res.render("tags/tag_stormwaterstudios", { tag })
});

router.get("/tag_stormwatersydney", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatersydney" });
  res.render("tags/tag_stormwatersydney", { tag })
});

router.get("/tag_floodingthetimeline", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingthetimeline" });
  res.render("tags/tag_floodingthetimeline", { tag })
});

router.get("/tag_floodingtimelinestoday", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingtimelinestoday" });
  res.render("tags/tag_floodingtimelinestoday", { tag })
});

router.get("/tag_floodingthestreets", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingthestreets" });
  res.render("tags/tag_floodingthestreets", { tag })
});

router.get("/tag_floodingtimelinestonight", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingtimelinestonight" });
  res.render("tags/tag_floodingtimelinestonight", { tag })
});

router.get("/tag_floodingvideo", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingvideo" });
  res.render("tags/tag_floodingvideo", { tag })
});

router.get("/tag_floodingyournewsfeed", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyournewsfeed" });
  res.render("tags/tag_floodingyournewsfeed", { tag })
});

router.get("/tag_floodingwaters", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingwaters" });
  res.render("tags/tag_floodingwaters", { tag })
});

router.get("/tag_floodingyalltl", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyalltl" });
  res.render("tags/tag_floodingyalltl", { tag })
});

router.get("/tag_floodingyall", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyall" });
  res.render("tags/tag_floodingyall", { tag })
});

router.get("/tag_floodingyalltimeline", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyalltimeline" });
  res.render("tags/tag_floodingyalltimeline", { tag })
});

router.get("/tag_stormwateraware", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwateraware" });
  res.render("tags/tag_stormwateraware", { tag })
});

router.get("/tag_floodingyourtl", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingyourtl" });
  res.render("tags/tag_floodingyourtl", { tag })
});

router.get("/tag_floodingthegram", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingthegram" });
  res.render("tags/tag_floodingthegram", { tag })
});

router.get("/tag_engineeringchallenges", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringchallenges" });
  res.render("tags/tag_engineeringchallenges", { tag })
});

router.get("/tag_engineeringchallenges2020", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringchallenges2020" });
  res.render("tags/tag_engineeringchallenges2020", { tag })
});

router.get("/tag_engineeringchallengesforstudents", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringchallengesforstudents" });
  res.render("tags/tag_engineeringchallengesforstudents", { tag })
});

router.get("/tag_engineeringchallengesofthe21stcentury", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringchallengesofthe21stcentury" });
  res.render("tags/tag_engineeringchallengesofthe21stcentury", { tag })
});

router.get("/tag_engineeringcodes", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringcodes" });
  res.render("tags/tag_engineeringcodes", { tag })
});

router.get("/tag_engineeringprofessionals", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringprofessionals" });
  res.render("tags/tag_engineeringprofessionals", { tag })
});

router.get("/tag_youngengineers", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_youngengineers" });
  res.render("tags/tag_youngengineers", { tag })
});

router.get("/tag_youngengineersbrickschallenge", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_youngengineersbrickschallenge" });
  res.render("tags/tag_youngengineersbrickschallenge", { tag })
});

router.get("/tag_youngengineersfellowship", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_youngengineersfellowship" });
  res.render("tags/tag_youngengineersfellowship", { tag })
});

router.get("/tag_youngengineersprogram", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_youngengineersprogram" });
  res.render("tags/tag_youngengineersprogram", { tag })
});

router.get("/tag_britishstandardcodes", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_britishstandardcodes" });
  res.render("tags/tag_britishstandardcodes", { tag })
});

router.get("/tag_eurocodes", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_eurocodes" });
  res.render("tags/tag_eurocodes", { tag })
});

router.get("/tag_europeanstandardcodes", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_europeanstandardcodes" });
  res.render("tags/tag_europeanstandardcodes", { tag })
});

router.get("/tag_engineeringpractice", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringpractice" });
  res.render("tags/tag_engineeringpractice", { tag })
});

router.get("/tag_engineeringworks", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringworks" });
  res.render("tags/tag_engineeringworks", { tag })
});

router.get("/tag_engineeringworkshop", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringworkshop" });
  res.render("tags/tag_engineeringworkshop", { tag })
});

router.get("/tag_professionalefficiency", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_professionalefficiency" });
  res.render("tags/tag_professionalefficiency", { tag })
});

router.get("/tag_qualityengineeringjobs", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_qualityengineeringjobs" });
  res.render("tags/tag_qualityengineeringjobs", { tag })
});

router.get("/tag_engineer", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineer" });
  res.render("tags/tag_engineer", { tag })
});

router.get("/tag_mentorship", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_mentorship" });
  res.render("tags/tag_mentorship", { tag })
});

router.get("/tag_training", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_training" });
  res.render("tags/tag_training", { tag })
});

router.get("/tag_dynamicworld", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_dynamicworld" });
  res.render("tags/tag_dynamicworld", { tag })
});

router.get("/tag_scientificandnaturallaws", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_scientificandnaturallaws" });
  res.render("tags/tag_scientificandnaturallaws", { tag })
});

router.get("/tag_hydraulicengineering", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_hydraulicengineering" });
  res.render("tags/tag_hydraulicengineering", { tag })
});

router.get("/tag_projects", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_projects" });
  res.render("tags/tag_projects", { tag })
});

router.get("/tag_andriversindeltastateofnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_andriversindeltastateofnigeria" });
  res.render("tags/tag_andriversindeltastateofnigeria", { tag })
});

router.get("/tag_effurun", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_effurun" });
  res.render("tags/tag_effurun", { tag })
});

router.get("/tag_includingexistingdrainsinasaba", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_includingexistingdrainsinasaba" });
  res.render("tags/tag_includingexistingdrainsinasaba", { tag })
});

router.get("/tag_naturalwatercourses", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_naturalwatercourses" });
  res.render("tags/tag_naturalwatercourses", { tag })
});

router.get("/tag_wellresearchedstudieswereconductedoverentirefloodproneareas", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_wellresearchedstudieswereconductedoverentirefloodproneareas" });
  res.render("tags/tag_wellresearchedstudieswereconductedoverentirefloodproneareas", { tag })
});

router.get("/tag_bestpracticesinstormwaterconstruction", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_bestpracticesinstormwaterconstruction" });
  res.render("tags/tag_bestpracticesinstormwaterconstruction", { tag })
});

router.get("/tag_constructionstormwater", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_constructionstormwater" });
  res.render("tags/tag_constructionstormwater", { tag })
});

router.get("/tag_developingandremediationsofbasins", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_developingandremediationsofbasins" });
  res.render("tags/tag_developingandremediationsofbasins", { tag })
});

router.get("/tag_erosioncontrolconstructionandstormwatermanagement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_erosioncontrolconstructionandstormwatermanagement" });
  res.render("tags/tag_erosioncontrolconstructionandstormwatermanagement", { tag })
});

router.get("/tag_permitsforstormwatersystemsonconstructionsites", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_permitsforstormwatersystemsonconstructionsites" });
  res.render("tags/tag_permitsforstormwatersystemsonconstructionsites", { tag })
});

router.get("/tag_sedimentcontrolandstormwater", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_sedimentcontrolandstormwater" });
  res.render("tags/tag_sedimentcontrolandstormwater", { tag })
});

router.get("/tag_standardsandguidelinesforconstruction", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_standardsandguidelinesforconstruction" });
  res.render("tags/tag_standardsandguidelinesforconstruction", { tag })
});

router.get("/tag_stormwaterconstruction", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterconstruction" });
  res.render("tags/tag_stormwaterconstruction", { tag })
});

router.get("/tag_stormwatercontrolsforconstruction", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatercontrolsforconstruction" });
  res.render("tags/tag_stormwatercontrolsforconstruction", { tag })
});

router.get("/tag_stormwaterinfrastructure", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterinfrastructure" });
  res.render("tags/tag_stormwaterinfrastructure", { tag })
});

router.get("/tag_stormwatersolutionsforconstructionsites", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwatersolutionsforconstructionsites" });
  res.render("tags/tag_stormwatersolutionsforconstructionsites", { tag })
});

router.get("/tag_traininginstormwaterforconstructionpurposes", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_traininginstormwaterforconstructionpurposes" });
  res.render("tags/tag_traininginstormwaterforconstructionpurposes", { tag })
});

router.get("/tag_dangersoffloodinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_dangersoffloodinnigeria" });
  res.render("tags/tag_dangersoffloodinnigeria", { tag })
});

router.get("/tag_devastatingnigerialandslideandflooding", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_devastatingnigerialandslideandflooding" });
  res.render("tags/tag_devastatingnigerialandslideandflooding", { tag })
});

router.get("/tag_disasterreliefinactionforfloodvictimsinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_disasterreliefinactionforfloodvictimsinnigeria" });
  res.render("tags/tag_disasterreliefinactionforfloodvictimsinnigeria", { tag })
});

router.get("/tag_extremeheatcausestormtolastinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_extremeheatcausestormtolastinnigeria" });
  res.render("tags/tag_extremeheatcausestormtolastinnigeria", { tag })
});

router.get("/tag_fightingtherisingwatersfrom", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_fightingtherisingwatersfrom" });
  res.render("tags/tag_fightingtherisingwatersfrom", { tag })
});

router.get("/tag_floodinginnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodinginnigeria" });
  res.render("tags/tag_floodinginnigeria", { tag })
});

router.get("/tag_floodingsituationinigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_floodingsituationinigeria" });
  res.render("tags/tag_floodingsituationinigeria", { tag })
});

router.get("/tag_heavyrainfallhasruinedmanynigeriahomes", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_heavyrainfallhasruinedmanynigeriahomes" });
  res.render("tags/tag_heavyrainfallhasruinedmanynigeriahomes", { tag })
});

router.get("/tag_nigeriadevastatingflood", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_nigeriadevastatingflood" });
  res.render("tags/tag_nigeriadevastatingflood", { tag })
});

router.get("/tag_nigeriaflooding", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_nigeriaflooding" });
  res.render("tags/tag_nigeriaflooding", { tag })
});

router.get("/tag_rainfallinnigeriafloods", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_rainfallinnigeriafloods" });
  res.render("tags/tag_rainfallinnigeriafloods", { tag })
});

router.get("/tag_severeweatherinnigeriainundation", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_severeweatherinnigeriainundation" });
  res.render("tags/tag_severeweatherinnigeriainundation", { tag })
});

router.get("/tag_detentionbasinsandpumpsystems", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_detentionbasinsandpumpsystems" });
  res.render("tags/tag_detentionbasinsandpumpsystems", { tag })
});

router.get("/tag_engineeringhydrologytechniques", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_engineeringhydrologytechniques" });
  res.render("tags/tag_engineeringhydrologytechniques", { tag })
});

router.get("/tag_gabionsystems", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_gabionsystems" });
  res.render("tags/tag_gabionsystems", { tag })
});

router.get("/tag_permitsandguidanceforsurfacedrainage", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_permitsandguidanceforsurfacedrainage" });
  res.render("tags/tag_permitsandguidanceforsurfacedrainage", { tag })
});

router.get("/tag_raingardensolutions", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_raingardensolutions" });
  res.render("tags/tag_raingardensolutions", { tag })
});

router.get("/tag_rainharvestsystems", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_rainharvestsystems" });
  res.render("tags/tag_rainharvestsystems", { tag })
});

router.get("/tag_roofdrainsanddownpipesystems", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_roofdrainsanddownpipesystems" });
  res.render("tags/tag_roofdrainsanddownpipesystems", { tag })
});

router.get("/tag_stormwaterrunoffsolutions", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_stormwaterrunoffsolutions" });
  res.render("tags/tag_stormwaterrunoffsolutions", { tag })
});

router.get("/tag_surfaceandbelowgrounddrainage", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_surfaceandbelowgrounddrainage" });
  res.render("tags/tag_surfaceandbelowgrounddrainage", { tag })
});

router.get("/tag_communityengagement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_communityengagement" });
  res.render("tags/tag_communityengagement", { tag })
});

router.get("/tag_education", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_education" });
  res.render("tags/tag_education", { tag })
});

router.get("/tag_environmentaleducation", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_environmentaleducation" });
  res.render("tags/tag_environmentaleducation", { tag })
});

router.get("/tag_watershedmanagement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_watershedmanagement" });
  res.render("tags/tag_watershedmanagement", { tag })
});

router.get("/tag_buildingpracticesinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_buildingpracticesinnigeria" });
  res.render("tags/tag_buildingpracticesinnigeria", { tag })
});

router.get("/tag_civilengineeringpracticesinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_civilengineeringpracticesinnigeria" });
  res.render("tags/tag_civilengineeringpracticesinnigeria", { tag })
});

router.get("/tag_constructionpracticesinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_constructionpracticesinnigeria" });
  res.render("tags/tag_constructionpracticesinnigeria", { tag })
});

router.get("/tag_designengineeringservicesinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_designengineeringservicesinnigeria" });
  res.render("tags/tag_designengineeringservicesinnigeria", { tag })
});

router.get("/tag_developmentandplanninginnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_developmentandplanninginnigeria" });
  res.render("tags/tag_developmentandplanninginnigeria", { tag })
});

router.get("/tag_projectmanagement", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_projectmanagement" });
  res.render("tags/tag_projectmanagement", { tag })
});

router.get("/tag_environmentalengineeringpracticesinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_environmentalengineeringpracticesinnigeria" });
  res.render("tags/tag_environmentalengineeringpracticesinnigeria", { tag })
});

router.get("/tag_professionalpracticesinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_professionalpracticesinnigeria" });
  res.render("tags/tag_professionalpracticesinnigeria", { tag })
});

router.get("/tag_safetypracticesinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_safetypracticesinnigeria" });
  res.render("tags/tag_safetypracticesinnigeria", { tag })
});

router.get("/tag_sustainableengineeringpracticesinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_sustainableengineeringpracticesinnigeria" });
  res.render("tags/tag_sustainableengineeringpracticesinnigeria", { tag })
});

router.get("/tag_technicalengineeringpracticesinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_technicalengineeringpracticesinnigeria" });
  res.render("tags/tag_technicalengineeringpracticesinnigeria", { tag })
});

router.get("/tag_valueengineeringpracticesinnigeria", async (req, res) => {
  const tag = await Tag.findOne({ slug: "tag_valueengineeringpracticesinnigeria" });
  res.render("tags/tag_valueengineeringpracticesinnigeria", { tag })
});

// All tags
router.get('/', async (req, res) => {
  const tags = await Tag.find().sort({ createdAt: -1 });
  res.render('tags/index', { tags, title: 'All Tags', layout: 'partials/layout' });
});

// Show tag + blogs
router.get("/:slug", async (req, res) => {
  try {
    const tag = await Tag.findOne({ slug: req.params.slug });
    if (!tag) {
      return res.status(404).send("Tag not found");
    }

    // Find blogs with this tag
    const blogs = await Blog.find({ tags: tag._id });
    console.log("Tag slug:", tag.slug);
    console.log("Blogs found:", blogs.length);

    res.render("tags/show", { tag, blogs });

  } catch (err) {
    console.error("Tag route error:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
