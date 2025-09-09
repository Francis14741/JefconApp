
const mongoose = require("mongoose");
const slugify = require("slugify");

// Models
const Category = require("../models/category");
const Archive = require("../models/archive");
const Tag = require("../models/tag");
const Service = require("../models/service");
const Project = require("../models/project");
const Faq = require("../models/faq");
const Blog = require("../models/blog");

// MongoDB connection
const dbUrl = process.env.MONGO_URI || "mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/jefconapp?retryWrites=true&w=majority&appName=jefconapp";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected for seeding"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Seed function
async function seed() {
  try {
    console.log("� Clearing old data...");
    await Blog.deleteMany({});
    await Category.deleteMany({});
    await Archive.deleteMany({});
    await Tag.deleteMany({});
    await Service.deleteMany({});
    await Project.deleteMany({});
    await Faq.deleteMany({});
    console.log("✅ Old data cleared");

    // --- Categories ---
    const categoriesData = [
      { title: "Case Studies", slug: "case_studies" },
      { title: "Environmental", slug: "cat_environmental" },
      { title: "Feasibility And Economic Studies", slug: "cat_feasibility_eco" },
      { title: "Consultancy And Advisory", slug: "consultancy_advisory" },
      { title: "Construction Law", slug: "construction_law" },
      { title: "Construction Technology", slug: "construction_technology" },
      { title: "Engineering Surveys", slug: "category_eng_surveys" },
      { title: "Engineering Design And Simulation", slug: "engdesign_simulation" },
      { title: "Industry News And Trends", slug: "industrynews_trend" },
      { title: "Innovation And Research", slug: "innovation_research" },
      { title: "Mechanical, Electrical And Plumbing (MEP)", slug: "mech_elec_plumbing" },
      { title: "Project Supervision And Management", slug: "pro_superv_cat" },
      { title: "Project Valuation And Cost Control", slug: "proj_valuation_cost" },
      { title: "Safety And Regulations", slug: "safety_regulations" },
      { title: "Training And Education", slug: "training_education" },
      { title: "Uncategorized", slug: "uncategorized" }
    ];
    const categories = await Category.insertMany(categoriesData);
    console.log("✅ Categories seeded");

    // --- Archives ---
    const archivesData = [
      { title: "Archives Of: DEPROF" , slug: "deprof_archive"  },   
      { title: "Archives Of: Abdul M. Yahaya" ,slug: "abdul_yahaya_Archive"  },     
      { title: "Archives Of: Engr. John Cee Onwualu,JP", slug: "Jefcon_more"  },      
      { title: "Monthly Archives: June 2025" , slug: "archives_2025_june"  },     
      { title: "Monthly Archives: April 2025", slug: "archives_2025_april"  },     
      { title: "Monthly Archives: May 2024", slug: "archives_2024_may"  },      
      { title: "Monthly Archives: March 2024", slug: "archives_2024_march"  },     
      { title: "Monthly Archives: June 2024" , slug: "archives_2024_june"  },     
      { title: "Monthly Archives: July 2024", slug: "archives_2024_july"  },     
      { title: "Monthly Archives: January 2024"  , slug: "archives_2024_jan"  },    
      { title: "Monthly Archives: February 2024" , slug: "archives_2024_feb"  },      
      { title: "Monthly Archives: April 2024" , slug: "archives_2024_april"  },    
      { title: "Monthly Archives: October 2023"  ,slug: "archives_2023_oct"  },    
      { title: "Monthly Archives: November 2023" ,slug: "archives_2023_nov"  },      
      { title: "Monthly Archives: March 2023" , slug: "archives_2023_march"  },    
      { title: "Monthly Archives: January 2023" , slug: "archives_2023_jan"  },    
      { title: "Monthly Archives: February 2023" , slug: "archives_2023_feb"  },      
      { title: "Monthly Archives: December 2023" ,slug: "archives_2023_dec"  },      
      { title: "Monthly Archives: September 2022" ,slug: "archives_2022_sept"  },     
      { title: "Monthly Archives: October 2022" ,slug: "archives_2022_oct"  },    
      { title: "Monthly Archives: November 2022" ,slug: "archives_2022_nov"  },      
      { title: "Monthly Archives: May 2022" , slug: "archives_2022_may"  },    
      { title: "Monthly Archives: March 2022" , slug: "archives_2022_march"  },    
      { title: "Monthly Archives: July 2022" , slug: "archives_2022_july"  },     
      { title: "Monthly Archives: January 2022" , slug: "archives_2022_jan"  },    
      { title: "Monthly Archives: February 2022" ,slug: "archives_2022_feb"  },      
      { title: "Monthly Archives: December 2022", slug: "archives_2022_dec"  },      
      { title: "Monthly Archives: August 2022" , slug: "archives_2022_august"  },     
      { title: "Monthly Archives: April 2022" , slug: "archives_2022_april"  },    
      { title: "Monthly Archives: November 2021" ,slug: "archives_2021_nov"  },      
      { title: "Monthly Archives: May 2021" , slug: "archives_2021_may"  },    
      { title: "Monthly Archives: June 2021" , slug: "archives_2021_june"  },     
      { title: "Monthly Archives: January 2021" ,slug: "archives_2021_jan"  },    
      { title: "Monthly Archives: December 2021" ,slug: "archives_2021_dec"  },      
      { title: "Monthly Archives: August 2021" , slug: "archives_2021_august"  },     
      { title: "Monthly Archives: April 2021",  slug: "archives_2021_april" },      
      { title: "Monthly Archives: September 2020",  slug: "archives_2020_sept"  },      
      { title: "Monthly Archives: October 2020",  slug: "archives_2020_oct" },      
      { title: "Monthly Archives: November 2020", slug: "archives_2020_nov" },      
      { title: "Monthly Archives: May 2020", slug: "archives_2020_may" },     
      { title: "Monthly Archives: July 2020",  slug: "archives_2020_july"  },     
      { title: "Monthly Archives: August 2020",  slug: "archives_2020_august" },
    ];
    const archives = await Archive.insertMany(archivesData);
    console.log("✅ Archives seeded");

    // --- Tags ---
    const tagsData = [
      {  title: "Tag: Drainage-inspection-method",  slug: slugify("tag_drainageinspectionmethod" ,{ lower: true }) },
      {  title: "Tag: Drainage-system-best-practices", slug: slugify("tag_drainagesystembestpractices", { lower: true }) },
      {  title: "Tag: Drainage-system-inspection-tips",  slug: slugify("tag_drainagesysteminspectiontips" , { lower: true }) },
      {  title: "Tag: Easy-tips-for-drainage-quality",   slug: slugify("tag_easytipsfordrainagequality" , { lower: true }) },
      {  title: "Tag: Effective-drainage-qc",  slug: slugify("tag_effectivedrainageqc" , { lower: true }) },
      {  title: "Tag: Drainage-system-quality-control",  slug: slugify("tag_drainagesystemqualitycontrol" , { lower: true }) },
      {  title: "Tag: Stormwater-management-nigeria",   slug: slugify("tag_stormwatermanagementnigeria"  , { lower: true }) },
      {  title: "Tag: Stormwater-pollution-control-nigeria",  slug: slugify("tag_stormwaterpollutioncontrolnigeria"  , { lower: true }) },
      {  title: "Tag: Pollution-prevention-technique",  slug: slugify("tag_pollutionpreventiontechnique" , { lower: true }) },
      {  title: "Tag: Nigeria-drainage-system-maintenance",  slug: slugify("tag_nigeriadrainagesystemmaintenance"  , { lower: true }) },
      {  title: "Tag: How-to-reduce-urban-water-pollution",   slug: slugify("tag_howtoreduceurbanwaterpollution"  , { lower: true }) },
      {  title: "Tag: Preventing-stormwater-pollution",   slug: slugify("tag_preventingstormwaterpollution" , { lower: true }) },
      {  title: "Tag: Rain-water-runoff",  slug: slugify("tag_rainwaterrunoff" , { lower: true }) },
      {  title: "Tag: Stormwater-pollution-guide",   slug: slugify("tag_stormwaterpollutionguide" , { lower: true }) },
      {  title: "Tag: Stormwater-pollution-trend-2025",  slug: slugify("tag_stormwaterpollutiontrend2025", { lower: true }) },
      {  title: "Tag: Stormwater-runoff-solution",  slug: slugify("tag_stormwaterrunoffsolution" , { lower: true }) },
      {  title: "Tag: Water-safety-tips-nigeria",  slug: slugify("tag_watersafetytipsnigeria" , { lower: true }) },
      {  title: "Tag: Urban-water-safety",  slug: slugify("tag_urbanwatersafety" , { lower: true }) },
      {  title: "Tag: Water-pollution-prevention-2025",  slug: slugify("tag_waterpollutionprevention2025" , { lower: true }) },
      {  title: "Tag: Civil-engineering", slug: slugify("tag_civilengineering", { lower: true }) },
      {  title: "Tag: Complex-engineering-problems",  slug: slugify("tag_complexengineeringproblems", { lower: true }) },
      {  title: "Tag: Drainage-holes", slug: slugify("tag_drainageholes"  , { lower: true }) },
      {  title: "Tag: Drainage",  slug: slugify("tag_drainage"  , { lower: true }) },
      {  title: "Tag: Drainage-bresilien",  slug: slugify("tag_drainagebresilien"  , { lower: true }) },
      {  title: "Tag: Drainage-basin",   slug: slugify("tag_drainagebasin"   , { lower: true }) },
      {  title: "Tag: Drainage-cover",  slug: slugify("tag_drainagecover"  , { lower: true }) },
      {  title: "Tag: Drainage-cell",  slug: slugify("tag_drainagecell"  , { lower: true }) },
      {  title: "Tag: Construction",  slug: slugify("tag_construction"   , { lower: true }) },
      {  title: "Tag: Drainage-channel", slug: slugify("tag_drainagechannel"   , { lower: true }) },
      {  title: "Tag: Drainage-channels",   slug: slugify("tag_drainagechannels"  , { lower: true }) },
      {  title: "Tag: Drainage-contractor",   slug: slugify("tag_drainagecontractor"   , { lower: true }) },
      {  title: "Tag: Drainage-design",  slug: slugify("tag_drainagedesign"  , { lower: true }) },
      {  title: "Tag: Drainage-ditch",  slug: slugify("tag_drainageditch"   , { lower: true }) },
      {  title: "Tag: Drainage-engineer",  slug: slugify("tag_drainageengineer"   , { lower: true }) },
      {  title: "Tag: Drainage-hole",   slug: slugify("tag_drainagehole"   , { lower: true }) },
      {  title: "Tag: Drainage-issues",  slug: slugify("tag_drainageissues" , { lower: true }) },
      {  title: "Tag: Drainage-life",  slug: slugify("tag_drainagelife"   , { lower: true }) },
      {  title: "Tag: Drainage-line",   slug: slugify("tag_drainageline"  , { lower: true }) },
      {  title: "Tag: Drainage-pathway",  slug: slugify("tag_drainagepathway" , { lower: true }) },
      {  title: "Tag: Drainage-pipe", slug: slugify("tag_drainagepipe"  , { lower: true }) },
      {  title: "Tag: Drainage-pipes",  slug: slugify("tag_drainagepipes" , { lower: true }) },
      {  title: "Tag: Drainage-problems",  slug: slugify("tag_drainageproblems" , { lower: true }) },
      {  title: "Tag: Drainage-products",   slug: slugify("tag_drainageproducts" , { lower: true }) },
      {  title: "Tag: Drainage-project",   slug: slugify("tag_drainageproject" , { lower: true }) },
      {  title: "Tag: Drainage-solution",   slug: slugify("tag_drainagesolution" , { lower: true }) },
      {  title: "Tag: Drainage-solutions",   slug: slugify("tag_drainagesolutions" , { lower: true }) },
      {  title: "Tag: Drainage-specialists",  slug: slugify("tag_drainagespecialists" , { lower: true }) },
      {  title: "Tag: Drainage-system",   slug: slugify("tag_drainagesystem" , { lower: true }) },
      { title: "Tag: Drainage-systems",  slug: slugify("tag_drainagesystems" , { lower: true }) },
      { title: "Tag: Drainage-tile",   slug: slugify("tag_drainagetile"  , { lower: true }) },
      { title: "Tag: Drainage-visage",   slug: slugify("tag_drainagevisage" , { lower: true }) },
      { title: "Tag: Drainage-work",   slug: slugify("tag_drainagework" , { lower: true }) },
      { title: "Tag: Drainage-works",   slug: slugify("tag_drainageworks"  , { lower: true }) },
      { title: "Tag: Engineering-fundamentals",   slug: slugify("tag_engineeringfundamentals"  , { lower: true }) },
      { title: "Tag: Engineering-practices",   slug: slugify("tag_engineeringpractices"  , { lower: true }) },
      { title: "Tag: Flood-water-control",   slug: slugify("tag_floodwatercontrol" , { lower: true }) },
      { title: "Tag: Nigeria",    slug: slugify("tag_Nigeria" , { lower: true }) },
      { title: "Tag: Quality-of-engineering-products",   slug: slugify("tag_qualityofengineeringproducts" , { lower: true }) },
      { title: "Tag: Stormwater",   slug: slugify("tag_stormwater"  , { lower: true }) },
      { title: "Tag: Stormwater-drainage",    slug: slugify("tag_stormwaterdrainage" , { lower: true }) },
      { title: "Tag: Stormwater-management",   slug: slugify("tag_stormwatermanagement", { lower: true }) },
      { title: "Tag: Sustainable-stormwater-management",   slug: slugify("tag_sustainablestormwatermanagement" , { lower: true }) },
      { title: "Tag: Young-engineer",    slug: slugify("tag_youngengineer" , { lower: true }) },
      { title: "Tag: Bearing-capacity",    slug: slugify("tag_bearingcapacity" , { lower: true }) },
      { title: "Tag: Climate-change-adaptation",   slug: slugify("tag_climatechangeadaptation" , { lower: true }) },
      { title: "Tag: Compaction",    slug: slugify("tag_compaction" , { lower: true }) },
      { title: "Tag: Erosion-control",  slug: slugify("tag_erosioncontrol"    , { lower: true }) },
      { title: "Tag: Foundation-design",   slug: slugify("tag_foundationdesign" , { lower: true }) },
      { title: "Tag: Geosynthesis",   slug: slugify("tag_geosynthesis" , { lower: true }) },
      { title: "Tag: Geotechnical-engineering",   slug: slugify("tag_geotechnicalengineering" , { lower: true }) },
      { title: "Tag: Hydrology",    slug: slugify("tag_hydrology" , { lower: true }) },
      { title: "Tag: Infrastructure",   slug: slugify("tag_infrastructure"  , { lower: true }) },
      { title: "Tag: Nigerian-construction",   slug: slugify("tag_nigerianconstruction"  , { lower: true }) },
      { title: "Tag: Pavement-design",   slug: slugify("tag_pavementdesign"  , { lower: true }) },
      { title: "Tag: Permeability",   slug: slugify("tag_permeability" , { lower: true }) },
      { title: "Tag: Quality-control-qc-nigeria",  slug: slugify("tag_qualitycontrol-qc-nigeria" , { lower: true }) },
      { title: "Tag: Sediment-control",   slug: slugify("tag_sedimentcontrol"  , { lower: true }) },
      { title: "Tag: Slope-stability",   slug: slugify("tag_slopestability"  , { lower: true }) },
      { title: "Tag: Soil-investigation",  slug: slugify("tag_soilinvestigation"  , { lower: true }) },
      { title: "Tag: Site-investigation",   slug: slugify("tag_siteinvestigation"  , { lower: true }) },
      { title: "Tag: Soil-mechanics",   slug: slugify("tag_soilmechanics" , { lower: true }) },
      { title: "Tag: Soil-properties",   slug: slugify("tag_soilproperties"  , { lower: true }) },
      { title: "Tag: Water-management",   slug: slugify("tag_watermanagement"  , { lower: true }) },
      { title: "Tag: Civil-engineers",   slug: slugify("tag_civilengineers" , { lower: true }) },
      { title: "Tag: Construction-proffesionals-in-nigeria",  slug: slugify("tag_constructionproffesionalsinnigeria" , { lower: true }) },
      { title: "Tag: Efficiency",   slug: slugify("tag_efficiency" , { lower: true }) },
      { title: "Tag: Nigeria-government-policy-makers",   slug: slugify("tag_nigeriagovtpolicymakers" , { lower: true }) },
      { title: "Tag: Quality-control",   slug: slugify("tag_qualitycontrol" , { lower: true }) },
      { title: "Tag: Urban-planners",   slug: slugify("tag_urbanplanners" , { lower: true }) },
      { title: "Tag: Sustainable-development",   slug: slugify("tag_sustainabledevelopment", { lower: true }) },
      { title: "Tag: Climate-change",   slug: slugify("tag_climatechange", { lower: true }) },
      { title: "Tag: Urban-areas",   slug: slugify("tag_urbanareas" , { lower: true }) },
      { title: "Tag: Urbanization",   slug: slugify("tag_urbanization"  , { lower: true }) },
      { title: "Tag: Drainage-planning",   slug: slugify("tag_drainageplanning" , { lower: true }) },
      { title: "Tag: Environmental-impact",  slug: slugify("tag_environmentalimpact"  , { lower: true }) },
      { title: "Tag: Nigeria-environment",   slug: slugify("tag_nigeriaenvironment"  , { lower: true }) },
      { title: "Tag: Urban-planning",   slug: slugify("tag_urbanplanning"  , { lower: true }) },
      { title: "Tag: Water-infrastructure",   slug: slugify("tag_waterinfrastructure"  , { lower: true }) },
      { title: "Tag: Nigeria-water-pollution",   slug: slugify("tag_nigeriawaterpollution"  , { lower: true }) },
      { title: "Tag: Urbanization-challenges",   slug: slugify("tag_urbanizationchallenges"  , { lower: true }) },
      { title: "Tag: Green-infrastructure",   slug: slugify("tag_greeninfrastructure"  , { lower: true }) },
      { title: "Tag: Resilient-cities",   slug: slugify("tag_resilientcities"  , { lower: true }) },
      { title: "Tag: Stormwater-mitigation",   slug: slugify("tag_stormwatermitigation"   , { lower: true }) },
      { title: "Tag: Sustainability",   slug: slugify("tag_sustainability"    , { lower: true }) },
      { title: "Tag: Water-sustainability",   slug: slugify("tag_watersustainability"    , { lower: true }) },
      { title: "Tag: Land-use-change",   slug: slugify("tag_landusechange"    , { lower: true }) },
      { title: "Tag: Urban-environment",    slug: slugify("tag_urbanenvironment"    , { lower: true }) },
      { title: "Tag: Urban-hydrology",    slug: slugify("tag_urbanhydrology"    , { lower: true }) },
      { title: "Tag: Urban-water-management",  slug: slugify("tag_urbanwatermanagement" , { lower: true }) },
      { title: "Tag: Bioswales",  slug: slugify("tag_bioswales"   , { lower: true }) },
      { title: "Tag: Low-impact-development",  slug: slugify("tag_lowimpactdevelopment"  , { lower: true }) },
      { title: "Tag: Permeable-pavement",   slug: slugify("tag_permeablepavement"  , { lower: true }) },
      { title: "Tag: Rain-barrels",   slug: slugify("tag_rainbarrels"   , { lower: true }) },
      { title: "Tag: Rain-gardens",   slug: slugify("tag_raingardens"  , { lower: true }) },
      { title: "Tag: Rain-water-harvesting",   slug: slugify("tag_rainwaterharvesting" , { lower: true }) },
      { title: "Tag: Stormwater-best-practices",   slug: slugify("tag_stormwaterbestpractices" , { lower: true }) },
      { title: "Tag: Stormwater-education",   slug: slugify("tag_stormwatereducation" , { lower: true }) },
      { title: "Tag: Stormwater-filtration", slug: slugify("tag_stormwaterfiltration" , { lower: true }) },
      { title: "Tag: Sustainable-urban-planning",   slug: slugify("tag_sustainableurbanplanning"  , { lower: true }) },
      { title: "Tag: Urban-runoff-mitigation",   slug: slugify("tag_urbanrunoffmitigation" , { lower: true }) },
      { title: "Tag: Water-conservation",   slug: slugify("tag_waterconservation" , { lower: true }) },
      { title: "Tag: Environmental-protection",   slug: slugify("tag_environmentalprotection"  , { lower: true }) },
      { title: "Tag: Green-solutions",   slug: slugify("tag_greensolutions"  , { lower: true }) },
      { title: "Tag: Stormwater-challenge",   slug: slugify("tag_stormwaterchallenge"  , { lower: true }) },
      { title: "Tag: Community-involvement",   slug: slugify("tag_communityinvolvement"  , { lower: true }) },
      { title: "Tag: Detective-systems",  slug: slugify("tag_detectivesystems"  , { lower: true }) },
      { title: "Tag: Drainage-systems-design-and-construction",   slug: slugify("tag_drainagesystemsdesignandconstruction"  , { lower: true }) },
      { title: "Tag: Ecological-rehabilitation-and-sustainability",   slug: slugify("tag_ecologicalrehabilitationandsustainability"  , { lower: true }) },
      { title: "Tag: Flood-management",   slug: slugify("tag_floodmanagement"  , { lower: true }) },
      { title: "Tag: Flood-prone-areas",   slug: slugify("tag_floodproneareas"  , { lower: true }) },
      { title: "Tag: Flood-proof-construction-techniques",   slug: slugify("tag_floodproofconstructiontechniques"  , { lower: true }) },
      { title: "Tag: Infrastructure-development",   slug: slugify("tag_infrastructuredevelopment"  , { lower: true }) },
      { title: "Tag: Mitigation-strategies",   slug: slugify("tag_mitigationstrategies"   , { lower: true }) },
      { title: "Tag: Preventative-measures",  slug: slugify("tag_preventativemeasures" , { lower: true }) },
      { title: "Tag: Restorative-engagement-strategies",  slug: slugify("tag_restorativeengagementstrategies" , { lower: true }) },
      { title: "Tag: Risk-awareness-and-planning",   slug: slugify("tag_riskawarenessandplanning"  , { lower: true }) },
      { title: "Tag: Asaba-drainage",   slug: slugify("tag_asabadrainage"  , { lower: true }) },
      { title: "Tag: Delta-drainage",  slug: slugify("tag_deltadrainage"  , { lower: true }) },
      { title: "Tag: Nigeria-drainage",  slug: slugify("tag_nigeriadrainage"  , { lower: true }) },
      { title: "Tag: Flooding",   slug: slugify("tag_flooding"  , { lower: true }) },
      { title: "Tag: Flooding-2018",   slug: slugify("tag_flooding2018"  , { lower: true }) },
      { title: "Tag: Flooding-2019",  slug: slugify("tag_flooding2019"  , { lower: true }) },
      { title: "Tag: Flooding-alert",   slug: slugify("tag_floodingalert", { lower: true }) },
      { title: "Tag: Flooding-cookie",  slug: slugify("tag_floodingcookie"  , { lower: true }) },
      { title: "Tag: Flooding-cookies",   slug: slugify("tag_floodingcookies" , { lower: true }) },
      { title: "Tag: Flooding-cookies-with-royal-icing",  slug: slugify("tag_floodingcookieswithroyalicing", { lower: true }) },
      { title: "Tag: Flooding-everywhere",    slug: slugify("tag_floodingeverywhere", { lower: true }) },
      { title: "Tag: Flooding-feeds",   slug: slugify("tag_floodingfeeds" , { lower: true }) },
      { title: "Tag: Flooding-friday",   slug: slugify("tag_floodingfriday"  , { lower: true }) },
      { title: "Tag: Flooding-icing",   slug: slugify("tag_floodingicing" , { lower: true }) },
      { title: "Tag: Flooding-ig",   slug: slugify("tag_floodingig" , { lower: true }) },
      { title: "Tag: Flooding-insta",    slug: slugify("tag_floodinginsta"  , { lower: true }) },
      { title: "Tag: Flooding-instagram",   slug: slugify("tag_floodinginstagram"  , { lower: true }) },
      { title: "Tag: Flooding-instagram-with-cute-pics-of-zeus",   slug: slugify("tag_floodinginstagramwithcutepicsofzeus", { lower: true }) },
      { title: "Tag: Flooding-in-texas",   slug: slugify("tag_floodingintexas"  , { lower: true }) },
      { title: "Tag: Flooding-my-timeline",   slug: slugify("tag_floodingmytimeline" , { lower: true }) },
      { title: "Tag: Flooding-rain",    slug: slugify("tag_floodingrain"  , { lower: true }) },
      { title: "Tag: Flooding-rains",   slug: slugify("tag_floodingrains"  , { lower: true }) },
      { title: "Tag: Flooding-river",   slug: slugify("tag_floodingriver" , { lower: true }) },
      { title: "Tag: Flooding-roads",   slug: slugify("tag_floodingroads"  , { lower: true }) },
      { title: "Tag: Floodings",   slug: slugify("tag_floodings"  , { lower: true }) },
      { title: "Tag: Flooding-sucks",   slug: slugify("tag_floodingsucks"  , { lower: true }) },
      { title: "Tag: Flooding-technique",   slug: slugify("tag_floodingtechnique"  , { lower: true }) },
      { title: "Tag: Flooding-your-news-feeds",   slug: slugify("tag_floodingyournewsfeeds"  , { lower: true }) },
      { title: "Tag: Flooding-your-time",   slug: slugify("tag_floodingyourtime"  , { lower: true }) },
      { title: "Tag: Flooding-your-timeline-today",  slug: slugify("tag_floodingyourtimelinetoday"  , { lower: true }) },
      { title: "Tag: Flooding-your-timelines",   slug: slugify("tag_floodingyourtimelines"  , { lower: true }) },
      { title: "Tag: Flooding-your-ig",   slug: slugify("tag_floodingyourig" , { lower: true }) },
      { title: "Tag: Storm-wreck",   slug: slugify("tag_stormwreck" , { lower: true }) },
      { title: "Tag: Stormwater-bmp",  slug: slugify("tag_stormwaterbmp" , { lower: true }) },
      { title: "Tag: Stormwater-cm",   slug: slugify("tag_stormwatercm" , { lower: true }) },
      { title: "Tag: Stormwater-compliance",   slug: slugify("tag_stormwatercompliance"  , { lower: true }) },
      { title: "Tag: Stormwater-creek",   slug: slugify("tag_stormwatercreek"  , { lower: true }) },
      { title: "Tag: Stormwater-design",   slug: slugify("tag_stormwaterdesign", { lower: true }) },
      { title: "Tag: Stormwater-drain",   slug: slugify("tag_stormwaterdrain" , { lower: true }) },
      { title: "Tag: Stormwater-drains",   slug: slugify("tag_stormwaterdrains" , { lower: true }) },
      { title: "Tag: Stormwater-engineering",   slug: slugify("tag_stormwaterengineering" , { lower: true }) },
      { title: "Tag: Stormwater-runoffs",   slug: slugify("tag_stormwaterrunoffs" , { lower: true }) },
      { title: "Tag: Stormwater-harvesting",   slug: slugify("tag_stormwaterharvesting" , { lower: true }) },
      { title: "Tag: Stormwater-360",   slug: slugify("tag_stormwater360" , { lower: true }) },
      { title: "Tag: Stormwater-australia",   slug: slugify("tag_stormwateraustralia" , { lower: true }) },
      { title: "Tag: Stormwater-fact-of-the-day",   slug: slugify("tag_stormwaterfactoftheday" , { lower: true }) },
      { title: "Tag: Stormwater-pollution",   slug: slugify("tag_stormwaterpollution" , { lower: true }) },
      { title: "Tag: Stormwater-pollution-prevention",   slug: slugify("tag_stormwaterpollutionprevention" , { lower: true }) },
      { title: "Tag: Stormwater-pond",    slug: slugify("tag_stormwaterpond" , { lower: true }) },
      { title: "Tag: Stormwater-retention",  slug: slugify("tag_stormwaterretention" , { lower: true }) },
      { title: "Tag: Stormwater-savvy",   slug: slugify("tag_stormwatersavvy" , { lower: true }) },
      { title: "Tag: Stormwater-smart",    slug: slugify("tag_stormwatersmart"  , { lower: true }) },
      { title: "Tag: Stormwater-treatment",  slug: slugify("tag_stormwatertreatment", { lower: true }) },
      { title: "Tag: Stormwater-systems",   slug: slugify("tag_stormwatersystems", { lower: true }) },
      { title: "Tag: Stormwater-system",   slug: slugify("tag_stormwatersystem", { lower: true }) },
      { title: "Tag: Stormwater-stewards",  slug: slugify("tag_stormwaterstewards", { lower: true }) },
      { title: "Tag: Stormwater-pit",  slug: slugify("tag_stormwaterpit" , { lower: true }) },
      { title: "Tag: Stormwater-pipe",   slug: slugify("tag_stormwaterpipe"  , { lower: true }) },
      { title: "Tag: Stormwater-maintenance",   slug: slugify("tag_stormwatermaintenance"  , { lower: true }) },
      { title: "Tag: Stormwater-hawaii",   slug: slugify("tag_stormwaterhawaii" , { lower: true }) },
      { title: "Tag: Stormwater-awareness-week",  slug: slugify("tag_stormwaterawarenessweek"     , { lower: true }) },
      { title: "Tag: Stormwater-studios",   slug: slugify("tag_stormwaterstudios"   , { lower: true }) },
      { title: "Tag: Stormwater-sydney",   slug: slugify("tag_stormwatersydney"   , { lower: true }) },
      { title: "Tag: Flooding-the-timeline",  slug: slugify("tag_floodingthetimeline", { lower: true }) },
      { title: "Tag: Flooding-timelines-today",   slug: slugify("tag_floodingtimelinestoday"   , { lower: true }) },
      { title: "Tag: Flooding-the-streets",  slug: slugify("tag_floodingthestreets"   , { lower: true }) },
      { title: "Tag: Flooding-timelines-tonight",   slug: slugify("tag_floodingtimelinestonight"   , { lower: true }) },
      { title: "Tag: Flooding-video",  slug: slugify("tag_floodingvideo"  , { lower: true }) },
      { title: "Tag: Flooding-waters",  slug: slugify("tag_floodingwaters"   , { lower: true }) },
      { title: "Tag: Flooding-yall",  slug: slugify("tag_floodingyall"    , { lower: true }) },
      { title: "Tag: Flooding-yall-timeline", slug: slugify("tag_floodingyalltimeline"  , { lower: true }) },
      { title: "Tag: Stormwater-aware",  slug: slugify("tag_stormwateraware" , { lower: true }) },
      { title: "Tag: Flooding-your-tl",  slug: slugify("tag_floodingyourtl"  , { lower: true }) },
      { title: "Tag: Flooding-the-gram",   slug: slugify("tag_floodingthegram"  , { lower: true }) },
      { title: "Tag: Engineering-challenges",  slug: slugify("tag_engineeringchallenges"  , { lower: true }) },
      { title: "Tag: Engineering-challenges-2020",  slug: slugify("tag_engineeringchallenges2020" , { lower: true }) },
      { title: "Tag: Engineering-challenges-for-students",  slug: slugify("tag_engineeringchallengesforstudents" , { lower: true }) },
      { title: "Tag: Engineering-challenges-of-the-21st-century",  slug: slugify("tag_engineeringchallengesofthe21stcentury", { lower: true }) },
      { title: "Tag: Engineering-codes",   slug: slugify("tag_engineeringcodes", { lower: true }) },
      { title: "Tag: Engineering-professionals",   slug: slugify("tag_engineeringprofessionals" , { lower: true }) },
      { title: "Tag: Young-engineers",   slug: slugify("tag_youngengineers" , { lower: true }) },
      { title: "Tag: Young-engineers-bricks-challenge",   slug: slugify("tag_youngengineersbrickschallenge", { lower: true }) },
      { title: "Tag: Young-engineers-fellowship",   slug: slugify("tag_youngengineersfellowship" , { lower: true }) },
      { title: "Tag: Young-engineers-program",   slug: slugify("tag_youngengineersprogram" , { lower: true }) },
      { title: "Tag: British-standard-codes",   slug: slugify("tag_britishstandardcodes" , { lower: true }) },
      { title: "Tag: Eurocodes",   slug: slugify("tag_eurocodes" , { lower: true }) },
      { title: "Tag: European-standard-codes",   slug: slugify("tag_europeanstandardcodes" , { lower: true }) },
      { title: "Tag: Engineering-practice",  slug: slugify("tag_engineeringpractice", { lower: true }) },
      { title: "Tag: Engineering-works",  slug: slugify("tag_engineeringworks" , { lower: true }) },
      { title: "Tag: Engineering-workshop",   slug: slugify("tag_engineeringworkshop"  , { lower: true }) },
      { title: "Tag: Professional-efficiency",  slug: slugify("tag_professionalefficiency" , { lower: true }) },
      { title: "Tag: Quality-engineering-jobs",  slug: slugify("tag_qualityengineeringjobs" , { lower: true }) },
      { title: "Tag: Engineer",  slug: slugify("tag_engineer"  , { lower: true }) },
      { title: "Tag: Mentorship",   slug: slugify("tag_mentorship"  , { lower: true }) },
      { title: "Tag: Training",  slug: slugify("tag_training"  , { lower: true }) },
      { title: "Tag: Dynamic-world",  slug: slugify("tag_dynamicworld"  , { lower: true }) },
      { title: "Tag: Scientific-and-natural-laws", slug: slugify("tag_scientificandnaturallaws"  , { lower: true }) },
      { title: "Tag: Hydraulic-engineering",   slug: slugify("tag_hydraulicengineering" , { lower: true }) },
      { title: "Tag: Projects",  slug: slugify("tag_projects" , { lower: true }) },
      { title: "Tag: And-rivers-in-delta-state-of-nigeria",  slug: slugify("tag_andriversindeltastateofnigeria" , { lower: true }) },
      { title: "Tag: Effurun",  slug: slugify("tag_effurun"  , { lower: true }) },
      { title: "Tag: Including-existing-drains-in-asaba",  slug: slugify("tag_includingexistingdrainsinasaba" , { lower: true }) },
      { title: "Tag: Natural-water-courses",  slug: slugify("tag_naturalwatercourses" , { lower: true }) },
      { title: "Tag: Well-researched-studies-were-conducted-over-entire-flood-proneareas",  slug: slugify("tag_wellresearchedstudieswereconductedoverentirefloodproneareas" , { lower: true }) },
      { title: "Tag: Best-practices-in-stormwater-construction",  slug: slugify("tag_bestpracticesinstormwaterconstruction"   , { lower: true }) },
      { title: "Tag: Construction-stormwater",  slug: slugify("tag_constructionstormwater"   , { lower: true }) },
      { title: "Tag: Developing-and-remediations-of-basins",   slug: slugify("tag_developingandremediationsofbasins"   , { lower: true }) },
      { title: "Tag: Erosion-control-construction-and-stormwater-management",  slug: slugify("tag_erosioncontrolconstructionandstormwatermanagement"   , { lower: true }) },
      { title: "Tag: Permits-for-stormwater-systems-on-construction-sites",  slug: slugify("tag_permitsforstormwatersystemsonconstructionsites"  , { lower: true }) },
      { title: "Tag: Sediment-control-and-stormwater",   slug: slugify("tag_sedimentcontrolandstormwater"   , { lower: true }) },
      { title: "Tag: Standards-and-guidelines-for-construction",   slug: slugify("tag_standardsandguidelinesforconstruction"   , { lower: true }) },
      { title: "Tag: Stormwater-construction",   slug: slugify("tag_stormwaterconstruction"  , { lower: true }) },
      { title: "Tag: Stormwater-controls-for-construction",   slug: slugify("tag_stormwatercontrolsforconstruction"  , { lower: true }) },
      { title: "Tag: Stormwater-infrastructure",   slug: slugify("tag_stormwaterinfrastructure"   , { lower: true }) },
      { title: "Tag: Stormwater-solutions-for-construction-sites",   slug: slugify("tag_stormwatersolutionsforconstructionsites"  , { lower: true }) },
      { title: "Tag: Training-in-stormwater-for-construction-purposes",   slug: slugify("tag_traininginstormwaterforconstructionpurposes" , { lower: true }) },
      { title: "Tag: Dangers-of-flood-in-nigeria",   slug: slugify("tag_dangersoffloodinnigeria"  , { lower: true }) },
      { title: "Tag: Devastating-nigeria-landslide-and-flooding",   slug: slugify("tag_devastatingnigerialandslideandflooding"  , { lower: true }) },
      { title: "Tag: Disaster-relief-inaction-for-flood-victims-in-nigeria",  slug: slugify("tag_disasterreliefinactionforfloodvictimsinnigeria", { lower: true })},
      { title: "Tag: Extreme-heat-cause-storm-to-last-in-nigeria",   slug: slugify("tag_extremeheatcausestormtolastinnigeria" , { lower: true }) },
      { title: "Tag: Fighting-the-rising-waters-from",  slug: slugify("tag_fightingtherisingwatersfrom" , { lower: true }) },
      { title: "Tag: Flooding-in-nigeria",   slug: slugify("tag_floodinginnigeria"  , { lower: true }) },
      { title: "Tag: Flooding-situation-in-igeria",   slug: slugify("tag_floodingsituationinigeria"  , { lower: true }) },
      { title: "Tag: Heavy-rainfall-has-ruined-many-nigeria-homes",  slug: slugify("tag_heavyrainfallhasruinedmanynigeriahomes" , { lower: true }) },
      { title: "Tag: Nigeria-devastating-flood",   slug: slugify("tag_nigeriadevastatingflood" , { lower: true }) },
      { title: "Tag: Nigeria-flooding",  slug: slugify("tag_nigeriaflooding" , { lower: true }) },
      { title: "Tag: Rainfall-in-nigeria-floods",   slug: slugify("tag_rainfallinnigeriafloods" , { lower: true }) },
      { title: "Tag: Severe-weather-in-nigeria-inundation",   slug: slugify("tag_severeweatherinnigeriainundation" , { lower: true }) },
      { title: "Tag: Detention-basins-and-pump-systems",   slug: slugify("tag_detentionbasinsandpumpsystems"  , { lower: true }) },
      { title: "Tag: Engineering-hydrology-techniques",   slug: slugify("tag_engineeringhydrologytechniques" , { lower: true }) },
      { title: "Tag: Gabion-systems",  slug: slugify("tag_gabionsystems" , { lower: true }) },
      { title: "Tag: Permits-and-guidance-for-surface-drainage",  slug: slugify("tag_permitsandguidanceforsurfacedrainage" , { lower: true }) },
      { title: "Tag: Rain-garden-solutions",   slug: slugify("tag_raingardensolutions"  , { lower: true }) },
      { title: "Tag: Rain-harvest-systems",   slug: slugify("tag_rainharvestsystems" , { lower: true }) },
      { title: "Tag: Roofdrains-and-downpipe-systems",  slug: slugify("tag_roofdrainsanddownpipesystems" , { lower: true }) },
      { title: "Tag: Stormwater-runoff-solutions",  slug: slugify("tag_stormwaterrunoffsolutions"  , { lower: true }) },
      { title: "Tag: Surface-and-belowground-drainage",   slug: slugify("tag_surfaceandbelowgrounddrainage"  , { lower: true }) },
      { title: "Tag: Community-engagement",  slug: slugify("tag_communityengagement"  , { lower: true }) },
      { title: "Tag: Education",  slug: slugify("tag_education"  , { lower: true }) },
      { title: "Tag: Environmental-education",   slug: slugify("tag_environmentaleducation"  , { lower: true }) },
      { title: "Tag: Water-shed-management",  slug: slugify("tag_watershedmanagement"  , { lower: true }) },
      { title: "Tag: Building-practices-in-nigeria",  slug: slugify("tag_buildingpracticesinnigeria"  , { lower: true }) },
      { title: "Tag: Civil-engineering-practices-in-nigeria",   slug: slugify("tag_civilengineeringpracticesinnigeria" , { lower: true }) },
      { title: "Tag: Construction-practices-in-nigeria",   slug: slugify("tag_constructionpracticesinnigeria" , { lower: true }) },
      { title: "Tag: Design-engineering-services-in-nigeria",   slug: slugify("tag_designengineeringservicesinnigeria"  , { lower: true }) },
      { title: "Tag: Development-and-planning-in-nigeria",  slug: slugify("tag_developmentandplanninginnigeria", { lower: true }) },
      { title: "Tag: Project-management",  slug: slugify("tag_projectmanagement" , { lower: true }) },
      { title: "Tag: Environmental-engineering-practices-in-nigeria",  slug: slugify("tag_environmentalengineeringpracticesinnigeria"   , { lower: true }) },
      { title: "Tag: Professional-practices-in-nigeria",   slug: slugify("tag_professionalpracticesinnigeria" , { lower: true }) },
      { title: "Tag: Safety-practices-in-nigeria",   slug: slugify("tag_safetypracticesinnigeria"  , { lower: true }) },
      { title: "Tag: Sustainable-engineering-practices-in-nigeria",    slug: slugify("tag_sustainableengineeringpracticesinnigeria" , { lower: true }) },
      { title: "Tag: Technical-engineering-practices-in-nigeria",   slug: slugify("tag_technicalengineeringpracticesinnigeria"   , { lower: true }) },
      { title: "Tag: Value-engineering-practices-in-nigeria", slug: slugify("tag_valueengineeringpracticesinnigeria", { lower: true })  }  
    ];
    const tags = await Tag.insertMany(tagsData);
    console.log("✅ Tags seeded");

        // --- Services ---
    const servicesData = [
      {
        title: "Engineering Surveys",
        slug: slugify("Engineering Surveys", { lower: true }),
        description: "We carry out activities that are involved in the planning and execution of surveys for the development, design, construction, operation and maintenance of civil and other engineered projects. Our engineering survey is a specialty job within the broader professional practice of engineering  and includes all surveying activities required to support the conception, planning, design, construction, maintenance, and operation of engineered projects...",
      },
      {
        title: "Feasibility And Economic Studies",
        slug: slugify("Feasibility And Economic Studies", { lower: true }),
        description: " At Jefcon & Associates Ltd, we understand the importance of thorough feasibility and economic studies in determining the viability of a construction project.Our team of experts has extensive experience in conducting comprehensive studies that help our clients make informed decisions. Our technical feasibility study essentially supports the financial information of each organization.We study every project's required input, processes, output, fields, programs and procedures, for long term planning and troubleshooting..."
      },
      {
        title: "Environmental Impact Studies And Management",
        slug: slugify("Environmental Impact Studies And Management", { lower: true }),
        description: "We are experts in Environmental Impact studies and Management, carried out in two major folds. We perform Environmental Impact Accessment (EIA) as a statutory procedure to define the environmental impacts of a project, as well as to promote communication to and involvement of citizens, even in the early stages of a project.  Our Environmental Impact Study(EIS) provides sufficient levels of detail to demonstrate that a proposed development will have no negative impacts on the natural features or ecological functions of the subject and surrounding('adjacent') lands."
      },
      {
        title: "Advisory Services In Engineering",
        slug: slugify("Advisory Services In Engineering", { lower: true }),
        description: "We utilise our reservoire of experience for consulting services from which we develop findings, conclusions and recommendations that are presented to the client for consideration and decision making. We apply high- level civil engineering principles alongside analytical, practical and engineering skills and techniques. From civil engineering perspectives, we provide expert advice on the design, planning and management of civil construction projects, covering all types of residential and commercial construction, particularly in the area of larger public infrastructure projects..."
      },
      {
        title: "Project Costing, Valuation And Tender Analysis",
        slug: slugify("Project Costing, Valuation And Tender Analysis", { lower: true }),
        description: " With a seasoned team of Quantity surveyors who can provide a full system of budget estimate and cost planning, expenditure is controlled and clients receive better value for money in both design and construction, and project costs are kept within an agreed budget. We prepare initial budget costs established by reference to cost data from previous projects.Our constant monitoring means that the risk of overspending can be seen at an early stage and prompt action taken..."
      },
      {
        title: "Engineering Design And Construction",
        slug: slugify("Engineering Design And Construction", { lower: true }),
        description: "We offer quality services in Architectural designs, Landscaping, Modelling and Reviewing contractor's work measurement and Evaluations. We find creative ways to solve real- world problems and develop the physical infrastructure for society to exist - from bridges to houses, and from roads to hospitals and train stations.  We apply high-level civil engineering principles alongside analytical, practical and engineering skills and techniques..."
      },
      {
        title: "Project Supervision And Management",
        slug: slugify("Project Supervision And Management", { lower: true }),
        description: "Our function in your project management is to ensure that the project objectives are achieved within the planned budget and schedule. Our methods ensure, among other things, the smooth continuation of the project while the project manager is away or if the project manager is replaced.  We pride ourselves on our expertise in this aspect of engineering. Our team of experienced professionals ensures that your construction project is completed on time, within budget, and to the highest quality standards.."
      },
    ];
    const services = await Service.insertMany(servicesData);
    console.log("✅ Services seeded");

    // --- Projects ---
    const projectsData = [
      {
        title: "Drone Survey Project",
        slug: slugify("Drone Survey Project", { lower: true }),
        description: "Using drones for topographical surveys",
      },
      {
        title: "Stormwater Flooding Control Project",
        slug: slugify("Stormwater Flooding Control Project", { lower: true }),
        description: "Implementing stormwater flooding control solutions",
      },
      {
        title: "Gallery 1 Project",
        slug: slugify("Gallery 1 Project", { lower: true }),
        description: "Gallery 1 project solutions",
      }
    ];
    const projects = await Project.insertMany(projectsData);
    console.log("✅ Projects seeded");

    // --- FAQs ---
    const faqsData = [
      {
        title: "Faq about Construction Services",
        slug: slugify("Faq about Construction Services", { lower: true }),
        description: "FAQs about participation in our engineering projects.",
        questions: [
          {
            question: "How Do I Get A Quote For My Project?",
            answer: "You can contact us through our website, by phone, or by visiting our office. We will schedule a consultation to discuss your project and provide a quote.",
          },
          {
            question: "How Long Does A Construction Project Take?",
            answer: "The length of a construction project depends on the scope and complexity of the project. We will provide a project timeline and schedule with your quote.",
          },
          {
            question: "Can I Make Changes To My Project?",
            answer: "Yes, we understand that changes can occur during construction. We will work with you to accommodate changes and provide a change order to update the scope and cost of the project.",
          },
          {
            question: "What Kind Of Warranty Do You Offer?",
            answer: "We offer a [length]-year warranty on all our construction projects.",
          },
          {
            question: "How Do You Ensure Quality Workmanship?",
            answer: "We have a quality control process in place to ensure that all work meets our high standards.",
          },
        ],
      },
      {
        title: "Faq about Consultancy Services",
        slug: slugify("Faq about Consultancy Services", { lower: true }),
        description: "FAQs about consultancy management services at Jefcon and Associates Ltd.",
        questions: [
          {
            question: "What does the FAQ section cover?",
            answer: "This FAQ page covers topics related to Jefcon's services, process, payment, warranty, safety, quality and customer service."
          },
          {
            question: "What is JEFCON?",
            answer: "Jefcon & Associates Ltd is a Civil Engineering Consulting Firm with high precision GNSS data acquisition solutions and capacities for various civil engineering services."
          },
          {
            question: "What Types Of Services Do We Offer?",
            answer: "We offer a wide range of construction services, including residential and commercial building, remodeling, renovation, and repair."
          },
          {
            question: "What Areas Do We Serve?",
            answer: "We serve the entire 36 states in Nigeria, including other African Countries."
          },
          {
            question: "Do You Offer Financing Options?",
            answer: "Yes, we partner with financing companies to offer options for our clients."
          },
          {
            question: "How Do I Contact Your Customer Service Team?",
            answer: "You can contact us through our website, by phone, or by email. We respond promptly to all inquiries."
          },
          {
            question: "What Are Your Business Hours?",
            answer: "Our business hours are from 8AM to 5PM, from Mondays to Friday."
          }
        ],
      },
      {
        title: "Faq about Stormwater Management Services",
        slug: slugify("Faq about Stormwater Management Services", { lower: true }),
        description: "FAQs about stormwater management services at Jefcon and Associates Ltd.",
        questions: [
          {
            question: "How Do I Request Service Or Support For My Project?",
            answer: "You can contact us through our website, by phone, or by visiting our office. We will schedule a consultation to discuss your project and provide a quote."
          },
          {
            question: "Are Your Workers Insured?",
            answer: "Yes, all our workers are fully insured with worker's compensation and liability insurance."
          },
          {
            question: "What Kind Of Materials Do You Use?",
            answer: "e use only high-quality materials from reputable suppliers."
          },
          {
            question: "What Safety Measures Do You Take On Site?",
            answer: "We take safety very seriously and follow all industry standards and regulations to ensure a safe working environment.."
          }
        ],
      },
      {
        title: "Faq about Participation on our website",
        slug: slugify("Faq about Participation on our website", { lower: true }),
        description: "FAQs about participation in our construction, engineering projects at Jefcon and Associates Ltd.",
        questions: [
          {
            question: "What services does Jefcon Associates provide?",
            answer: "We specialize in environmental consultancy, advisory services, project planning, and engineering solutions tailored to your needs.",
          },
          {
            question: "Where is Jefcon Associates located?",
            answer: "We are headquartered in Nigeria, but we work with clients globally through both onsite and remote engagements.",
          },
          {
            question: "How can I participate on the Jefcon website?",
            answer: "You can sign up, post comments, and submit project proposals."
          },
          {
            question: "How Do I Pay For My Project?",
            answer: "We accept various payment methods, including credit cards, checks, and financing options."
          },
          {
          question: "Do You Handle Permits And Code Compliance?",
            answer: "Yes, we handle all necessary permits and ensure that our work complies with local building codes and regulations."
          }
        ],
      }
    ];
    const faqs = await Faq.insertMany(faqsData);
    console.log("✅ Faqs seeded");

    // --- Blogs ---
    const blogsData = [
      {
        title:  "Preventing Stormwater Pollution: Implementing Effective QC For Drainage Systems In Nigeria",
        slug: slugify("Preventing Stormwater Pollution: Implementing Effective QC For Drainage Systems In Nigeria", { lower: true }),
        content: "Stormwater, the water that runs off impervious surfaces during rainfall, is a critical element in urban environments. This article delves into the environmental ramifications of polluted runoff, examines Nigeria's environmental regulations, and outlines essential QC measures for stormwater management Nigeria....",
        categories: [categories[0]._id],             
        archive: [archives[0]._id],
        tags: tags.slice(0, 18).map(t => t._id), 
        createdAt: new Date("2025-06-29T01:17:00Z"),
      },
      {
        title: "Understanding Geotechnical Considerations for Stormwater Drainage QC in Nigeria",
        slug: slugify("Understanding Geotechnical Considerations for Stormwater Drainage QC in Nigeria", { lower: true }),
        content:  "In civil engineering, the success of stormwater drainage systems depends heavily on geotechnical considerations. The interplay between soil properties and ground conditions directly impacts the quality, durability, and long-term functionality of these systems. In Nigeria, with its diverse soil profiles and environmental challenges, incorporating geotechnical insights into quality control (QC) processes is essential. This article delves into the importance of soil investigation, permeability tests, and slope stability analysis for effective stormwater drainage design and maintenance...",
        tags: tags.slice(0, 20).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2025-04-12T09:19:00Z"),
      },
      {
        title: "Best Practices For Concrete Work In Stormwater Drainage: Quality Control for Durability in Nigerian Climates",
        slug: slugify("Best Practices For Concrete Work In Stormwater Drainage: Quality Control for Durability in Nigerian Climates", { lower: true }),
        content:  "Quality Control for Durability in Nigerian Climates Concrete forms the backbone of stormwater drainage systems, providing the strength and durability needed to withstand environmental stresses. In Nigeria, where heavy rainfall and fluctuating temperatures often challenge infrastructure, ensuring the quality and longevity of concrete used in stormwater systems is vital. This article explores best practices for concrete quality control (QC), focusing on suitable concrete types for Nigerian conditions and key tests to ensure strength, water-cement ratio, and proper curing....",
        tags: tags.slice(0, 9).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2025-07-29T12:59:00Z")
      },
      {
        title: "Ensuring Stormwater Drainage System Efficiency",
        slug: slugify("Ensuring Stormwater Drainage System Efficiency", { lower: true }),  
        content:   "In Nigeria, the increasing frequency of flooding and urban waterlogging underscores the critical need for effective stormwater drainage systems. These systems are essential for managing rainwater runoff, protecting infrastructure, and safeguarding public health....",
        tags: tags.slice(0, 5).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2024-06-15T10:20:00Z")
      },
      {
        title:  "Challenges of Storm Water Management In Urban Areas of Nigeria: A Critical Analysis",
        slug: slugify("Challenges of Storm Water Management In Urban Areas of Nigeria: A Critical Analysis", { lower: true }),  
        content: "Rapid urbanization in Nigeria, particularly in its major cities, has led to a significant increase in the volume and intensity of stormwater runoff, posing a growing threat to public safety, infrastructure, and the environment. This paper critically analyzes the various challenges associated with stormwater management in urban areas of Nigeria. It explores the interconnected nature of these challenges, encompassing inadequate infrastructure, rapid population growth, poor urban planning, and a lack of financial and institutional capacity. The paper also discusses the implications of climate change, which is exacerbating existing challenges and demanding innovative solutions. By examining the root causes and proposing potential mitigation strategies, this paper aims to contribute to the development of effective and sustainable stormwater management practices in Nigerian cities....",
        tags: tags.slice(0, 8).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2024-05-29T10:51:00Z")
      },
      {
        title: "Evaluating The Success And Effectiveness Of Existing Drainage Systems For Managing Rainwater Runoff In Nigeria",
        slug: slugify("Evaluating The Success And Effectiveness Of Existing Drainage Systems For Managing Rainwater Runoff In Nigeria", { lower: true }),  
        content: "This article aims to evaluate the success and effectiveness of existing drainage systems in Nigeria, focusing on their ability to manage rainwater runoff...",
        tags: tags.slice(0, 9).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2024-04-15T11:47:00Z")
      },
      {
        title: "Addressing Nigeria's Water Pollution Crisis",
        slug: slugify("Addressing Nigeria's Water Pollution Crisis", { lower: true }),  
        content:  "The role of stormwater management in addressing pollution. Nigeria, the most populous country in Africa, is grappling with a severe environmental crisis – water pollution...",
        tags: tags.slice(0, 2).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2024-03-19T10:41:00Z")
      },
      {
        title: "The Urgent Need For Sustainable Management Engineering Pracices",
        slug: slugify("The Urgent Need For Sustainable Management Engineering Pracices", { lower: true }),    
        content:
        "As urbanization continues, the impacts of land-use change on urban hydrology become increasingly severe, Without sustainable stormwater management practices, cities will face more frequent and severe flooding, erosion, and water pollution....",
        tags: tags.slice(0, 8).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2024-02-07T02:43:00Z")
      },
      {
        title: "The Relationship Between Land-use Change And Urban Hydrology",
        slug: slugify("The Relationship Between Land-use Change And Urban Hydrology", { lower: true }),    
        content: "Land-use change refers to the human alteration of landscapes for various purposes, such as urban development, transportation, agriculture, and forestry. Urban hydrology, on the other hand, is the study of water movement, storage, and quality in urban areas, including the impacts of human activities on the water cycle...",
        tags: tags.slice(0, 6).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2023-11-01T02:58:00Z")
      },
      {
        title:  "Examples of Sustainable Stormwater Management Practices In Urban Areas",
        slug: slugify("Examples of Sustainable Stormwater Management Practices In Urban Areas", { lower: true }),    
        content:  "Urbanization and development often result in changes to natural land surfaces, leading to increased impervious surfaces and reduced vegetation. This alteration leads to higher volumes of rainwater runoff, which can overwhelm urban drainage systems and lead to flooding, erosion, and pollution. To manage these impacts, sustainable stormwater management practices that mimic natural processes are necessary. Here are three examples of such practices...",
        tags: tags.slice(0, 14).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2024-01-04T01:16:00Z")
      },
      {
        title: "Challenges Posed By Traditional Storm Water Management Practices",
        slug: slugify("Challenges Posed By Traditional Storm Water Management Practices", { lower: true }),    
        content:  "Traditional stormwater management practices, such as curbs, gutters, and storm sewers, were designed to convey runoff away from urban areas and into water bodies. However, these systems often fail to handle the increased runoff from land-use change, leading to flooding and infrastructure damage..",
        tags: tags.slice(0, 6).map(t => t._id),        
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2023-12-20T05:57:00Z")
      },
      {
        title: "Navigating The Risk Of Floods: Civil Engineering Strategies For Managing Flood-Prone Areas",
        slug: slugify("Navigating The Risk Of Floods: Civil Engineering Strategies For Managing Flood-Prone Areas", { lower: true }),    
        content: "Flooding is a major concern in many areas, causing damage and destruction to homes, businesses, and communities. In addition to the physical damage, floods can lead to significant economic losses. Several Civil engineering strategies can help manage and reduce the risk of floods in flood-prone areas...",
        tags: tags.slice(0, 12).map(t => t._id),        
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2023-01-30T08:30:00Z")
      },
      {
        title: "Oil Hubs in Delta State, Nigeria",
        slug: slugify("Oil Hubs in Delta State, Nigeria", { lower: true }),    
        content: "Warri and Effurun as shown in the figure, are located on Latitudes 5o27’ N and 5o36’ N and Longitudes 5o40’ E and 5o48’ E.  They sit on the bank of Warri River which joined Forcados, and Escravos Rivers through Jones Creek in the lower Niger Delta Region to the Atlantic Ocean. Studies have shown this region to have moderate rainfall and humidity from May to October.  Experience has shown it to have a short dry season from December to March, making construction activities to be at their peak during these months.  The natural vegetation predominant in this region is a rain forest with swamp forest in some areas.  Warri is one of the oldest cities found within the lower Niger of Nigeria.  The city is described as a low-lying plain that consists mainly of unconsolidated sediments of Quaternary age.  The sediments are partly of marine and fluvial origin...",
        tags: tags.slice(0, 29).map(t => t._id), 
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2021-06-19T11:01:00Z")
      },
      {
        title: "Tributaries To The River Niger Within Asaba, Delta State, Nigeria",
        slug: slugify("Tributaries To The River Niger Within Asaba, Delta State, Nigeria", { lower: true }),      
        content: "Asaba is situated at the western bank of River Niger, overlooking the point where the Anambra River flows into it.  It is sandwiched between Anwai in the North, Issele-Azagba in the West, Ibusa in the South, and River Niger in the East.The eastern axis of the territory is marked with low relief that falls to about 22 metres above mean sea level, while the western axis shows the features of high relief that rises to about 175 metres above mean sea level. Asaba has a large population of Igbo- speaking people, but her position as Delta State Capital has brought her a cosmopolitan population drawn from other ethnic nationalities such as Urhobo, Isoko, Ijaw, Itsekiri, Hausa and Yoruba people, etc. Its geographical location lies and this plain is sitting in a flat terrain, which is between 44m & 41m.There are some nature - based drainage routes that are tributaries to River Niger within Asaba, such as Iyi- Abi that is in the South, and Anwai River in the North - East. region of Delta State. The project section covers only an area of about 8, 521.24 hectares(85.212 - sqkm)...",
        tags: tags.slice(0, 32).map(t => t._id),       
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2021-05-26T11:01:00Z")
      },
      {
        title: "Flooding: A Global Warming Aftermath",
        slug: slugify("Flooding: A Global Warming Aftermath", { lower: true }),      
        content:  "Climate change which is a direct effect of global warming has brought extreme weather changes to our environment, such as sea-level rise, more frequent rainfall with its associated flooding.  The effects of these extreme changes have brought more flooding in our Cities, especially Asaba, Warri, Effurun, and Environs since they lie within the Niger Delta region of Southern Nigeria. Despite these extreme weather changes from global warming, less attention is being given to the management, and control of stormwater by the government. The excess stormwater leads to the loss of agricultural farmlands, contamination of groundwater and rivers, and loss of lives and property of immeasurable values. Today, due to the global climate change, Asaba, Warri, Effurun, and its environs are experiencing more months and frequent rainfall rather than the old known pattern of six months dry and six months rainy seasons.  The effect on these cities and environs has defied the efficacy of existing drainage systems put in place by government and corporate bodies over the years.  Hence, there was an urgent need by the government of Delta State to study and construct sustainable drainage systems for the management and control of Stormwater in Asaba, Warri, Effurun, and Environs. This desire led to the Engineering Study and Design conducted in Asaba, Warri, Effurun, and Environs.  Using interviews of locals, participatory meetings, and engineering surveys more in-depth knowledge of the flooding and causes was gathered. The study looked at how overland drainages can be incorporated into nature-based gifts, such as Valleys, Waterways, and Rivers for the safe evacuation of the excess runoff generated from the environment. Results obtained showed that improving the efficiency of these Natural Watercourses and Rivers would bring better management and control of the outfalls of both existing and new drainages into these Natural Watercourses. For this to be successful, the inhabitants must be aware of the environmental hazards associated with blocking of Valleys and Waterways with structures and dumping of waste materials into Storm Sewers and Drains, which would create blockages for the efficient evacuation of the Stormwater generated from the Environment...",
        tags: tags.slice(0, 78).map(t => t._id),
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2021-04-29T03:23:00Z")
      },
      {
        title: "Recommended Actions For A Young Engineer-1",
        slug: slugify("Recommended Actions For A Young Engineer-1", { lower: true }),      
        content:  "This is one of the greatest steps to make you succeed as a professional engineer. As an Engineer, you must have that strong desire and willingness to learn new technical skills and apply the scientific and mathematical principles acquired during your engineering education. This will enable you to create engineering designs in accordance with the code of practice and standards governing the engineering profession, which products will meet all safety and structural requirements for the comfort of mankind...",
        tags: tags.slice(0, 12).map(t => t._id),        
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2021-01-15T01:06:00Z")
      },
      {
        title: "Recommended Actions For A Young Engineer-2",
        slug: slugify("Recommended Actions For A Young Engineer-2", { lower: true }),      
        content: "Imagination is another challenge to a young engineer’s career. An engineer must have the power of imagination. Every engineering product is a creation of the engineer’s imagination from the astral world. Such imagination should transform into an acceptable and useful product for the sustainability of the environment and mankind. An engineer is a philosopher who can create ideas from the astral environment and by his application of the scientific and natural laws, make life meaningful for man and his environment.  So, if one is not capable of doing so, then one is in the wrong profession...",
        tags: tags.slice(0, 5).map(t => t._id),         
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2021-04-07T01:07:00Z")
      },
      {
        title: "Working With Standard Engineering Codes",
        slug: slugify("Working With Standard Engineering Codes", { lower: true }),        
        content:  "The engineering profession is guided by standards, codes, and ethics of practice which set minimum safety guides for the profession.  However, because we are in a dynamic world with lots of complexity occurring daily, the codes of practice have also become revolutionised with many countries coming out with their codes of practice to suit the dynamics of their environment. For this reason, the <strong>British Standard (BS) code</strong> is now used alongside the <strong>European Standard codes (Eurocodes)</strong> in many countries, including Nigeria.  Most engineering books nowadays come in both British Standard (BS) code and European Standard codes (Eurocodes).  The use of either code in design does not invalidate the work of the designer. It is important to get familiar with recent developments by reading these volumes of codes instead of relying on the use of only familiar and simplified codes..",
        tags: tags.slice(0, 3).map(t => t._id),         
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2020-11-22T02:54:00Z")
      },
      {
        title: "Improving Professional Efficiency And Quality Of Engineering Products",
        slug: slugify("Improving Professional Efficiency And Quality Of Engineering Products", { lower: true }),        
        content: "To further improve professional efficiency and quality of engineering products, Government Agencies authorised with the approving powers can also play the role of external reviewers of technical documents seeking approval. This will force engineering professionals to conduct their work diligently in accordance with professional codes and ethics, and produce quality jobs that will not be subjected to an embarrassing rejection by the approving authorities.  It will also discourage quacks from the profession and reduce the incessant cases of infrastructural failures that are recorded almost on a yearly basis in our Country.It is encouraging to note that some States in the Federal Republic of Nigeria, like Lagos, Federal Capital Territory – Abuja, and Rivers have been implementing external review checks on Technical Documents submitted for approval.  It will be in the interest of our developing economy if other States in the Federation emulate the earlier mentioned States in this practice. This can be achieved through the recruitment of professional Engineers to manage these external review functions in the various Establishments vested with such powers. The essence of this is to ensure that set standards and recommended codes of practice are followed in the design and execution of engineering projects. Most of these practising States require in addition to the calculation sheets and drawings submitted for approval, a letter of undertaking, passport photograph, and a photocopy of the COREN certificate of the designer to accompany these design documents. This alone portrays that enormous responsibility is rested on the Engineer, and demands that confidence, courage, and good quality product delivery for the safe use of the structure for clients and the public is not negotiable...",
        tags: tags.slice(0, 3).map(t => t._id),          
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2020-10-25T02:37:00Z")
      },
      {
        title: "The Young Engineer: Importance Of Training And Mentorship",
        slug: slugify("The Young Engineer: Importance Of Training And Mentorship", { lower: true }),        
        content:  "A young engineer, who is at the threshold of a professional career, transiting from a fresh engineering graduate to a leadership role in engineering should bear in mind that there are many challenges along the journey....",
        tags: tags.slice(0, 3).map(t => t._id),          
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2020-09-20T07:00:00Z")
      },
      {
        title: "Study And Design Of Stormwater Management And Control Measures For Asaba, Warri, Effurun And Environs In Delta State, Nigeria",
        slug: slugify("Study And Design Of Stormwater Management And Control Measures For Asaba, Warri, Effurun And Environs In Delta State, Nigeria", { lower: true }),        
        content:  "Climate change which is a direct effect of global warming has brought extreme weather changes to our environment, such as sea-level rise, more frequent rainfall with its associated flooding...",
        tags: tags.slice(0).map(t => t._id),      
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2023-12-20T12:11:00Z")
      },
      {
        title: "Challenges Of A Young Engineer",
        slug: slugify("Challenges Of A Young Engineer", { lower: true }),        
        content:  "In our engineering education, we were taught the use of science and mathematics which form the fundamental basis for the application of the knowledge to interpret, invent, innovate, and solve engineering problems...",
        tags: tags.slice(0, 4).map(t => t._id),        
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2020-07-20T12:21:00Z")
      },
      {
        title: "Sample Post",
        slug: slugify("Sample Post", { lower: true }),        
        content:  "What Is Stormwater? Stormwater which can also be spelled as storm water, is a content of water that formed as a result of rainfall, snow or ice melt. Stormwater can infiltrate the soil, be stored on the land surface in ponds and puddles, evaporate, or resolved to runoff. Most runoff is conveyed directly to nearby streams, rivers, or other water bodies (surface water) without treatment. In natural environment, such as green areas, soil absorbs much of the stormwater. Plants also reduce stormwater by improving infiltration, intercepting precipitation as it falls, and by taking up water through their roots. In developed environments, unmanaged stormwater can create two major issues: One related to the volume and timing of runoff (flooding), And the other related to potential contaminants the water is carrying (water pollution)....",
        tags: tags.slice(0, 1).map(t => t._id),            
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2020-05-24T06:33:00Z")
      },
      {
        title: "Recommendations For Stormwater Management And Control",
        slug: slugify("Recommendations For Stormwater Management And Control", { lower: true }),        
        content:  "The details from the findings and observations of this study and design by Jefcon &amp; Associates Ltd (Consultant) for the Stormwater Management and Control Measures for Asaba, Warri, Effurun and environs, showed that the topography of Asaba &amp; its environs and that of Warri, Effurun &amp; environs have similarities in its flood management and control approaches...",
        tags: tags.slice(0, 6).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2020-07-31T01:31:00Z")
      },
      {
        title: "Considerations In The Design Of Stormwater Channels",
        slug: slugify("Considerations In The Design Of Stormwater Channels", { lower: true }),        
        content:  "There are many important considerations in the design of durable stormwater channels, and the next series of posts considers some of them..The time of concentration (Tc), is defined as the longest time it takes the rain falling at the most distant point within a watershed to reach the point under reference. It is one of the most important variables in the estimation of design discharges. It should be noted that while dealing in watersheds with flat terrain or low topographic slopes, the calculation of Tc, using commonly accepted equations often results in unreasonably large values...",
        tags: tags.slice(0, 2).map(t => t._id),           
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2022-05-31T08:41:00Z")
      },
      {
        title: "Channel Selection For Stormwater Control",
        slug: slugify("Channel Selection For Stormwater Control", { lower: true }),        
        content: "In channel selection for control of stormwater in Asaba, Warri, Effurun, and environs, great care was taken in channel depth selection because of the high-water table, especially in Effurun and Warri Metropolis...",
        tags: tags.slice(0, 2).map(t => t._id),       
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2022-04-25T07:53:00Z")
      },
      {
        title: "Hydraulic Design Of Drainage Channels",
        slug: slugify("Hydraulic Design Of Drainage Channels", { lower: true }),        
        content: "The hydraulic design of a drainage channel requires excellent knowledge of the topography and rainfall data of the project area. The design of a drainage channel is affected by factors such as the topography of the project area, selection type, design frequency, expected volume of&nbsp;stormwater, and economy..",
        tags: tags.slice(0, 2).map(t => t._id),            
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2022-05-21T01:51:00Z")
      },
      {
        title: "Description Of Core Hydrological Terminologies In Flood Control Analysis",
        slug: slugify("Description Of Core Hydrological Terminologies In Flood Control Analysis", { lower: true }),        
        content:  "Rainfall Intensity has an important effect on runoff proportion, as it determines the rate at which rainfall runoff arrives at the soil surface and, consequently, when infiltration rate of the soil is low to allow absorption, flooding of the environment does occur..",
        tags: tags.slice(0, 4).map(t => t._id),          
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2022-02-28T08:30:00Z")        
      },
      {
        title:  "Engineering Design And Hydrological Analysis For Effective And Efficient Flood Control",
        slug: slugify("Engineering Design And Hydrological Analysis For Effective And Efficient Flood Control", { lower: true }),        
        content:  "The engineering design of a stormwater drainage system requires a large data collection effort.  The data requirements in the stormwater management and control measures for Asaba, Warri, Effurun, and environs include knowledge of topography, drainage boundaries, imperviousness, soil types, and locations of existing drainage channels, manholes, culverts inlets, and outlets. In addition, identification of other types of utilities and their locations in the ground is critical.  These data collated enabled the study and design work for the new drainage network systems to be achieved.  The engineering analysis of the drainage system recommended for this project considered four major aspects:..",
        tags: tags.slice(0, 4).map(t => t._id),           
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2022-01-23T02:46:00Z")
      },
      {
        title: "Engineering Survey For Effective And Efficient Flood Control",
        slug: slugify("Engineering Survey For Effective And Efficient Flood Control", { lower: true }),        
        content: "To develop efficient and effective flood water control measures, a good knowledge of the topography of the study area is important for the design.  As much as practicable, the engineering survey here followed the existing street layouts...",
        tags: tags.slice(0, 4).map(t => t._id),       
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2021-01-12T11:09:00Z")
      },
      {
        title: "Findings And Observations In Flood-Prone Areas Of Delta State -1",
        slug: slugify("Findings And Observations In Flood-Prone Areas Of Delta State -1", { lower: true }),        
        content: "Studies were conducted over the entire flood-prone areas, valleys, natural watercourses, swamps, and rivers, including existing drains in Asaba, Warri, Effurun, and environs. The studies showed that, There were no previous records of survey data and maps for the cities. While Warri had an old Master plan, Asaba had none. A large part of the flooding noticed in Asaba, Warri, Effurun and environs could be attributed to blocked drainage channels with waste materials decomposable and non-decomposable, silts, overgrown weeds. The result is that the flow discharge into the drainage channels is disturbed and hence could not be evacuated from the environment.Most of the existing drains do not have discharge points as they were constructed without design specifications..",
        tags: tags.slice(0, 29).map(t => t._id),
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2021-08-25T10:03:00Z")
      },
      {
        title: "Findings And Observations In Flood-Prone Areas Of Delta State -2",
        slug: slugify("Findings And Observations In Flood-Prone Areas Of Delta State -2", { lower: true }),        
        content:  "Well-researched studies were conducted over the entire flood-prone areas, valleys, natural watercourses, swamps, and rivers in Delta State of Nigeria, including existing drains in Asaba, Warri, Effurun, and environs. Several observations were made. Eight of these observations were discussed in my last post. This post is a sequel to the former and a continuation of the observations from these studies...",
        tags: tags.slice(0, 7).map(t => t._id),        
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2021-11-16T06:25:00Z")
      },
      {
        title: "Hydrological Basins In Delta State, Nigeria",
        slug: slugify("Hydrological Basins In Delta State, Nigeria", { lower: true }),        
        content:  "Studies were conducted to identify all the flood-prone areas in Asaba, Warri, Effurun, and environs, all in Delta State of Nigeria.  These studies were to help develop efficient and effective flood water control measures that would safely convey run-off from the streets to the natural watercourses and rivers without loss of lives and property. These basins were broken into catchments using existing road networks for delineation as boundaries. In the case of Asaba, the absence of water bodies limited the design approach to nature-based types, such as valleys, streams, and rivers that are tributaries to the River Niger. But in the case of Warri and Effurun, the catchment areas contain lots of water bodies (swamps) and natural watercourses, which serve as the receiving basins for floodwater evacuation from the environment..",
        tags: tags.slice(0, 29).map(t => t._id), 
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2021-08-01T08:13:00Z")
      },
      {
        title: "Merits Of The Recommended Options For Storm Water Management And Control",
        slug: slugify("Merits Of The Recommended Options For Storm Water Management And Control", { lower: true }),        
        content: "This article enumerates the merits to be derived from the use of these recommended pre-cast concrete structural elements of rectangular, square, and circular channels...",
        tags: tags.slice(0, 2).map(t => t._id),         
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2022-08-24T01:06:00Z")
      },
      {
        title: "7 Things You Need To Know Before Hiring A STORMWATER CONSTRUCTION COMPANY",
        slug: slugify("7 Things You Need To Know Before Hiring A STORMWATER CONSTRUCTION COMPANY", { lower: true }),        
        content:  "When it comes to stormwater drainage construction, it is important to hire a reputable and experienced company. The process is complex and requires a number of steps to ensure the job is done correctly and efficiently.   If you are considering hiring a stormwater drainage construction company, there are a few things you need to know before making a decision....",
        tags: tags.slice(0, 11).map(t => t._id),         
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2022-09-29T01:43:00Z")
      },
      {
        title: "7 Ways To Handle Flooding In Any Parts Of Nigeria",
        slug: slugify("7 Ways To Handle Flooding In Any Parts Of Nigeria", { lower: true }),        
        content: "Flooding is a very serious issue in Nigeria, as it can lead to significant damage to property and even loss of life. Floods can occur due to heavy seasonal rains or from overflowing bodies of water such as rivers and oceans. Flooding can be a major problem for those living in areas with low-lying land or in cities where there is poor drainage. In order to handle flooding in any area of Nigeria, there are a variety of strategies that can be implemented. This article lists 7 ways that you can handle flooding in any area of Nigeria. These strategies can be used by individuals, organizations, and governments to reduce the destruction caused by flooding and ensure the safety of those living in affected areas. Whether you are living in a rural area or a city, these strategies will help you to be better prepared for a flood and handle it in the most effective way possible. When it comes to flooding in Nigeria, prevention is key. We must work together to develop a comprehensive plan that includes early warning systems, improved nfrastructure, and risk management strategies to ensure we are better prepared to handle future floods....",
        tags: tags.slice(0, 12).map(t => t._id),    
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2022-10-30T03:04:00Z")
      },
      {
        title: "8 Important Facts About StormWater Drainage Systems",
        slug: slugify("8 Important Facts About StormWater Drainage Systems", { lower: true }),        
        content:  "Stormwater drainage systems are essential to our health and safety, they help protect us from flooding and prevent water pollution, making them an important part of our infrastructure...",
        tags: tags.slice(0, 10).map(t => t._id),        
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2022-11-30T04:12:00Z")
      },
      {
        title: "Rising Tides, Sinking Cities: How Climate Change Is Driving More Extreme Flooding",
        slug: slugify("Rising Tides, Sinking Cities: How Climate Change Is Driving More Extreme Flooding", { lower: true }),        
        content:  "Climate change continues to threaten our planet, with the most immediate threat being extreme flooding. Rising tides and sinking cities have become a stark reality with devastating consequences for many communities around the world. It's a global problem that requires immediate attention and action from governments, businesses, and individuals. In recent years, increased levels of carbon dioxide emissions have led to warmer ocean temperatures and melting polar ice caps, causing sea levels to rise. The impact of these changes has been acutely felt in many coastal areas in Nigeria, as an example, causing more intense and frequent flooding. This blog post will explore the relationship between climate change and extreme flooding, and how it is affecting cities and towns across the world. We will examine the science behind rising sea levels and how it affects our coasts, as well as the social and economic impact of flooding. We will also take a closer look at the strategies and technologies being used to mitigate the effects of climate change on flooding...",
        tags: tags.slice(0, 8).map(t => t._id),     
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2023-02-25T05:37:00Z")
      },
      {
        title: "Impacts Of Land-use Change On Urban Hydrology And The Need For Sustainable Storm Water Management Engineering Practices",
        slug: slugify("Impacts Of Land-use Change On Urban Hydrology And The Need For Sustainable Storm Water Management Engineering Practices", { lower: true }),        
        content: "An excerpt from 'Impacts of land-use Change on Urban Hydrology and the need for sustainable Storm Water Management Engineering Practices'",
        tags: tags.slice(0, 6).map(t => t._id),       
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2023-10-08T10:02:00Z")
      },
      {
        title: "The Importance Of Community Engagement And Education In Sustainable Water Management",
        slug: slugify("The Importance Of Community Engagement And Education In Sustainable Water Management", { lower: true }),        
        content:  "Lecture Presentation To Nigerian Institute Of Civil Engineers (NICE), Asaba Chapter, Delta State, Nigeria On Thursday, 2nd Nov, 2023",
        tags: tags.slice(0, 9).map(t => t._id),       
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2023-03-07T09:26:00Z")
      },
      {
        title: "Assessing Quality Civil Engineering Practices In Nigeria",
        slug: slugify("Assessing Quality Civil Engineering Practices In Nigeria", { lower: true }),        
        content: "The quality of Civil Engineering practices in Nigeria has become an increasingly important priority in recent years. As the country continues to grow and change, it is important that these practice s meet the standards of a modern, wealthy country.  Assessing the quality of Civil Engineering practices in Nigeria is crucial to establishing a secure, efficient infrastructure that is critical to the country’s future. Quality engineering practices enable the country to realize the potential of its resources, reduce costs and improve safety. This article explores the existing quality engineering practices in Nigeria, their impact on the nation’s infrastructure, and how they can be further improved. It will provide an overview of the current state of Civil Engineering practices in Nigeria, including the challenges and opportunities that can be addressed. Additionally, it discusses how government policies, industry regulations, and investments can help improve engineering practices in the nation. By assessing quality practices in Nigeria, it is possible to create a secure and efficient infrastructure that enables the nation to realize its potential...",
        tags: tags.slice(0, 11).map(t => t._id),         
        categories: [categories[0]._id],          
        archives: [archives[0]._id],
        createdAt: new Date("2022-12-29T07:21:00Z")
      } 
    ];

    await Blog.insertMany(blogsData);
    console.log("✅ Blogs seeded");

    await Service.insertMany(servicesData);
    console.log("✅ Services seeded");

    await Project.insertMany(projectsData);
    console.log("✅ Projects seeded");

    await Faq.insertMany(faqsData);
    console.log("✅ FAQs seeded");

    console.log("🎉 Seeding complete!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error during seeding:", err);
    mongoose.connection.close();
  }
}

seed();