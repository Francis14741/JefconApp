const mongoose = require("mongoose");
const Blog = require("./models/blog"); // adjust path to your Blog model
const Tag = require("./models/tag");   // adjust path to your Tag model

// Connect to MongoDB
mongoose.connect("mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/jefconapp?retryWrites=true&w=majority&appName=jefconapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error(err));

// Map keywords to tag slugs

    const blogTagMap = [
      {
        keyword: "drainage-system-best-practices",
        tagSlug: "tag_drainagesystembestpractices",
      },
      {
        keyword: "drainage-system-inspection-tips",
        tagSlug: "tag_drainagesystemInspectionTips",
      },
      {
        keyword: "easy-tips-for-drainage-quality",
        tagSlug: "tag_easy_tipsforDrainagequality",
      },
      {
        keyword: "effective-drainage-qc",
        tagSlug: "tag_effectivedrainageqc",
      },
      {
        keyword: "drainage-system-quality-control",
        tagSlug: "tag_drainagesystemqualitycontrol",
      },
      {
        keyword: "stormwater-management-Nigeria",
        tagSlug: "tag_stormwatermanagementnigeria",
      },
      {
        keyword: "stormwater-pollution-control-Nigeria",
        tagSlug: "tag_stormwaterpollutioncontrolnigeria",
      },
      {
        keyword: "pollution-prevention-technique",
        tagSlug: "tag_pollutionpreventiontechnique",
      },
      {
        keyword: "nigeria-drainage-system-maintenance",
        tagSlug: "tag_nigeriadrainagesystemmaintenance",
      },
      {
        keyword: "how-to-reduce-urban-water-pollution",
        tagSlug: "tag_howtoreduceurbanwaterpollution",
      },
      {
        keyword: "preventing-stormwater-pollution",
        tagSlug: "tag_preventingstormwaterpollution",
      },
      {
        keyword: "rainwater-runoff",
        tagSlug: "tag_rainwaterrunoff",
      },
      {
        keyword: "stormwater-pollution-guide",
        tagSlug: "tag_stormwaterpollutionguide",
      },
      {
        keyword: "stormwater-pollution-trend-2025",
        tagSlug: "tag_stormwaterpollutiontrend2025",
      },
      {
        keyword: "stormwater-runoff-solution",
        tagSlug: "tag_stormwaterrunoffsolution",
      },
      {
        keyword: "water-safety-tips-Nigeria",
        tagSlug: "tag_watersafetytipsnigeria",
      },
      {
        keyword: "urban-water-safety",
        tagSlug: "tag_urbanwatersafety",
      },
      {
        keyword: "water-Pollution-Prevention-2025",
        tagSlug: "tag_waterpollutionprevention2025",
      },
      {
        keyword: "civil-engineering",
        tagSlug: "tag_civilengineering",
      },
      {
        keyword: "complex-engineering-problems",
        tagSlug: "tag_complexengineeringproblems",
      },
      {
        keyword: "drainage-holes",
        tagSlug: "tag_drainageholes",
      },
      {
        keyword: "drainage",
        tagSlug: "tag_drainage",
      },
      {
        keyword: "drainage-bresilien",
        tagSlug: "tag_drainagebresilien",
      },
      {
        keyword: "drainage-basin",
        tagSlug: "tag_drainagebasin",
      },
      {
        keyword: "drainage-cover",
        tagSlug: "tag_drainagecover",
      },
      {
        keyword: "drainage-cell",
        tagSlug: "tag_drainagecell",
      },
      {
        keyword: "construction",
        tagSlug: "tag_construction",
      },
      {
        keyword: "drainage-channel",
        tagSlug: "tag_drainagechannel",
      },
      {
        keyword: "drainage-channels",
        tagSlug: "tag_drainagechannels",
      },
      {
        keyword: "drainage-contractor",
        tagSlug: "tag_drainagecontractor",
      },
      {
        keyword: "drainage-design",
        tagSlug: "tag_drainagedesign",
      },
      {
        keyword: "drainage-ditch",
        tagSlug: "tag_drainageditch",
      },
      {
        keyword: "drainage-engineer",
        tagSlug: "tag_drainageengineer",
      },
      {
        keyword: "drainage-hole",
        tagSlug: "tag_drainagehole",
      },
      {
        keyword: "drainage-issues",
        tagSlug: "tag_drainageissues",
      },
      {
        keyword: "drainage-life",
        tagSlug: "tag_drainagelife",
      },
      {
        keyword: "drainage-line",
        tagSlug: "tag_drainageline",
      },
      {
        keyword: "drainage-pathway",
        tagSlug: "tag_drainagepathway",
      },
      {
        keyword: "drainage-pipe",
        tagSlug: "tag_drainagepipe",
      },
      {
        keyword: "drainage-pipes",
        tagSlug: "tag_drainagepipes",
      },
      {
        keyword: "drainage-problems",
        tagSlug: "tag_drainageproblems",
      },
      {
        keyword: "drainage-products",
        tagSlug: "tag_drainageproducts",
      },
      {
        keyword: "drainage-project",
        tagSlug: "tag_drainageproject",
      },
      {
        keyword: "drainage-solution",
        tagSlug: "tag_drainagesolution",
      },
      {
        keyword: "drainage-solutions",
        tagSlug: "tag_drainagesolutions",
      },
      {
        keyword: "drainage-specialists",
        tagSlug: "tag_drainagespecialists",
      },
      {
        keyword: "drainage-system",
        tagSlug: "tag_drainagesystem",
      },
      {
        keyword: "drainage-systems",
        tagSlug: "tag_drainagesystems",
      },
      {
        keyword: "drainage-tile",
        tagSlug: "tag_drainagetile",
      },
      {
        keyword: "drainage-visage",
        tagSlug: "tag_drainagevisage",
      },
      {
        keyword: "drainage-work",
        tagSlug: "tag_drainagework",
      },
      {
        keyword: "drainage-works",
        tagSlug: "tag_drainageworks",
      },
      {
        keyword: "engineering-fundamentals",
        tagSlug: "tag_engineeringfundamentals",
      },
      {
        keyword: "engineering-practices",
        tagSlug: "tag_engineeringpractices",
      },
      {
        keyword: "flood-water-control",
        tagSlug: "tag_floodwatercontrol",
      },
      {
        keyword: "Nigeria",
        tagSlug: "tag_nigeria",
      },
      {
        keyword: "quality-of-Engineering-Products",
        tagSlug: "tag_qualityofengineeringproducts",
      },
      {
        keyword: "stormwater",
        tagSlug: "tag_stormwater",
      },
      {
        keyword: "stormwater-drainage",
        tagSlug: "tag_stormwaterdrainage",
      },
      {
        keyword: "stormwater-management",
        tagSlug: "tag_stormwatermanagement",
      },
      {
        keyword: "sustainable-stormwater-management",
        tagSlug: "tag_sustainablestormwatermanagement",
      },
      {
        keyword: "young-engineer",
        tagSlug: "tag_youngengineer",
      },
      {
        keyword: "bearing-capacity",
        tagSlug: "tag_bearingcapacity",
      },
      {
        keyword: "climate-change-adaptation",
        tagSlug: "tag_climatechangeadaptation",
      },
      {
        keyword: "compaction",
        tagSlug: "tag_compaction",
      },
      {
        keyword: "drainage-design",
        tagSlug: "tag_drainagedesign",
      },
      {
        keyword: "erosion-control",
        tagSlug: "tag_erosioncontrol",
      },
      {
        keyword: "foundation-design",
        tagSlug: "tag_foundationdesign",
      },
      {
        keyword: "geosynthesis",
        tagSlug: "tag_geosynthesis",
      },
      {
        keyword: "geotechnical-engineering",
        tagSlug: "tag_geotechnicalengineering",
      },
      {
        keyword: "hydrology",
        tagSlug: "tag_hydrology",
      },
      {
        keyword: "infrastructure",
        tagSlug: "tag_infrastructure",
      },
      {
        keyword: "nigerian-construction",
        tagSlug: "tag_nigerianconstruction",
      },
      {
        keyword: "pavement-design",
        tagSlug: "tag_pavementdesign",
      },
      {
        keyword: "permeability",
        tagSlug: "tag_permeability",
      },
      {
        keyword: "stormwater-management-Nigeria",
        tagSlug: "tag_stormwatermanagementNigeria",
      },
      {
        keyword: "qualitycontrol-qc-nigeria",
        tagSlug: "tag_qualitycontrol-qc-nigeria",
      },
      {
        keyword: "sediment-control",
        tagSlug: "tag_sedimentcontrol",
      },
      {
        keyword: "slope-stability",
        tagSlug: "tag_slopestability",
      },
      {
        keyword: "soil-investigation",
        tagSlug: "tag_soilinvestigation",
      },
      {
        keyword: "site-investigation",
        tagSlug: "tag_siteinvestigation",
      },
      {
        keyword: "soil-mechanics",
        tagSlug: "tag_soilmechanics",
      },
      {
        keyword: "soil-properties",
        tagSlug: "tag_soilproperties",
      },
      {
        keyword: "stormwaterdrainage",
        tagSlug: "tag_stormwaterdrainage",
      },
      {
        keyword: "water-management",
        tagSlug: "tag_watermanagement",
      },
      {
        keyword: "civil-engineers",
        tagSlug: "tag_civilengineers",
      },
      {
        keyword: "construction-proffesionals-in-nigeria",
        tagSlug: "tag_constructionproffesionalsinnigeria",
      },
      {
        keyword: "efficiency",
        tagSlug: "tag_efficiency",
      },
      {
        keyword: "nigeria-government-policymakers",
        tagSlug: "tag_nigeriagovtpolicymakers",
      },
      {
        keyword: "quality-control",
        tagSlug: "tag_qualitycontrol",
      },
      {
        keyword: "urban-planners",
        tagSlug: "tag_urbanplanners",
      },
      {
        keyword: "sustainable-development",
        tagSlug: "tag_sustainabledevelopment",
      },
      {
        keyword: "climate-change",
        tagSlug: "tag_climatechange",
      },
      {
        keyword: "urban-areas",
        tagSlug: "tag_urbanareas",
      },
      {
        keyword: "urbanization",
        tagSlug: "tag_urbanization",
      },
      {
        keyword: "drainageplanning",
        tagSlug: "tag_drainageplanning",
      },
      {
        keyword: "environmental-impact",
        tagSlug: "tag_environmentalimpact",
      },
      {
        keyword: "nigeria-environment",
        tagSlug: "tag_nigeriaenvironment",
      },
      {
        keyword: "urban-planning",
        tagSlug: "tag_urbanplanning",
      },
      {
        keyword: "water-infrastructure",
        tagSlug: "tag_waterinfrastructure",
      },
      {
        keyword: "nigeria-water-pollution",
        tagSlug: "tag_nigeriawaterpollution",
      },
      {
        keyword: "urbanization-challenges",
        tagSlug: "tag_urbanizationchallenges",
      },
      {
        keyword: "green-infrastructure",
        tagSlug: "tag_greeninfrastructure",
      },
      {
        keyword: "resilient-cities",
        tagSlug: "tag_resilientcities",
      },
      {
        keyword: "stormwater-mitigation",
        tagSlug: "tag_stormwatermitigation",
      },
      {
        keyword: "sustainability",
        tagSlug: "tag_sustainability",
      },
      {
        keyword: "water-sustainability",
        tagSlug: "tag_watersustainability",
      },
      {
        keyword: "land-use-change",
        tagSlug: "tag_landusechange",
      },
      {
        keyword: "urban-environment",
        tagSlug: "tag_urbanenvironment",
      },
      {
        keyword: "urban-hydrology",
        tagSlug: "tag_urbanhydrology",
      },
      {
        keyword: "urban-water-management",
        tagSlug: "tag_urbanwatermanagement",
      },
      {
        keyword: "bio-swales",
        tagSlug: "tag_bioswales",
      },
      {
        keyword: "low-impact-development",
        tagSlug: "tag_lowimpactdevelopment",
      },
      {
        keyword: "permeablepavement",
        tagSlug: "tag_permeablepavement",
      },
      {
        keyword: "rainbarrels",
        tagSlug: "tag_rainbarrels",
      },
      {
        keyword: "rain-gardens",
        tagSlug: "tag_raingardens",
      },
      {
        keyword: "rainwater-harvesting",
        tagSlug: "tag_rainwaterharvesting",
      },
      {
        keyword: "stormwater-best-practices",
        tagSlug: "tag_stormwaterbestpractices",
      },
      {
        keyword: "stormwater-education",
        tagSlug: "tag_stormwatereducation",
      },
      {
        keyword: "stormwater-filtration",
        tagSlug: "tag_stormwaterfiltration",
      },
      {
        keyword: "sustainable-urban-planning",
        tagSlug: "tag_sustainableurbanplanning",
      },
      {
        keyword: "urban-runoff-mitigation",
        tagSlug: "tag_urbanrunoffmitigation",
      },
      {
        keyword: "water-conservation",
        tagSlug: "tag_waterconservation",
      },
      {
        keyword: "environmental-protection",
        tagSlug: "tag_environmentalprotection",
      },
      {
        keyword: "green-solutions",
        tagSlug: "tag_greensolutions",
      },
      {
        keyword: "stormwaterchallenge",
        tagSlug: "tag_stormwaterchallenge",
      },
      {
        keyword: "community-involvement",
        tagSlug: "tag_communityinvolvement",
      },
      {
        keyword: "detective-systems",
        tagSlug: "tag_detectivesystems",
      },
      {
        keyword: "drainage-systems-design-and-construction",
        tagSlug: "tag_drainagesystemsdesignandconstruction",
      },
      {
        keyword: "ecological-rehabilitation-ands-ustainaibility",
        tagSlug: "tag_ecologicalrehabilitationandsustainaibility",
      },
      {
        keyword: "flood-management",
        tagSlug: "tag_floodmanagement",
      },
      {
        keyword: "floodprone-areas",
        tagSlug: "tag_floodproneareas",
      },
      {
        keyword: "floodproof-construction-techniques",
        tagSlug: "tag_floodproofconstructiontechniques",
      },
      {
        keyword: "infrastructure-development",
        tagSlug: "tag_infrastructuredevelopment",
      },
      {
        keyword: "mitigationstrategies",
        tagSlug: "tag_mitigationstrategies",
      },
      {
        keyword: "preventative-measures",
        tagSlug: "tag_preventativemeasures",
      },
      {
        keyword: "restorative-engagement-strategies",
        tagSlug: "tag_restorativeengagementstrategies",
      },
      {
        keyword: "risk-awareness-and-planning",
        tagSlug: "tag_riskawarenessandplanning",
      },
      {
        keyword: "asaba-drainage",
        tagSlug: "tag_asabadrainage",
      },
      {
        keyword: "delta-drainage",
        tagSlug: "tag_deltadrainage",
      },
      {
        keyword: "nigeria-drainage",
        tagSlug: "tag_nigeriadrainage",
      },
      {
        keyword: "flooding",
        tagSlug: "tag_flooding",
      },
      {
        keyword: "flooding-2018",
        tagSlug: "tag_flooding2018",
      },
      {
        keyword: "flooding2019",
        tagSlug: "tag_flooding2019",
      },
      {
        keyword: "flooding-alert",
        tagSlug: "tag_floodingalert",
      },
      {
        keyword: "flooding-cookie",
        tagSlug: "tag_floodingcookie",
      },
      {
        keyword: "flooding-cookies",
        tagSlug: "tag_floodingcookies",
      },
      {
        keyword: "flooding-cookies-with-royal-icing",
        tagSlug: "tag_floodingcookieswithroyalicing",
      },
      {
        keyword: "flooding-everywhere",
        tagSlug: "tag_floodingeverywhere",
      },
      {
        keyword: "floodingfeeds",
        tagSlug: "tag_floodingfeeds",
      },
      {
        keyword: "flooding-friday",
        tagSlug: "tag_floodingfriday",
      },
      {
        keyword: "flooding-icing",
        tagSlug: "tag_floodingicing",
      },
      {
        keyword: "floodingig",
        tagSlug: "tag_floodingig",
      },
      {
        keyword: "flooding-insta",
        tagSlug: "tag_floodinginsta",
      },
      {
        keyword: "flooding-instagram",
        tagSlug: "tag_floodinginstagram",
      },

      {
        keyword: "flooding-instagram-with-cute-pics-of-zeus",
        tagSlug: "tag_floodinginstagramwithcutepicsofzeus",
      },
      {
        keyword: "flooding-in-texas",
        tagSlug: "tag_floodingintexas",
      },
      {
        keyword: "flooding-my-timeline",
        tagSlug: "tag_floodingmytimeline",
      },
      {
        keyword: "flooding-rain",
        tagSlug: "tag_floodingrain",
      },
      {
        keyword: "floodingrains",
        tagSlug: "tag_floodingrains",
      },
      {
        keyword: "floodingriver",
        tagSlug: "tag_floodingriver",
      },
      {
        keyword: "flooding-roads",
        tagSlug: "tag_floodingroads",
      },
      {
        keyword: "floodings",
        tagSlug: "tag_floodings",
      },
      {
        keyword: "flooding-sucks",
        tagSlug: "tag_floodingsucks",
      },
      {
        keyword: "flooding-technique",
        tagSlug: "tag_floodingtechnique",
      },
      {
        keyword: "flooding-your-newsfeeds",
        tagSlug: "tag_floodingyournewsfeeds",
      },
      {
        keyword: "flooding-your-time",
        tagSlug: "tag_floodingyourtime",
      },
      {
        keyword: "flooding-your-timeline-today",
        tagSlug: "tag_floodingyourtimelinetoday",
      },
      {
        keyword: "flooding-your-timelines",
        tagSlug: "tag_floodingyourtimelines",
      },
      {
        keyword: "flooding-yourig",
        tagSlug: "tag_floodingyourig",
      },
      {
        keyword: "storm-wreck",
        tagSlug: "tag_stormwreck",
      },
      {
        keyword: "stormwater-bmp",
        tagSlug: "tag_stormwaterbmp",
      },
      {
        keyword: "stormwatercm",
        tagSlug: "tag_stormwatercm",
      },
      {
        keyword: "stormwater-compliance",
        tagSlug: "tag_stormwatercompliance",
      },
      {
        keyword: "stormwater-creek",
        tagSlug: "tag_stormwatercreek",
      },
      {
        keyword: "stormwater-design",
        tagSlug: "tag_stormwaterdesign",
      },
      {
        keyword: "stormwaterdrain",
        tagSlug: "tag_stormwaterdrain",
      },
      {
        keyword: "stormwaterdrains",
        tagSlug: "tag_stormwaterdrains",
      },
      {
        keyword: "stormwater-engineering",
        tagSlug: "tag_stormwaterengineering",
      },
      {
        keyword: "stormwater-runoffs",
        tagSlug: "tag_stormwaterrunoffs",
      },
      {
        keyword: "stormwater-harvesting",
        tagSlug: "tag_stormwaterharvesting",
      },
      {
        keyword: "stormwater-360",
        tagSlug: "tag_stormwater360",
      },
      {
        keyword: "stormwater-australia",
        tagSlug: "tag_stormwateraustralia",
      },
      {
        keyword: "stormwater-fact-of-the-day",
        tagSlug: "tag_stormwaterfactoftheday",
      },
      {
        keyword: "stormwater-pollution",
        tagSlug: "tag_stormwaterpollution",
      },
      {
        keyword: "stormwater-pollution-prevention",
        tagSlug: "tag_stormwaterpollutionprevention",
      },
      {
        keyword: "stormwaterpond",
        tagSlug: "tag_stormwaterpond",
      },
      {
        keyword: "stormwater-retention",
        tagSlug: "tag_stormwaterretention",
      },
      {
        keyword: "stormwatersavvy",
        tagSlug: "tag_stormwatersavvy",
      },
      {
        keyword: "stormwater-smart",
        tagSlug: "tag_stormwatersmart",
      },
      {
        keyword: "stormwater-treatment",
        tagSlug: "tag_stormwatertreatment",
      },
      {
        keyword: "stormwater-systems",
        tagSlug: "tag_stormwatersystems",
      },
      {
        keyword: "stormwater-system",
        tagSlug: "tag_stormwatersystem",
      },
      {
        keyword: "stormwater-stewards",
        tagSlug: "tag_stormwaterstewards",
      },
      {
        keyword: "stormwater-pit",
        tagSlug: "tag_stormwaterpit",
      },
      {
        keyword: "stormwater-pipe",
        tagSlug: "tag_stormwaterpipe",
      },
      {
        keyword: "stormwater-maintenance",
        tagSlug: "tag_stormwatermaintenance",
      },
      {
        keyword: "stormwaterhawaii",
        tagSlug: "tag_stormwaterhawaii",
      },
      {
        keyword: "stormwater-awareness-week",
        tagSlug: "tag_stormwaterawarenessweek",
      },
      {
        keyword: "stormwaterstudios",
        tagSlug: "tag_stormwaterstudios",
      },
      {
        keyword: "stormwatersydney",
        tagSlug: "tag_stormwatersydney",
      },
      {
        keyword: "flooding-the-timeline",
        tagSlug: "tag_floodingthetimeline",
      },
      {
        keyword: "flooding-timelines-today",
        tagSlug: "tag_floodingtimelinestoday",
      },
      {
        keyword: "flooding-the-streets",
        tagSlug: "tag_floodingthestreets",
      },
      {
        keyword: "flooding-timelines-tonight",
        tagSlug: "tag_floodingtimelinestonight",
      },
      {
        keyword: "flooding-video",
        tagSlug: "tag_floodingvideo",
      },
      {
        keyword: "flooding-waters",
        tagSlug: "tag_floodingwaters",
      },
      {
        keyword: "flooding-yall",
        tagSlug: "tag_floodingyall",
      },
      {
        keyword: "flooding-yall-timeline",
        tagSlug: "tag_floodingyalltimeline",
      },
      {
        keyword: "stormwater-aware",
        tagSlug: "tag_stormwateraware",
      },
      {
        keyword: "flooding-your-tl",
        tagSlug: "tag_floodingyourtl",
      },
      {
        keyword: "flooding-the-gram",
        tagSlug: "tag_floodingthegram",
      },
      {
        keyword: "engineering-challenges",
        tagSlug: "tag_engineeringchallenges",
      },
      {
        keyword: "engineering-challenges-2020",
        tagSlug: "tag_engineeringchallenges2020",
      },
      {
        keyword: "engineering-challenges-for-students",
        tagSlug: "tag_engineeringchallengesforstudents",
      },
      {
        keyword: "engineering-challenges-of-the-21st-century",
        tagSlug: "tag_engineeringchallengesofthe21stcentury",
      },
      {
        keyword: "engineering-codes",
        tagSlug: "tag_engineeringcodes",
      },
      {
        keyword: "engineering-professionals",
        tagSlug: "tag_engineeringprofessionals",
      },
      {
        keyword: "young-engineers",
        tagSlug: "tag_youngengineers",
      },
      {
        keyword: "young-engineers-bricks-challenge",
        tagSlug: "tag_youngengineersbrickschallenge",
      },
      {
        keyword: "young-engineers-fellowship",
        tagSlug: "tag_youngengineersfellowship",
      },
      {
        keyword: "young-engineers-program",
        tagSlug: "tag_youngengineersprogram",
      },
      {
        keyword: "british-standard-codes",
        tagSlug: "tag_britishstandardcodes",
      },
      {
        keyword: "eurocodes",
        tagSlug: "tag_eurocodes",
      },
      {
        keyword: "european-standard-codes",
        tagSlug: "tag_europeanstandardcodes",
      },
      {
        keyword: "engineering-practice",
        tagSlug: "tag_engineeringpractice",
      },
      {
        keyword: "engineering-practices",
        tagSlug: "tag_engineeringpractices",
      },
      {
        keyword: "engineering-works",
        tagSlug: "tag_engineeringworks",
      },
      {
        keyword: "engineering-workshop",
        tagSlug: "tag_engineeringworkshop",
      },
      {
        keyword: "professionalefficiency",
        tagSlug: "tag_professionalefficiency",
      },
      {
        keyword: "quality-engineering-jobs",
        tagSlug: "tag_qualityengineeringjobs",
      },
      {
        keyword: "engineer",
        tagSlug: "tag_engineer",
      },
      {
        keyword: "mentorship",
        tagSlug: "tag_mentorship",
      },
      {
        keyword: "training",
        tagSlug: "tag_training",
      },
      {
        keyword: "dynamic-world",
        tagSlug: "tag_dynamicworld",
      },
      {
        keyword: "scientific-and-natural-laws",
        tagSlug: "tag_scientificandnaturallaws",
      },
      {
        keyword: "hydraulic-engineering",
        tagSlug: "tag_hydraulicengineering",
      },
      {
        keyword: "projects",
        tagSlug: "tag_projects",
      },
      {
        keyword: "and-rivers-in-delta-state-of-nigeria",
        tagSlug: "tag_andriversindeltastateofnigeria",
      },
      {
        keyword: "effurun",
        tagSlug: "tag_effurun",
      },
      {
        keyword: "including-existing-drains-in-asaba",
        tagSlug: "tag_includingexistingdrainsinasaba",
      },
      {
        keyword: "natural-water-courses",
        tagSlug: "tag_naturalwatercourses",
      },
      {
        keyword:
          "well-researched-studies-were-conducted-over-entire-flood-proneareas",
        tagSlug: "tag_wellresearchedstudieswereconductedoverentirefloodproneareas",
      },
      {
        keyword: "best-practices-in-stormwater-construction",
        tagSlug: "tag_bestpracticesinstormwaterconstruction",
      },
      {
        keyword: "construction-stormwater",
        tagSlug: "tag_constructionstormwater",
      },
      {
        keyword: "developing-and-remediations-of-basins",
        tagSlug: "tag_developingandremediationsofbasins",
      },
      {
        keyword: "erosion-control-construction-and-stormwater-management",
        tagSlug: "tag_erosioncontrolconstructionandstormwatermanagement",
      },
      {
        keyword: "permits-for-stormwater-systems-on-construction-sites",
        tagSlug: "tag_permitsforstormwatersystemsonconstructionsites",
      },
      {
        keyword: "sediment-control-and-stormwater",
        tagSlug: "tag_sedimentcontrolandstormwater",
      },
      {
        keyword: "standards-and-guidelines-for-construction",
        tagSlug: "tag_standardsandguidelinesforconstruction",
      },
      {
        keyword: "stormwater-construction",
        tagSlug: "tag_stormwaterconstruction",
      },
      {
        keyword: "stormwater-controls-for-construction",
        tagSlug: "tag_stormwatercontrolsforconstruction",
      },
      {
        keyword: "stormwater-infrastructure",
        tagSlug: "tag_stormwaterinfrastructure",
      },
      {
        keyword: "stormwater-solutions-for-construction-sites",
        tagSlug: "tag_stormwatersolutionsforconstructionsites",
      },
      {
        keyword: "training-in-stormwater-for-construction-purposes",
        tagSlug: "tag_traininginstormwaterforconstructionpurposes",
      },
      {
        keyword: "dangers-of-flood-in-nigeria",
        tagSlug: "tag_dangersoffloodinnigeria",
      },
      {
        keyword: "devastating-nigeria-landslide-and-flooding",
        tagSlug: "tag_devastatingnigerialandslideandflooding",
      },
      {
        keyword: "disaster-relief-inaction-for-flood-victims-in-nigeria",
        tagSlug: "tag_disasterreliefinactionforfloodvictimsinnigeria",
      },
      {
        keyword: "extreme-heat-cause-storm-to-last-in-nigeria",
        tagSlug: "tag_extremeheatcausestormtolastinnigeria",
      },
      {
        keyword: "fighting-the-rising-waters-from",
        tagSlug: "tag_fightingtherisingwatersfrom",
      },
      {
        keyword: "flooding-in-nigeria",
        tagSlug: "tag_floodinginnigeria",
      },
      {
        keyword: "flooding-situation-in-nigeria",
        tagSlug: "tag_floodingsituationinigeria",
      },
      {
        keyword: "heavy-rainfall-has-ruined-many-nigeria-homes",
        tagSlug: "tag_heavyrainfallhasruinedmanynigeriahomes",
      },
      {
        keyword: "nigeria-devastating-flood",
        tagSlug: "tag_nigeriadevastatingflood",
      },
      {
        keyword: "nigeria-flooding",
        tagSlug: "tag_nigeriaflooding",
      },
      {
        keyword: "rainfall-in-nigeria-floods",
        tagSlug: "tag_rainfallinnigeriafloods",
      },
      {
        keyword: "severe-weather-in-nigeria-inundation",
        tagSlug: "tag_severeweatherinnigeriainundation",
      },
      {
        keyword: "detention-basins-and-pump-systems",
        tagSlug: "tag_detentionbasinsandpumpsystems",
      },
      {
        keyword: "engineering-hydrology-techniques",
        tagSlug: "tag_engineeringhydrologytechniques",
      },
      {
        keyword: "gabion-systems",
        tagSlug: "tag_gabionsystems",
      },
      {
        keyword: "permits-and-guidance-for-surface-drainage",
        tagSlug: "tag_permitsandguidanceforsurfacedrainage",
      },
      {
        keyword: "rain-garden-solutions",
        tagSlug: "tag_raingardensolutions",
      },
      {
        keyword: "rain-harvest-systems",
        tagSlug: "tag_rainharvestsystems",
      },
      {
        keyword: "roof-drains-and-downpipe-systems",
        tagSlug: "tag_roofdrainsanddownpipesystems",
      },
      {
        keyword: "surface-and-belowground-drainage",
        tagSlug: "tag_surfaceandbelowgrounddrainage",
      },
      {
        keyword: "community-engagement",
        tagSlug: "tag_communityengagement",
      },
      {
        keyword: "education",
        tagSlug: "tag_education",
      },
      {
        keyword: "environmental-education",
        tagSlug: "tag_environmentaleducation",
      },
      {
        keyword: "watershed-management",
        tagSlug: "tag_watershedmanagement",
      },
      {
        keyword: "building-practices-in-nigeria",
        tagSlug: "tag_buildingpracticesinnigeria",
      },
      {
        keyword: "civil-engineering-practices-in-nigeria",
        tagSlug: "tag_civilengineeringpracticesinnigeria",
      },
      {
        keyword: "construction-practices-in-nigeria",
        tagSlug: "tag_constructionpracticesinnigeria",
      },
      {
        keyword: "design-engineering-services-in-nigeria",
        tagSlug: "tag_designengineeringservicesinnigeria",
      },
      {
        keyword: "development-and-planning-in-nigeria",
        tagSlug: "tag_developmentandplanninginnigeria",
      },
      {
        keyword: "project-management",
        tagSlug: "tag_projectmanagement",
      },
      {
        keyword: "environmental-engineering-practices-in-nigeria",
        tagSlug: "tag_environmentalengineeringpracticesinnigeria",
      },
      {
        keyword: "professional-practices-in-nigeria",
        tagSlug: "tag_professionalpracticesinnigeria",
      },
      {
        keyword: "safety-practices-in-nigeria",
        tagSlug: "tag_safetypracticesinnigeria",
      },
      {
        keyword: "sustainable-engineering-practices-in-nigeria",
        tagSlug: "tag_sustainableengineeringpracticesinnigeria",
      },
      {
        keyword: "technical-engineering-practices-in-nigeria",
        tagSlug: "tag_technicalengineeringpracticesinnigeria",
      },
      {
        keyword: "value-engineering-practices-in-nigeria",
        tagSlug: "tag_valueengineeringpracticesinnigeria",
      },
    ];

async function assignTags() {
  for (const mapping of blogTagMap) {
    const tag = await Tag.findOne({ slug: mapping.tagSlug });
    if (!tag) {
      console.log("Tag not found: " + mapping.tagSlug);
      continue;
    }

    // Find blogs missing this tag
    const blogs = await Blog.find({
      title: { $regex: mapping.keyword, $options: "i" },
      $or: [{ tags: { $exists: false } }, { tags: { $size: 0 } }]
    });

    for (const blog of blogs) {
      // Add tag ID to blog
      blog.tags = blog.tags ? [...blog.tags, tag._id] : [tag._id];
      await blog.save();
      console.log(`Updated blog: ${blog.title} -> tag: ${mapping.tagSlug}`);
    }
  }

  console.log("✅ Tag assignment complete!");
  mongoose.disconnect();
}

assignTags();